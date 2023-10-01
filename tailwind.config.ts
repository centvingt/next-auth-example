import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        customScreen: '1500px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'ship-black': {
          200: '#E6E9EE',
          300: '#676F82',
          400: '#50627F',
          500: '#334158',
          600: '#000000',
        },
        'ship-white': {
          100: '#ffffff',
          200: '#F4F7FE',
          300: '#eff3ff',
        },
        'ship-blue': {
          100: '#ECF0FF',
          200: '#D0D9FF',
          300: '#A1B3FF',
          400: '#738CFF',
          500: '#457EFF',
          600: '#3C5EDF',
          700: '#36409F',
          800: '#303270',
          900: '#2C2E53',
        },
      },
      animation: {
        loader: 'loader 0.6s infinite alternate',
      },
      keyframes: {
        loader: {
          to: {
            opacity: '0.1',
            transform: 'translate3d(0, -1rem, 0)',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
