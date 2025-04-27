import type { PlopTypes } from "@turbo/gen";
import path from "node:path";
import {
  type TargetGroup,
  generateDirectoryPrompt,
  generateExportPrompt,
  generateNamePrompt,
  generateServerPrompt,
  generateSveltePrompt,
} from "turbo-utils/prompt";

interface PromptsData {
  name: string;
  directory: string;
  export: boolean;
}

export function getClassConfig(target: TargetGroup): PlopTypes.PlopGeneratorConfig {
  const isApp = target === "apps";

  const sourcePath = isApp ? "src/lib" : "src";

  return {
    description: "Class is a blueprint for creating objects.",
    async prompts(inquirer) {
      const name = await inquirer.prompt([generateNamePrompt("class")]);
      const directory = await inquirer.prompt([generateDirectoryPrompt("class")]);
      const svelte = await inquirer.prompt([generateSveltePrompt()]);
      const server = isApp ? await inquirer.prompt([generateServerPrompt()]) : { server: false };
      const exporting = await inquirer.prompt([generateExportPrompt()]);

      return {
        ...name,
        ...directory,
        ...svelte,
        ...server,
        ...exporting,
      };
    },
    actions: [
      {
        type: "add",
        path: `${sourcePath}{{#if server}}/server{{/if}}/{{ directory }}/{{ dashCase name }}/{{ dashCase name }}{{#if svelte}}.svelte{{/if}}.ts`,
        templateFile: path.resolve(__dirname, "templates/filename.ts.hbs"),
      },
      {
        type: "add",
        path: `${sourcePath}{{#if server}}/server{{/if}}/{{ directory }}/{{ dashCase name }}/{{ dashCase name }}{{#if svelte}}.svelte{{/if}}.spec.ts`,
        templateFile: path.resolve(__dirname, "templates/filename.spec.ts.hbs"),
      },
      {
        type: "append",
        path: `${sourcePath}{{#if server}}/server{{/if}}/index.ts`,
        pattern: /\/\* Classes \*\/(?<insertion>)/g,
        template:
          'export { {{ pascalCase name }} } from ".{{ directory }}{{ name }}/{{ name }}{{#if svelte}}.svelte{{/if}}";',
        skip(data: PromptsData) {
          if (!data.export) return "Class not exported";
        },
      },
    ],
  };
}
