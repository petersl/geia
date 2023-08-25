module.exports = {
  '**/*.{json,md,mdx,css,html,yml,yaml,scss,ts,js,tsx,jsx,cjs,mjs}': 'prettier --ignore-unknown --write',
  '**/*.{ts,js,tsx,jsx,cjs,mjs}': 'eslint',
};
