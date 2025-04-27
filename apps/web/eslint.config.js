import { includeIgnoreFile } from "@eslint/compat";
import svelteConfig from "eslint-config/svelte";
import { fileURLToPath } from "node:url";
import ts from "typescript-eslint";

const gitignorePath = fileURLToPath(new URL("../../.gitignore", import.meta.url));

export default ts.config(includeIgnoreFile(gitignorePath), ...svelteConfig, {
  rules: {
    "unicorn/no-empty-file": "off",
  },
});
