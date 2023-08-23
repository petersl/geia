/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["@remix-run/eslint-config", "@remix-run/eslint-config/node", 'plugin:typescript-sort-keys/recommended', 'prettier'],
  plugins: ['sort-destructure-keys'],
  rules: {
    "@typescript-eslint/consistent-type-imports": ["error", {
      prefer: 'type-imports',
      disallowTypeAnnotations: true,
      fixStyle: 'separate-type-imports'
    }],
    'sort-destructure-keys/sort-destructure-keys': ['error', { caseSensitive: false }],
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: false,
        ignoreCase: true,
        reservedFirst: true,
        shorthandFirst: false,
      },
    ],
  }
};
