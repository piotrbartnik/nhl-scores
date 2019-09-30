module.exports = {
  env: {
    browser: true,
    es6: true,
    amd: true,
    node: true,
    jquery: false,
    jest: true
  },
  parser: "babel-eslint",
  extends: ["eslint:recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["prettier", "react"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        tabWidth: 2,
        singleQuote: true
      }
    ],
    "linebreak-style": ["error", "unix"],
    semi: ["error", "always"],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "no-console": "off",
    "prefer-const": ["error", {
      "destructuring": "any",
      "ignoreReadBeforeAssign": false
    }],
  }
};
