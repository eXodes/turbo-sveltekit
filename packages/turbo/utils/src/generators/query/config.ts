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

export function getQueryConfig(target: TargetGroup): PlopTypes.PlopGeneratorConfig {
  const isApp = target === "apps";

  const sourcePath = isApp ? "src/lib/server" : "src";

  return {
    description: "Query is a function that reads data from the database.",
    async prompts(inquirer) {
      const name = await inquirer.prompt([generateNamePrompt("query")]);
      const directory = await inquirer.prompt([generateDirectoryPrompt("query")]);
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
        path: `${sourcePath}{{ directory }}{{ dashCase name }}/{{ dashCase name }}.server.ts`,
        templateFile: path.resolve(__dirname, "templates/filename.ts.hbs"),
      },
      {
        type: "add",
        path: `${sourcePath}{{ directory }}{{ dashCase name }}/{{ dashCase name }}.server.spec.ts`,
        templateFile: path.resolve(__dirname, "templates/filename.spec.ts.hbs"),
      },
      {
        type: "append",
        path: `${sourcePath}/index.ts`,
        pattern: /\/\* Queries \*\/(?<insertion>)/g,
        template:
          'export { {{ camelCase name }} } from ".{{ directory }}{{ name }}/{{ name }}.server";',
        skip(data: PromptsData) {
          if (!data.export) return "Query not exported";
        },
      },
    ],
  };
}
