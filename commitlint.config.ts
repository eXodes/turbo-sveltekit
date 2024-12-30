import { getPackageNames } from "./packages/turbo/utils/src/scope";

const scopes = ["repo", ...getPackageNames("./")];

export default {
  extends: ["@commitlint/config-conventional", "monorepo"],
  rules: {
    "scope-enum": [2, "always", scopes],
  },
};
