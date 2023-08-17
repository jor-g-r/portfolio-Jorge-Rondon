const plugin = require('tailwindcss/plugin');

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
      fontSize: {

      },
      colors: {
          primary: {
            DEFAULT : "#FFA216",
            600: "#C87800",
          },
          white: {
            100: "#EFE9F4",
            200: "#D3D3D3",
            300: "#D9D9D9",
            400: "#E5F4E3",
            500: "#BEBEBE",
          },
          dark: {
            950: "#141414",
            900: "#181818",
            600: "#333",
            500: "#3E3E3E",
            400: "#656565",
          }
      },
      backgroundImage: {
        'gradient-linear-dark': 'var(--body-bg)',
        'hero-bg': 'url("./src/app/img/hero-bg-jorge-rondon.jpg")'
      },
    },
  },
  plugins: [],
}
export default config
