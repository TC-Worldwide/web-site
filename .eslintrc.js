module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended' // Added Prettier plugin
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        paths: ['src'] // Ensure ESLint resolves imports relative to the project root
      }
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier' // Added Prettier plugin
  ],
  rules: {
    // Add custom rules here
    'prettier/prettier': 'error' // Added Prettier rule
  }
};