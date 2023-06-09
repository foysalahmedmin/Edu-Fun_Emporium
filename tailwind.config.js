/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_color: '#00b8ec',
        secondary_color: '#944b9c',
        yellow_color: '#fcb415'
      },
      fontFamily: {
        rancho: ['Rancho', 'cursive']
      }
    },
    animation: {
      text: 'text 5s ease infinite',
    },
    keyframes: {
      text: {
        '0%, 100%': {
          'background-size': '200% 200%',
          'background-position': 'left center',
        },
        '50%': {
          'background-size': '200% 200%',
          'background-position': 'right center',
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#00b8ec",

          "secondary": "#944b9c",

          "accent": "#37CDBE",

          "neutral": "#3D4451",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#fcb415",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
// primary_color: '#db915e'