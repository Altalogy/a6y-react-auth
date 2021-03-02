// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      arrowFunctions: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['./src'],
      },
    },
  },
  rules: {
    semi: [2, 'never'],
    'comma-dangle': 'off',
    'function-paren-newline': 'off',
    'global-require': 'off',
    'import/no-dynamic-require': 'off',
    'no-inner-declarations': 'off',
    'class-methods-use-this': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'import/no-cycle': 0,
    'no-underscore-dangle': 0,
    'react/require-default-props': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react-hooks/exhaustive-deps': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-pascal-case': 0,
    'react/no-array-index-key': 0,
  },
}
