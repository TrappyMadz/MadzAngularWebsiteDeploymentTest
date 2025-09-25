// eslint.config.js
import tsEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';

export default [
  {
    // 1. Fichiers cibles
    files: ['**/*.ts'],

    // 2. Configuration pour TypeScript
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json', // Important pour les règles basées sur le type
        ecmaVersion: 2022,
        sourceType: 'module',
      },
      globals: {
        ...globals.browser, // Variables globales pour le navigateur
      },
    },

    // 3. Plugins et règles TypeScript recommandées
    plugins: {
      '@typescript-eslint': tsEslint,
    },
    rules: {
      ...tsEslint.configs.recommended.rules,
      // Désactive les règles qui peuvent être trop strictes ou gérées par Prettier
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      // Règles spécifiques à votre projet (ex: pas d'utilisation de 'var')
      'no-var': 'error',
      'prefer-const': 'error',
    },
  },
  {
    // 4. Configuration pour les fichiers HTML de templates Angular
    files: ['**/*.html'],
    // Utilisez un autre parser si vous lintz les templates HTML
    // Note: Le linting de templates est souvent géré par un outil différent ou par l'extension de l'IDE.
    // Cette section est laissée vide mais peut être complétée si vous installez un plugin HTML.
  },
];
