import { rules } from "./rules.mjs";
import prettier from "eslint-config-prettier";
import turbo from "eslint-config-turbo/flat";
import onlyWarn from "eslint-plugin-only-warn";
import svelte from "eslint-plugin-svelte";
import unicorn from "eslint-plugin-unicorn";
import globals from "globals";
import svelteParser from "svelte-eslint-parser";
import ts from "typescript-eslint";

export default ts.config(
  unicorn.configs["flat/recommended"],
  ...ts.configs.recommended,
  ...ts.configs.stylistic,
  ...svelte.configs["flat/recommended"],
  prettier,
  ...svelte.configs["flat/prettier"],
  ...turbo,
  {
    plugins: {
      "only-warn": onlyWarn,
    },

    languageOptions: {
      globals: { ...globals.browser, ...globals.node },

      ecmaVersion: "latest",
      sourceType: "module",

      parser: ts.parser,
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        extraFileExtensions: [".svelte"],
      },
    },

    rules: {
      ...rules,
    },
  },
  {
    files: ["**/*.svelte"],

    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: ts.parser,
      },
    },
  }
);
