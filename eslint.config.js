// eslint.config.js

import tsEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';

export default [
  {
    // 1. IGNORER LES FICHIERS QUI NE SONT PAS DU CODE TYPESCRIPT
    ignores: ['**/*.html', '**/polyfills.ts', '**/*.config.js', '**/*.spec.ts'],
  },
  {
    // 2. CONFIGURATION PRINCIPALE POUR TOUS LES FICHIERS .ts RESTANTS
    files: ['**/*.ts'],

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.app.json',
        ecmaVersion: 2022,
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
      },
    },

    plugins: {
      '@typescript-eslint': tsEslint,
    },
    rules: {
      // Règles recommandées par TypeScript
      ...tsEslint.configs.recommended.rules,

      // Personnalisation des règles
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
];
