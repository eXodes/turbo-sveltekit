import { rules } from "./rules.mjs";
import prettier from "eslint-config-prettier";
import turbo from "eslint-config-turbo/flat";
import onlyWarn from "eslint-plugin-only-warn";
import unicorn from "eslint-plugin-unicorn";
import globals from "globals";
import ts from "typescript-eslint";

export default ts.config(
  unicorn.configs["flat/recommended"],
  ...ts.configs.recommended,
  ...ts.configs.stylistic,
  prettier,
  ...turbo,
  {
    plugins: {
      "only-warn": onlyWarn,
    },

    languageOptions: {
      globals: { ...globals.node },

      ecmaVersion: "latest",
      sourceType: "module",

      parser: ts.parser,
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },

    rules: {
      ...rules,
    },
  }
);
