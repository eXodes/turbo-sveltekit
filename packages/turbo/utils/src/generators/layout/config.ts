import type { PlopTypes } from "@turbo/gen";
import path from "node:path";
import { generateLoadPrompt, generateRoutePrompt, generateServerPrompt } from "turbo-utils/prompt";

interface PromptsData {
  name: string;
  route: string;
  load: boolean;
  server: boolean;
}

export function getLayoutConfig(): PlopTypes.PlopGeneratorConfig {
  return {
    description: "Layout is a component that is associated with multiple routes.",
    async prompts(inquirer) {
      const route = await inquirer.prompt([generateRoutePrompt("layout")]);
      const load = await inquirer.prompt([generateLoadPrompt()]);
      const server = await inquirer.prompt([generateServerPrompt()]);

      return {
        ...route,
        ...load,
        ...server,
      };
    },
    actions: [
      {
        type: "add",
        path: "src/routes/{{ route }}/+layout.svelte",
        templateFile: path.resolve(__dirname, "templates/filename.svelte.hbs"),
      },
      {
        type: "add",
        path: "src/routes/{{ route }}/+layout.ts",
        templateFile: path.resolve(__dirname, "templates/filename.ts.hbs"),
        skip(data: PromptsData) {
          if (!data.load) return "";
          if (data.server) return "";
        },
      },
      {
        type: "add",
        path: "src/routes/{{ route }}/+layout.server.ts",
        templateFile: path.resolve(__dirname, "templates/filename.server.ts.hbs"),
        skip(data: PromptsData) {
          if (!data.load) return "";
          if (!data.server) return "";
        },
      },
      {
        type: "add",
        path: "tests/{{ route }}/+layout.spec.ts",
        templateFile: path.resolve(__dirname, "templates/filename.spec.ts.hbs"),
      },
    ],
  };
}
