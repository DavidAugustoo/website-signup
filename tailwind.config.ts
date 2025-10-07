import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)']
      },
      colors: {
        brand: {
          navy: '#0F172A',
          blue: '#2563EB',
          sky: '#38BDF8'
        },
        neutral: {
          25: '#FAFBFF',
          50: '#F4F5F7',
          100: '#E4E7EB',
          300: '#CBD2D9',
          500: '#52667A',
          700: '#27364B',
          900: '#0B1D3A'
        },
        accent: {
          pink: '#F472B6'
        }
      },
      boxShadow: {
        card: '0 20px 45px rgba(15, 23, 42, 0.1)'
      },
      backgroundImage: {
        'hero-overlay': 'linear-gradient(180deg, rgba(15, 23, 42, 0.55) 0%, rgba(15, 23, 42, 0.8) 100%)',
        'form-surface': 'linear-gradient(135deg, #FFFFFF 0%, #F7F9FC 100%)'
      },
      borderRadius: {
        xl: '1.25rem'
      }
    }
  },
  plugins: []
};

export default config;
