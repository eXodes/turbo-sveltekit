import type { PlopTypes } from "@turbo/gen";
import path from "node:path";
import { type TargetGroup, generateDirectoryPrompt, generateNamePrompt } from "turbo-utils/prompt";

export function getEmailConfig(target: TargetGroup): PlopTypes.PlopGeneratorConfig {
  const isApp = target === "apps";

  const sourcePath = isApp ? "src/lib" : "src";

  return {
    description: "Email is a component that is used to render emails",
    async prompts(inquirer) {
      const name = await inquirer.prompt([generateNamePrompt("email")]);
      const directory = await inquirer.prompt([generateDirectoryPrompt("email")]);

      return {
        ...name,
        ...directory,
      };
    },
    actions: [
      {
        type: "add",
        path: `${sourcePath}/emails{{ directory }}{{ dashCase name }}.svelte`,
        templateFile: path.resolve(__dirname, "templates/filename.svelte.hbs"),
      },
    ],
  };
}
