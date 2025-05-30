export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E4D2B',
          light: '#256D38',
          dark: '#15381F',
        },
        secondary: {
          DEFAULT: '#EFCB68',
          light: '#FFDB88',
          dark: '#D0AC4F',
        },
        neutral: {
          light: '#F9F9F9',
          DEFAULT: '#E5E7EB',
          dark: '#374151',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}