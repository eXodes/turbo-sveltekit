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

export function getComponentConfig(
  target: TargetGroup,
  project: string
): PlopTypes.PlopGeneratorConfig {
  const isApp = target === "apps";

  const sourcePath = isApp ? "src/lib" : "src";
  const componentPath = isApp ? "/components" : "";

  return {
    description: "Component is a reusable UI element.",
    async prompts(inquirer) {
      const name = await inquirer.prompt([generateNamePrompt("component")]);
      const directory = await inquirer.prompt([generateDirectoryPrompt("component")]);
      const exporting = await inquirer.prompt([generateExportPrompt()]);

      return {
        project,
        ...name,
        ...directory,
        ...exporting,
      };
    },
    actions: [
      {
        type: "add",
        path: `${sourcePath}${componentPath}{{ directory }}{{ dashCase name }}/{{ dashCase name }}.svelte`,
        templateFile: path.resolve(__dirname, "templates/filename.svelte.hbs"),
      },
      {
        type: "add",
        path: `${sourcePath}${componentPath}{{ directory }}{{ dashCase name }}/{{ dashCase name }}.stories.svelte`,
        templateFile: path.resolve(__dirname, "templates/filename.stories.svelte.hbs"),
      },
      {
        type: "add",
        path: `${sourcePath}${componentPath}{{ directory }}{{ dashCase name }}/{{ dashCase name }}.spec.ts`,
        templateFile: path.resolve(__dirname, "templates/filename.spec.ts.hbs"),
      },
      {
        type: "append",
        path: `${sourcePath}/index.ts`,
        pattern: /\/\* Components \*\/(?<insertion>)/g,
        template: `export { default as {{ pascalCase name }} } from ".${componentPath}{{ directory }}{{dashCase name}}/{{dashCase name}}.svelte";`,
        skip(data: PromptsData) {
          if (!data.export) return "Component not exported";
        },
      },
    ],
  };
}
