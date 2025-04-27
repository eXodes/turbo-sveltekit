import { svelte } from "@sveltejs/vite-plugin-svelte";
import { svelteTesting } from "@testing-library/svelte/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
  build: {
    rollupOptions: {
      external: ["svelte", "zod"],
    },
  },
  plugins: [svelte(), svelteTesting()],
  resolve: process.env.VITEST ? { conditions: ["browser"] } : undefined,
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    include: ["src/**/*.spec.ts"],
    passWithNoTests: true,
  },
});
