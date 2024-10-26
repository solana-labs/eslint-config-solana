import jestPlugin from "eslint-plugin-jest";

import base from "./base.mjs";

export default [
  {
    settings: {
      jest: {
        version: 30,
      },
    },
  },
  ...base,
  jestPlugin.configs["flat/recommended"],
  jestPlugin.configs["flat/style"],
  {
    files: ["**/__tests__/*.ts"],
    plugins: {
      jest: jestPlugin,
    },
    rules: {
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-return": "off",
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
];
