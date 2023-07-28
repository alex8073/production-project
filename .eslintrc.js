module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        "plugin:react/recommended",
        "airbnb",
        "plugin:i18next/recommended",
        "plugin:storybook/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: [
        "react",
        "@typescript-eslint",
        "i18next",
        "react-hooks",
        "path-checker-fsd-stable",
    ],
    rules: {
        indent: [2, 4],
        quotes: [2, "double", { avoidEscape: true }],
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "react/jsx-filename-extension": [
            2,
            {
                extensions: [".js", ".jsx", "tsx"],
            },
        ],
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "import/extensions": "off",
        "react/require-default-props": "off",
        "react/react-in-jsx-scope": "off",
        "react/function-component-definition": "off",
        "import/no-extraneous-dependencies": "off",
        "no-shadow": "off",
        "no-underscore-dangle": "off",
        "no-unused-vars": "warn",
        "@typescript-eslint/no-unused-vars": "off",
        "react/jsx-props-no-spreading": "off",
        "i18next/no-literal-string": [
            "warn",
            {
                markupOnly: true,
                ignoreAttribute: ["data-testid", "to", "target", "direction", "justify", "align", "gap", "role"],
            },
        ],
        "max-len": [
            "error",
            {
                ignoreComments: true,
                code: 140,
            },
        ],
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        "no-param-reassign": "off",
        "linebreak-style": "off",
        "no-undef": "off",
        "react/no-array-index-key": "off",
        "path-checker-fsd-stable/path-checker": "error",
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    overrides: [
        {
            files: ["**/src/**/*.{test,stories}.{ts,tsx}"],
            rules: {
                "i18next/no-literal-string": "off",
                "max-len": "off",
            },
        },
    ],
};
