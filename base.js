module.exports = {
  env: {
    es2020: true,
    "shared-node-browser": true,
  },
  ignorePatterns: ["dist/**", "lib/**"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  parserOptions: {
    project: "./tsconfig.json",
    sourceType: "module",
  },
};
