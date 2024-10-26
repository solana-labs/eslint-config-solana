import sortKeysFixPlugin from "eslint-plugin-sort-keys-fix";

import base from "./base.mjs";

export default [
  ...base,
  {
    plugins: {
      "sort-keys-fix": sortKeysFixPlugin,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
        },
      ],
      "no-unused-vars": "off",
    },
  },
];
