import baseConfig from "eslint-config";
import tsEslint from "typescript-eslint";

export default tsEslint.config(
  {
    ignores: ["**/.*.js", "**/node_modules/", "**/dist/"],
  },
  ...baseConfig
);
