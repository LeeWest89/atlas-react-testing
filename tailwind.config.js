/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'night-blue':'#172554',
      'lightning-blue':'#1d4ed8',
      'deep-yellow':'#facc15',
      'wing-red':'#e11d48',
      'night-bone':'#d6d3d1',
    },
  },
  plugins: [],
}

