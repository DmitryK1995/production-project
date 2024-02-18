module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ['plugin:react/recommended',
        'airbnb', 'plugin:i18next/recommended',
        'plugin:storybook/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [2, {
            extensions: ['.js', '.jsx', '.tsx'],
        }],
        'react/react-in-jsx-scope': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/function-component-definition': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'no-shadow': 'off',
        'import/no-extraneous-dependencies': 'off',
        indent: [2, 4],
        'react/require-default-props': 'off',
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': ['warn', { markupOnly: true }],
        'max-len': ['error', { ignoreComments: true, code: 120 }],
        'no-literal-string': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-param-reassign': 'off',
    },
    globals: {
        __IS_DEV__: true,
    },

    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
            },
        },
    ],
};
