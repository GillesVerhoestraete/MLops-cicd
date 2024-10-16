// eslint.config.js
export default [
    {
      ignores: ["node_modules/**"],
    },
    {
      files: ["**/*.js"],
      languageOptions: {
        sourceType: "module",
      },
      rules: {
        "no-unused-vars": "warn",
        "no-console": "off",
      },
    },
  ];
  