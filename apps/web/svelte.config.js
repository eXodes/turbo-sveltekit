import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: adapter(),
  },

  vitePlugin: {
    dynamicCompileOptions({ filename, compileOptions }) {
      // Enable runes for web files that are in legacy mode
      // Temporary fix for sveltejs/svelte#16199
      if (!filename.includes("node_modules") && !compileOptions.runes) {
        return { runes: true };
      }
    },
  },
};

export default config;
