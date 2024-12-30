import type { PlopTypes } from "@turbo/gen";
import {
  generateDirectoryPrompt,
  generateExportPrompt,
  generateNamePrompt,
} from "turbo-utils/prompt";

interface PromptsData {
  name: string;
  directory: string;
  export: boolean;
}

export const functionConfig: PlopTypes.PlopGeneratorConfig = {
  description: "Function is a simple helper utility.",
  async prompts(inquirer) {
    const name = await inquirer.prompt([generateNamePrompt("function")]);
    const directory = await inquirer.prompt([generateDirectoryPrompt("function")]);
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
      path: "src/{{#if directory}}{{ directory }}/{{/if}}{{ dashCase name }}/{{ dashCase name }}.ts",
      templateFile: "function/templates/filename.ts.hbs",
    },
    {
      type: "add",
      path: "src/{{#if directory}}{{ directory }}/{{/if}}{{ dashCase name }}/{{ dashCase name }}.spec.ts",
      templateFile: "function/templates/filename.spec.ts.hbs",
    },
    {
      type: "append",
      path: "src/index.ts",
      pattern: /\/\* Helpers \*\/(?<insertion>)/g,
      template:
        'export { {{ camelCase name }} } from "./{{#if directory}}{{ directory }}/{{/if}}{{ name }}/{{ name }}";',
      skip(data: PromptsData) {
        if (!data.export) return "Function not exported";
      },
    },
  ],
};
