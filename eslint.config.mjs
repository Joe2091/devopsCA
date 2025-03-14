import globals from "globals";
import js from "@eslint/js";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: globals.node,
    },
    rules: {
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "no-console": "warn",
      "eqeqeq": ["error", "always"],
      "no-unused-vars": "warn",
    },
  },
  js.configs.recommended,
];
