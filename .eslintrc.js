module.exports = {
  extends: ["react-app"],
  plugins: ["react"],
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json"
  },
  rules: {
    "lines-between-class-members": [
      "error",
      "always",
      {"exceptAfterSingleLine": true}
    ],
    curly: ["error", "all"],
    semi: ["error", "never"]
  }
};
