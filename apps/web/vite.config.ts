import { enhancedImages } from "@sveltejs/enhanced-img";
import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { svelteTesting } from "@testing-library/svelte/vite";
import svelteEmailTailwind from "svelte-email-tailwind/vite";
import type { TailwindConfig } from "tw-to-css";
import { defineConfig } from "vitest/config";

export const emailTailwindConfig: TailwindConfig = {
  theme: {
    screens: {
      md: { max: "767px" },
      sm: { max: "475px" },
    },
    extend: {},
  },
};

export default defineConfig({
  plugins: [
    tailwindcss(),
    enhancedImages(),
    sveltekit(),
    svelteTesting(),
    svelteEmailTailwind({ tailwindConfig: emailTailwindConfig }),
  ],
  resolve: process.env.VITEST ? { conditions: ["browser"] } : undefined,
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    include: ["src/**/*.spec.ts"],
    passWithNoTests: true,
  },
});
