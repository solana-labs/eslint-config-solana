import eslint from "@eslint/js";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";
import typescriptSortKeysPlugin from "eslint-plugin-typescript-sort-keys";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    files: ["**/*.ts"],
    ignores: ["dist/**", "lib/**", "**/*.json"],
    languageOptions: {
      globals: {
        ...globals.es2020,
        ...globals["shared-node-browser"],
      },
      parserOptions: {
        project: "./tsconfig.json",
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      sourceType: "module",
    },
    plugins: {
      "simple-import-sort": simpleImportSortPlugin,
      "typescript-sort-keys": typescriptSortKeysPlugin,
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
  }
);
