const base = require("./base.js");
module.exports = {
  ...base,
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  plugins: [...base.plugins, "sort-keys-fix"],
  rules: {
    ...base.rules,
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
      },
    ],
    // See https://stackoverflow.com/questions/43353087/are-there-performance-concerns-with-return-await/70979225#70979225
    "@typescript-eslint/return-await": ["error", "always"],
    "no-unused-vars": "off",
    "no-return-await": "off",
  },
};
