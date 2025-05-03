import { includeIgnoreFile } from "@eslint/compat";
import eslintConfig from "eslint-config";
import { fileURLToPath } from "node:url";
import ts from "typescript-eslint";

const gitignorePath = fileURLToPath(new URL("../../.gitignore", import.meta.url));

export default ts.config(includeIgnoreFile(gitignorePath), ...eslintConfig, {
  linterOptions: {
    reportUnusedDisableDirectives: "off",
  },
  rules: {
    "@typescript-eslint/naming-convention": "off",
  },
});
