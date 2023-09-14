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
            700: "#A56300"
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
      backgroundImage: (theme) =>({
        'gradient-linear-dark': 'var(--body-bg-1)',
        'circular-orange-lg' : 'repeating-radial-gradient(rgba(255, 162, 22, .4)1px, transparent 4px 13%);',
        'circular-orange' : 'repeating-radial-gradient(rgba(255, 162, 22, .42)2px, transparent 3px 12%);',
        'card-gradient' : 'linear-gradient(137deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.015) 100%);',
      }),
      height: {
        'screen-2/3': '42vh'
      }
    },
  },
  plugins: [],
}
export default config
