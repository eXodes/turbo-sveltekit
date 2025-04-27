import { PlopTypes } from "@turbo/gen";
import { kebabCase, startCase } from "lodash/fp";

export type TargetGroup = "apps" | "packages";

function transformName(input: string) {
  const names = input.split(".");

  if (names.length === 1) {
    const [name] = names;
    if (!name) {
      return "";
    }

    if (name.startsWith("(") && name.endsWith(")")) {
      const string = kebabCase(name);
      return `(${string})`;
    } else if (name.startsWith("[") && name.endsWith("]")) {
      const string = kebabCase(name);
      return `[${string}]`;
    } else if (name.startsWith("@")) {
      const string = kebabCase(name);
      return `@${string}`;
    } else if (name.startsWith("(.)")) {
      const string = kebabCase(name);
      return `(.)${string}`;
    } else if (name.startsWith("(..)")) {
      const string = kebabCase(name);
      return `(..)${string}`;
    } else if (name.startsWith("(...)")) {
      const string = kebabCase(name);
      return `(...)${string}`;
    } else {
      return kebabCase(name);
    }
  }

  return names
    .map((path) => {
      if (path.includes("(") && path.includes(")")) {
        const string = kebabCase(path);
        return `(${string})`;
      } else if (path.includes("[") && path.includes("]")) {
        const string = kebabCase(path);
        return `[${string}]`;
      } else if (path.startsWith("@")) {
        const string = kebabCase(path);
        return `@${string}`;
      } else {
        return kebabCase(path);
      }
    })
    .join(".");
}

function transformPath(input: string) {
  const paths = input.split("/");

  if (paths.length === 1) {
    return kebabCase(paths[0]!);
  }

  return paths.map((path) => transformName(path)).join("/");
}

interface ValidateOptions {
  required?: boolean;
  slash?: boolean;
  nested?: boolean;
  extension?: boolean;
  space?: boolean;
  api?: boolean;
}

function validate(input: string, target: string, options: ValidateOptions = {}) {
  const {
    required = true,
    nested = true,
    slash = false,
    extension = false,
    space = false,
    api = false,
  } = options;

  if (required && !input) {
    return `${startCase(target)} is required`;
  }

  if (slash && !input.startsWith("/")) {
    return `${startCase(target)} must start with a slash`;
  }

  if (!nested && input.includes("/")) {
    return `${startCase(target)} route/directory cannot be nested`;
  }

  if (extension && !input.includes(".")) {
    return `${startCase(target)} must include an extension`;
  } else if (!extension && input.includes(".")) {
    return `${startCase(target)} cannot include an extension`;
  }

  if (space && !input.includes(" ")) {
    return `${startCase(target)} must include spaces`;
  } else if (!space && input.includes(" ")) {
    return `${startCase(target)} cannot include spaces`;
  }

  if (api && !input.startsWith("/api")) {
    return `${startCase(target)} must start with /api`;
  }

  return true;
}

export function generateNamePrompt(generator: string): PlopTypes.PromptQuestion {
  return {
    type: "input",
    name: "name",
    message: `What is the name of this ${generator}?`,
    filter: transformName,
    validate(input: string) {
      return validate(input, "name");
    },
  };
}

export function generateRoutePrompt(generatorName: string): PlopTypes.PromptQuestion {
  return {
    type: "input",
    name: "route",
    message: `What should be the route for this ${generatorName}?`,
    filter: transformPath,
    validate(input: string) {
      return validate(input, "route", { slash: true });
    },
  };
}

export function generateApiRoutePrompt(generatorName: string): PlopTypes.PromptQuestion {
  return {
    type: "input",
    name: "route",
    message: `What should be the route for this ${generatorName}?`,
    filter: transformPath,
    validate(input: string) {
      return validate(input, "route", { slash: true, api: true });
    },
  };
}

export function generateLoadPrompt(): PlopTypes.PromptQuestion {
  return {
    type: "confirm",
    name: "load",
    message: "Does this page require the data to be loaded?",
    default: false,
  };
}

export function generateServerPrompt(): PlopTypes.PromptQuestion {
  return {
    type: "confirm",
    name: "server",
    message: "Is this a server file?",
    default: false,
  };
}

export function generateMethodPrompt(): PlopTypes.PromptQuestion {
  return {
    type: "list",
    name: "method",
    message: "What should be the method for this API?",
    choices: ["GET", "POST", "PUT", "DELETE"],
  };
}

export function generateDirectoryPrompt(
  generator: string,
  required = false
): PlopTypes.PromptQuestion {
  return {
    type: "input",
    name: "directory",
    message: `What should be the directory for this ${generator}?`,
    default: "/",
    filter: transformPath,
    validate: (input: string) => validate(input, "directory", { slash: true, required }),
  };
}

export function generateSveltePrompt(): PlopTypes.PromptQuestion {
  return {
    type: "confirm",
    name: "svelte",
    message: "Is this a Svelte file?",
    default: true,
  };
}

export function generateExportPrompt(): PlopTypes.PromptQuestion {
  return {
    type: "confirm",
    name: "export",
    message: "Should this be exported?",
    default: true,
  };
}
