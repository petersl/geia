/** @type {import('prettier').Config} */
module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',
  jsxBracketSameLine: false,
  jsxSingleQuote: true,
  overrides: [
    {
      files: '*.md',
      options: {
        singleQuote: false,
        quoteProps: 'preserve',
      },
    },
  ],
  printWidth: 120,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
}