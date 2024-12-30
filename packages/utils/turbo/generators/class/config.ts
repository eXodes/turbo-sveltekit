import type { PlopTypes } from "@turbo/gen";
import {
  generateDirectoryPrompt,
  generateExportPrompt,
  generateNamePrompt,
  generateSveltePrompt,
} from "turbo-utils/prompt";

interface PromptsData {
  name: string;
  directory: string;
  export: boolean;
}

export const classConfig: PlopTypes.PlopGeneratorConfig = {
  description: "Class is a blueprint for creating objects.",
  async prompts(inquirer) {
    const name = await inquirer.prompt([generateNamePrompt("class")]);
    const directory = await inquirer.prompt([generateDirectoryPrompt("class")]);
    const svelte = await inquirer.prompt([generateSveltePrompt()]);
    const exporting = await inquirer.prompt([generateExportPrompt()]);

    return {
      ...name,
      ...directory,
      ...svelte,
      ...exporting,
    };
  },
  actions: [
    {
      type: "add",
      path: "src/{{#if directory}}{{ directory }}/{{/if}}{{ dashCase name }}/{{ dashCase name }}{{#if svelte}}.svelte{{/if}}.ts",
      templateFile: "class/templates/filename.ts.hbs",
    },
    {
      type: "add",
      path: "src/{{#if directory}}{{ directory }}/{{/if}}{{ dashCase name }}/{{ dashCase name }}{{#if svelte}}.svelte{{/if}}.spec.ts",
      templateFile: "class/templates/filename.spec.ts.hbs",
    },
    {
      type: "append",
      path: "src/index.ts",
      pattern: /\/\* Helpers \*\/(?<insertion>)/g,
      template:
        'export { {{ pascalCase name }} } from "./{{#if directory}}{{ directory }}/{{/if}}{{ name }}/{{ name }}{{#if svelte}}.svelte{{/if}}";',
      skip(data: PromptsData) {
        if (!data.export) return "Class not exported";
      },
    },
  ],
};
