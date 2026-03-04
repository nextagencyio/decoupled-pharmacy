/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-blue-100', 'text-blue-600',
    'bg-green-100', 'text-green-600',
    'bg-purple-100', 'text-purple-600',
    'bg-yellow-100', 'text-yellow-600',
    'bg-red-100', 'text-red-600',
    'bg-indigo-100', 'text-indigo-600',
    'bg-amber-100', 'text-amber-600',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-source-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
      colors: {
        'primary': {
          "50": "#f0fdf4",
          "100": "#dcfce7",
          "200": "#bbf7d0",
          "300": "#86efac",
          "400": "#4ade80",
          "500": "#22c55e",
          "600": "#16a34a",
          "700": "#15803d",
          "800": "#166534",
          "900": "#14532d",
          "950": "#052e16"
},
        'accent': {
          "50": "#ffffff",
          "100": "#fafafa",
          "200": "#f5f5f5",
          "300": "#e5e5e5",
          "400": "#d4d4d4",
          "500": "#a3a3a3",
          "600": "#737373",
          "700": "#525252",
          "800": "#404040",
          "900": "#262626",
          "950": "#0a0a0a"
},
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
