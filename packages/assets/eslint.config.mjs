import svelteConfig from "eslint-config/svelte";
import ts from "typescript-eslint";

export default ts.config(
  {
    ignores: ["node_modules", "dist"],
  },
  ...svelteConfig
);
