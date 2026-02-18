import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export function createConfig(options = {}) {
  const { react = false } = options;

  const configs = [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
      ignores: ['**/node_modules/**', '**/dist/**', '**/.next/**', '**/.turbo/**'],
    },
    {
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
        ],
        '@typescript-eslint/no-explicit-any': 'warn',
      },
    },
  ];

  if (react) {
    configs.push({
      settings: {
        react: { version: 'detect' },
      },
    });
  }

  return tseslint.config(...configs);
}

export default createConfig();
