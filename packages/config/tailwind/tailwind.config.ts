import { theme } from "./theme";
import containerQueries from "@tailwindcss/container-queries";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

const config: Omit<Config, "content"> = {
  darkMode: "class",
  theme: {
    extend: {
      screens: theme.screens,
      colors: theme.colors,
      fontFamily: theme.fontFamily,
      scale: theme.scale,
    },
  },
  plugins: [forms, typography, containerQueries],
};

export default config;
