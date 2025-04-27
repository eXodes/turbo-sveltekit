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

export function getSchemaConfig(target: TargetGroup): PlopTypes.PlopGeneratorConfig {
  const isApp = target === "apps";

  const sourcePath = isApp ? "src/lib" : "src";

  return {
    description: "Schema is a Zod schema for validation",
    async prompts(inquirer) {
      const name = await inquirer.prompt([generateNamePrompt("schema")]);
      const directory = await inquirer.prompt([generateDirectoryPrompt("schema")]);
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
        path: `${sourcePath}/schemas{{ directory }}{{ dashCase name }}/{{ dashCase name }}.schema.ts`,
        templateFile: path.resolve(__dirname, "templates/filename.ts.hbs"),
      },
      {
        type: "append",
        path: `${sourcePath}/index.ts`,
        pattern: /\/\* Schemas \*\/(?<insertion>)/g,
        template:
          'export { {{ camelCase name }}Schema } from "./schemas{{ directory }}{{ name }}/{{ name }}.schema";',
        skip(data: PromptsData) {
          if (!data.export) return "Schema not exported";
        },
      },
    ],
  };
}
