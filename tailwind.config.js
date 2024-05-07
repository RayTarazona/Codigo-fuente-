/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0a2237",
          "primary-content": "#c8ced4",
          "secondary": "#03538e",
          "secondary-content": "#cedbe9",
          "accent": "#1593c5",
          "accent-content": "#00080e",
          "neutral": "#354252",
          "neutral-content": "#d3d6da",
          "base-100": "#ffffff",
          "base-200": "#dedede",
          "base-300": "#bebebe",
          "base-content": "#161616",
          "info": "#acca3a",
          "info-content": "#0b0f01",
          "success": "#4ade80",
          "success-content": "#021206",
          "warning": "#fbbf24",
          "warning-content": "#150d00",
          "error": "#ef4444",
          "error-content": "#140202",
        },
      }
    ]
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
}

