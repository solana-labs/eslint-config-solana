const base = require("./base.js");
module.exports = {
  ...base,
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  plugins: [...base.plugins, "sort-keys-fix"],
  overrides: [
    {
      files: ["**/__tests__/*.ts"],
      extends: ["plugin:jest/recommended", "plugin:jest/style"],
      plugins: ["jest"],
      rules: {
        "jest/consistent-test-it": "error",
        "jest/no-conditional-in-test": "error",
        "jest/no-duplicate-hooks": "error",
        "jest/no-test-return-statement": "error",
        "jest/prefer-comparison-matcher": "error",
        "jest/prefer-each": "error",
        "jest/prefer-equality-matcher": "error",
        "jest/prefer-expect-assertions": [
          "warn",
          {
            onlyFunctionsWithAsyncKeyword: true,
            onlyFunctionsWithExpectInCallback: true,
            onlyFunctionsWithExpectInLoop: true,
          },
        ],
        "jest/prefer-expect-resolves": "error",
        "jest/prefer-lowercase-title": [
          "error",
          {
            ignoreTopLevelDescribe: true,
          },
        ],
        "jest/prefer-mock-promise-shorthand": "error",
        "jest/prefer-spy-on": "error",
        "jest/prefer-todo": "error",
        "jest/require-top-level-describe": "error",
      },
    },
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
      },
    ],
    "no-unused-vars": "off",
    "sort-keys-fix/sort-keys-fix": "error",
  },
};
