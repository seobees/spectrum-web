module.exports = {
  extends: [
    "react-app",
    "plugin:react/recommended",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:react-hooks/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  plugins: ["react", "@typescript-eslint", "jest", "jsx-a11y", "react-hooks", "import"],
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
    quotes: ["error", "single"],

    // import
    "import/no-default-export": "error",
    "import/prefer-default-export": "off",
    "import/no-internal-modules": [
      "error",
      {
        allow: [
          "@testing-library/**"
        ]
      }
    ],
  }
};
