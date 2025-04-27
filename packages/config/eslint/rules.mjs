export const rules = {
  "no-console": ["error", { allow: ["info", "warn", "error"] }],
  "@typescript-eslint/naming-convention": [
    "error",
    {
      selector: "variable",
      format: ["camelCase", "UPPER_CASE", "PascalCase"],
      leadingUnderscore: "allow",
    },
    {
      selector: "typeLike",
      format: ["PascalCase"],
    },
    {
      selector: "enumMember",
      format: ["UPPER_CASE"],
    },
  ],
  "turbo/no-undeclared-env-vars": [
    "error",
    { allowList: ["NODE_ENV", "SITE_URL", "DATABASE_URL"] },
  ],
  "unicorn/better-regex": "warn",
  "unicorn/prefer-top-level-await": "off",
  "unicorn/prevent-abbreviations": "off",
  "unicorn/no-null": "off",
  "unicorn/prefer-string-raw": "off",
  "unicorn/catch-error-name": ["error", { ignore: ["^err\\d*$", "^error\\d*$", /^ignore/i] }],
};
