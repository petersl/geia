/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/node',
    'plugin:typescript-sort-keys/recommended',
    'prettier',
  ],
  plugins: ['sort-destructure-keys'],
  // parserOptions: {
  //   ecmaFeatures: {
  //     globalReturn: false,
  //     jsx: true,
  //   },
  //   ecmaVersion: 2020,
  //   project: ['tsconfig.json'],
  //   sourceType: 'module',
  // },
  rules: {
    'import/no-duplicates': ['error', { considerQueryString: true }],
    'linebreak-style': ['error', 'unix'],
    'no-alert': 'error',
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
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
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/consistent-type-exports': 'error',
        '@typescript-eslint/consistent-type-imports': [
          'error',
          { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
        ],
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', ignoreRestSiblings: true }],
      },
      parserOptions: {
        project: ['tsconfig.json'],
      },
    },
  ],
};
