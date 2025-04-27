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

export function getInterfaceConfig(target: TargetGroup): PlopTypes.PlopGeneratorConfig {
  const isApp = target === "apps";

  const sourcePath = isApp ? "src/lib" : "src";

  return {
    description: "Interface is a type definition that describes the shape of an object.",
    async prompts(inquirer) {
      const name = await inquirer.prompt([generateNamePrompt("interface")]);
      const directory = await inquirer.prompt([generateDirectoryPrompt("interface")]);
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
        path: `${sourcePath}/types{{ directory }}{{ dashCase name }}.interface.ts`,
        templateFile: path.resolve(__dirname, "templates/filename.ts.hbs"),
      },
      {
        type: "append",
        path: `${sourcePath}/index.ts`,
        pattern: /\/\* Types \*\/(?<insertion>)/g,
        template:
          'export type { I{{ pascalCase name }} } from "./types{{ directory }}{{ name }}.interface";',
        skip(data: PromptsData) {
          if (!data.export) return "Interface not exported";
        },
      },
    ],
  };
}
