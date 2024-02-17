import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';

export default [
  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: true,
    jsx: true,
    commaDangle: 'always-multiline',
    blockSpacing: true,
    arrowParens: true,
    braceStyle: '1tbs',
    quoteProps: 'as-needed',
  }),
  ...tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    {
      languageOptions: {
        parserOptions: {
          project: true,
          tsconfigRootDir: import.meta.dirname,
        },
      },
    },
    /* {
      files: ['*.js', '*.cjs', '*.mjs'],
      ...tseslint.configs.disableTypeChecked,
    }, */
  ),
  {
    rules: {
      '@stylistic/jsx-quotes': ['error', 'prefer-single'],
    }
  }, {
    ignores: [
      'eslint.config.js',
      '.pnp.loader.mjs',
      '.pnp.cjs',
      '.yarn/',
    ],
  },
];
