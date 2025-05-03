import type { PlopTypes } from "@turbo/gen";
import path from "node:path";
import {
  generateLoadPrompt,
  generateNamePrompt,
  generateRoutePrompt,
  generateServerPrompt,
} from "turbo-utils/prompt";

interface PromptsData {
  name: string;
  route: string;
  load: boolean;
  server: boolean;
}

export function getPageConfig(): PlopTypes.PlopGeneratorConfig {
  return {
    description: "Page is a component that is associated with a route.",
    async prompts(inquirer) {
      const name = await inquirer.prompt([generateNamePrompt("page")]);
      const route = await inquirer.prompt([generateRoutePrompt("page")]);
      const load = await inquirer.prompt([generateLoadPrompt()]);
      const server = await inquirer.prompt([generateServerPrompt()]);

      return {
        ...name,
        ...route,
        ...load,
        ...server,
      };
    },
    actions: [
      {
        type: "add",
        path: "src/routes{{ route }}/+page.svelte",
        templateFile: path.resolve(__dirname, "templates/filename.svelte.hbs"),
      },
      {
        type: "add",
        path: "src/routes{{ route }}/+page.ts",
        templateFile: path.resolve(__dirname, "templates/filename.ts.hbs"),
        skip(data: PromptsData) {
          if (!data.load) return "";
          if (data.server) return "";
        },
      },
      {
        type: "add",
        path: "src/routes{{ route }}/+page.server.ts",
        templateFile: path.resolve(__dirname, "templates/filename.server.ts.hbs"),
        skip(data: PromptsData) {
          if (!data.load) return "";
          if (!data.server) return "";
        },
      },
      {
        type: "add",
        path: "tests{{ route }}/+page.spec.ts",
        templateFile: path.resolve(__dirname, "templates/filename.spec.ts.hbs"),
      },
    ],
  };
}
