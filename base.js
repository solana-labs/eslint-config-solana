module.exports = {
  env: {
    es2020: true,
    "shared-node-browser": true,
  },
  ignorePatterns: ["dist/**", "lib/**"],
  parser: "@typescript-eslint/parser",
  extends: ["plugin:require-extensions/recommended"],
  plugins: ["@typescript-eslint", "simple-import-sort", "require-extensions"],
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    "simple-import-sort/imports": "error",
    "sort-keys-fix/sort-keys-fix": "error",
  },
};
