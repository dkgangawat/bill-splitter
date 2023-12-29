/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",,'./src/**/*.{js,ts,jsx,tsx,mdx,html}'],
  theme: {
    colors: {
      'primary': '#0e0d11',
      'secondary': '#008170',
      'danger': '#EF4444',
      'cardbg': '#1d1b22',
      "danger2": "#B31312",
      'success': '#10B981',
      'warning': '#F59E0B',
      'info': '#3B82F6',
      'dark': '#111827',
      'light': '#F3F4F6',
      'white': '#ffffff',
      'black': '#000000',
      'gray': '#6B7280',
      'gray2': '#F2FFE9',
      'gray-light': '#F9FAFB',
      'gray-dark': '#374151',
      'transparent': 'transparent',
      'current': 'currentColor',
    },
    extend: {},
  },
  plugins: [],
}

