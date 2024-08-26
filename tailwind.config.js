/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Custom Roboto font
      },
      colors: {
        'primaryfirst': '#1B1F3B',
        'primarysecond': '#4E5D6C',
        'accentfirst' : '#4EC5C1',
        'accentsecond' : '#D1D5DB',
        'textcolorfirst': 'FFFFFF',
        'textcolorsecond': '#E5E7EB',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        slideIn: 'slideIn 1s ease-out',
      },
    },
  },
  plugins: [],
}

