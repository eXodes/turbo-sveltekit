import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import { svelteTesting } from "@testing-library/svelte/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
  build: {
    rollupOptions: {
      external: ["svelte", "bits-ui", "@internationalized/date"],
    },
  },
  plugins: [tailwindcss(), svelte(), svelteTesting()],
  resolve: process.env.VITEST ? { conditions: ["browser"] } : undefined,
  test: {
    globals: true,
    css: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    include: ["src/**/*.spec.ts"],
    passWithNoTests: true,
  },
});
