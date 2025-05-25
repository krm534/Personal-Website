import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{jsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{jsx}"], languageOptions: { globals: globals.browser } },
  pluginReact.configs.flat.recommended,
]);
