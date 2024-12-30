import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 5174,
  },
  preview: {
    port: 4174,
  },
  plugins: [sveltekit()],
});
