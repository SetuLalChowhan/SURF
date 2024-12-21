/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1750px",
      },
      padding: {
        DEFAULT: "16px",
        sm: "1rem",
        lg: "2rem",
        "2xl": "24px",
      },
    },
    extend: {
      boxShadow: {
        'custom': '6px 6px 0px 0px #B2E5F9',
        'custom2': '16px 16px 0px 0px #DBF5FF',
        'custom3': '8.294px 8.294px 0px #DBF5FF',
      },
      fontFamily: {

      },
      borderRadius: {

      },
      colors: {
        customBlue: 'rgba(50, 180, 255, 0.30)',
        peraColor:'#1F335A'

      },
      backgroundImage: {

      },
      screens: {
        xs: "375px",
        sm: "480px",
        md: "576px",
        lg: "768px",
        xlg: "992px",
        xl: "1200px",
        "2xl": "1520px",
      },
    },
  },
  plugins: [],
};
