/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e293b',
          light: '#334155',
        },
        accent: {
          DEFAULT: '#475569',
          light: '#64748b',
        },
        foreground: '#0f172a',
        muted: '#64748b',
        background: '#f8fafc',
        neutral: '#f1f5f9',
        border: '#e2e8f0',
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
