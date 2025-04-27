import type { PlopTypes } from "@turbo/gen";
import path from "node:path";
import { generateApiRoutePrompt, generateMethodPrompt } from "turbo-utils/prompt";

export function getApiConfig(): PlopTypes.PlopGeneratorConfig {
  return {
    description: "API is a http request handler.",
    async prompts(inquirer) {
      const route = await inquirer.prompt([generateApiRoutePrompt("api")]);
      const method = await inquirer.prompt([generateMethodPrompt()]);

      return {
        ...route,
        ...method,
      };
    },
    actions: [
      {
        type: "add",
        path: "src/routes/{{ route }}/+server.ts",
        templateFile: path.resolve(__dirname, "templates/filename.ts.hbs"),
      },
      {
        type: "add",
        path: "tests/{{ route }}/+server.spec.ts",
        templateFile: path.resolve(__dirname, "templates/filename.spec.ts.hbs"),
      },
    ],
  };
}
