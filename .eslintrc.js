module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  settings: {
    react: {
      version: "detected",
    },
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "simple-import-sort"],
  overrides: [
    // override "simple-import-sort" config
    {
      "files": ["*.js", "*.jsx", "*.ts", "*.tsx"],
      "rules": {
        "simple-import-sort/imports": [
          "error",
          {
            "groups": [
              ["^react", "^next", "^@?\\w"],
              // internal packages
              ["^(@|components)(/.*|$)"],
              // relative parent imports
              ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
              // same-folder imports and local dir imports go last
              ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
              // styles
              ["^.+\\.?(css)$"],
            ],
          },
        ],
      },
    },
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    semi: ["error", "always"],
    "object-curly-spacing": ["error", "always"],
    indent: [
      "error",
      2,
      {
        SwitchCase: 1,
      },
    ],
    "comma-dangle": [2, "always-multiline"],
    quotes: ["error", "double", "avoid-escape"],
    "react-hooks/exhaustive-deps": "off",
    "react/no-unknown-property": [2, {
      ignore: ["jsx", "global"],
    }],
  },
};
