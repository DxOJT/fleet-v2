/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    screens: {
      sm: '768px',
      // => @media (min-width: 640px) { ... }

      md: '992px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1200px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      screens: {
        xs: { raw: '(max-width: 768px)' },
        // => @media (min-height: 640px) { ... }
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // <== disable this!
  },
};
