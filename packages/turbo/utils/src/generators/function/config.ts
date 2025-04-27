import type { PlopTypes } from "@turbo/gen";
import path from "node:path";
import {
  type TargetGroup,
  generateDirectoryPrompt,
  generateExportPrompt,
  generateNamePrompt,
  generateServerPrompt,
} from "turbo-utils/prompt";

interface PromptsData {
  name: string;
  directory: string;
  export: boolean;
}

export function getFunctionConfig(target: TargetGroup): PlopTypes.PlopGeneratorConfig {
  const isApp = target === "apps";

  const sourcePath = isApp ? "src/lib" : "src";

  return {
    description: "Function is a simple helper utility.",
    async prompts(inquirer) {
      const name = await inquirer.prompt([generateNamePrompt("function")]);
      const directory = await inquirer.prompt([generateDirectoryPrompt("function")]);
      const server = await inquirer.prompt([generateServerPrompt()]);
      const exporting = await inquirer.prompt([generateExportPrompt()]);

      return {
        ...name,
        ...directory,
        ...server,
        ...exporting,
      };
    },
    actions: [
      {
        type: "add",
        path: `${sourcePath}{{#if server}}/server{{/if}}/{{ directory }}{{ dashCase name }}/{{ dashCase name }}.ts`,
        templateFile: path.resolve(__dirname, "./templates/filename.ts.hbs"),
      },
      {
        type: "add",
        path: `${sourcePath}{{#if server}}/server{{/if}}/{{ directory }}{{ dashCase name }}/{{ dashCase name }}.spec.ts`,
        templateFile: path.resolve(__dirname, "./templates/filename.spec.ts.hbs"),
      },
      {
        type: "append",
        path: `${sourcePath}{{#if server}}/server{{/if}}/index.ts`,
        pattern: /\/\* Functions \*\/(?<insertion>)/g,
        template: 'export { {{ camelCase name }} } from ".{{ directory }}{{ name }}/{{ name }}";',
        skip(data: PromptsData) {
          if (!data.export) return "Function not exported";
        },
      },
    ],
  };
}
