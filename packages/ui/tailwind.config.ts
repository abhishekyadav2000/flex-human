import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#0A0A0A',
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          400: '#A3A3A3',
          500: '#737373',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0D0D0D',
        },
        accent: {
          DEFAULT: '#E5E5E5',
          blue: '#3B82F6',
          green: '#22C55E',
          amber: '#F59E0B',
          red: '#EF4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        display: ['3rem', { lineHeight: '1.1', fontWeight: '700' }],
        h1: ['2.25rem', { lineHeight: '1.2', fontWeight: '700' }],
        h2: ['1.75rem', { lineHeight: '1.3', fontWeight: '600' }],
        h3: ['1.375rem', { lineHeight: '1.4', fontWeight: '600' }],
        h4: ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }],
        body: ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        caption: ['0.75rem', { lineHeight: '1.4', fontWeight: '500' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
      },
      maxWidth: {
        content: '1280px',
      },
    },
  },
  plugins: [],
};

export default config;
