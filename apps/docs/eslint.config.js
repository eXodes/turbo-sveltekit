import { includeIgnoreFile } from "@eslint/compat";
import svelteConfig from "eslint-config/svelte";
import storybook from "eslint-plugin-storybook";
import { fileURLToPath } from "node:url";
import ts from "typescript-eslint";

const gitignorePath = fileURLToPath(new URL("../../.gitignore", import.meta.url));

export default ts.config(
  includeIgnoreFile(gitignorePath),
  ...svelteConfig,
  ...storybook.configs["flat/recommended"],
  {
    rules: {
      "unicorn/no-empty-file": "off",
    },
  }
);
