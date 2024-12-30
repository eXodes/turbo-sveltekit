import baseConfig from "tailwind-config";
import type { Config } from "tailwindcss";

export default {
  presets: [baseConfig],
  content: ["./src/**/*.{html,js,svelte,ts}", "../../packages/ui/src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
  },
} satisfies Config;
