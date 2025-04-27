import type { PlopTypes } from "@turbo/gen";
import path from "node:path";
import {
  type TargetGroup,
  generateDirectoryPrompt,
  generateExportPrompt,
  generateNamePrompt,
} from "turbo-utils/prompt";

interface PromptsData {
  name: string;
  directory: string;
  export: boolean;
}

export function getEnumConfig(target: TargetGroup): PlopTypes.PlopGeneratorConfig {
  const isApp = target === "apps";

  const sourcePath = isApp ? "src/lib" : "src";

  return {
    description: "Enum is a set of named constants.",
    async prompts(inquirer) {
      const name = await inquirer.prompt([generateNamePrompt("enum")]);
      const directory = await inquirer.prompt([generateDirectoryPrompt("enum")]);
      const exporting = await inquirer.prompt([generateExportPrompt()]);

      return {
        ...name,
        ...directory,
        ...exporting,
      };
    },
    actions: [
      {
        type: "add",
        path: `${sourcePath}/enum{{ directory }}{{ dashCase name }}.enum.ts`,
        templateFile: path.resolve(__dirname, "templates/filename.ts.hbs"),
      },
      {
        type: "append",
        path: `${sourcePath}/index.ts`,
        pattern: /\/\* Enums \*\/(?<insertion>)/g,
        template:
          'export { type I{{ pascalCase name }}Enum, {{ pascalCase name }}Enum } from "./enum{{ directory }}{{ name }}.enum";',
        skip(data: PromptsData) {
          if (!data.export) return "Enum not exported";
        },
      },
    ],
  };
}
