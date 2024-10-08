module.exports = {
  env: {
    es2020: true,
    "shared-node-browser": true,
  },
  ignorePatterns: ["dist/**", "lib/**"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "simple-import-sort", "typescript-sort-keys"],
  parserOptions: {
    extraFileExtensions: ['.json'],
    project: "./tsconfig.json",
    sourceType: "module",
  },
  rules: {
    "@typescript-eslint/no-floating-promises": "error",
    // See https://stackoverflow.com/questions/43353087/are-there-performance-concerns-with-return-await/70979225#70979225
    "@typescript-eslint/return-await": ["error", "always"],
    "@typescript-eslint/require-await": "error",
    "@typescript-eslint/sort-type-constituents": "error",
    "no-return-await": "off",
    "simple-import-sort/imports": "error",
    "sort-keys-fix/sort-keys-fix": "error",
    "typescript-sort-keys/interface": "error",
  },
};
