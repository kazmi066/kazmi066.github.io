module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      height: {
        'min-screen': "90vh"
      },
      keyframes: {
        "fade-up-in": {
          'from': { opacity: 0, transform: "translateY(14px)" },
          'to': { opacity: 1, transform: 'translateY(0px)' },
        },
        "fade-right": {
          'from': { opacity: 0, transform: "translateX(10px)" },
          'to': { opacity: 1, transform: "translateX(0px)" }
        }
      },
      animation: {
        "fade-up-in": 'fade-up-in .3s',
        "fade-right": 'fade-right .3s'
      },
      borderRadius: {
        'large': '30px'
      },
      colors: {
        'light': '#d4d4d4'
      }
    },
  },
  plugins: [],
}
