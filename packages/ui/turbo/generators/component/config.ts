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

export const componentConfig: PlopTypes.PlopGeneratorConfig = {
  description: "Component is a reusable UI element.",
  async prompts(inquirer) {
    const name = await inquirer.prompt([generateNamePrompt("component")]);
    const directory = await inquirer.prompt([generateDirectoryPrompt("component")]);
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
      path: "src/{{#if directory}}{{ directory }}/{{/if}}{{ dashCase name }}/{{ dashCase name }}.svelte",
      templateFile: "component/templates/filename.svelte.hbs",
    },
    {
      type: "add",
      path: "src/{{#if directory}}{{ directory }}/{{/if}}{{ dashCase name }}/{{ dashCase name }}.spec.ts",
      templateFile: "component/templates/filename.spec.ts.hbs",
    },
    {
      type: "append",
      path: "src/index.ts",
      pattern: /\/\* Components \*\/(?<insertion>)/g,
      template:
        'export { default as {{ pascalCase name }} } from "./{{#if directory}}{{ directory }}/{{/if}}{{dashCase name}}/{{dashCase name}}.svelte";',
      skip(data: PromptsData) {
        if (!data.export) return "Component not exported";
      },
    },
  ],
};
