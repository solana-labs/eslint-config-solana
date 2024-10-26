import reactHooksPlugin from "eslint-plugin-react-hooks";

import base from "./base.mjs";

export default [
  ...base.map((config) => ({
    ...config,
    files: [...(config.files ?? []), "**/*.tsx"],
  })),
  {
    plugins: {
      "react-hooks": reactHooksPlugin,
    },
    rules: reactHooksPlugin.configs.recommended.rules,
  },
];
