import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-text': '#060235',
        'body-text': '#4A4672',
        'primary-main': '#3753FF',
        'primary-surface': '#F4F6FF',
        'primary-border': '#BCC6FF',
        'primary-hover': '#2E45D4',
        'primary-pressed': '#1B2980',
        'primary-focus': '#D7DDFF',
      },
    },
  },
  plugins: [],
}
export default config
