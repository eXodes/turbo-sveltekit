import baseConfig from "eslint-config";
import ts from "typescript-eslint";

export default ts.config(
  {
    ignores: ["node_modules", "dist"],
  },
  ...baseConfig
);
