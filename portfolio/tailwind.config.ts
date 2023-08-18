import type { Config } from 'tailwindcss'

const plugin = require('tailwindcss/plugin');





const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
      boxShadow: {
        'nav-shadow': '0px 3px 10px 2px rgba(0, 0, 0, 0.30);'
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
       
      },
    },
  },
  plugins: [],
}
export default config
