import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // spaceGrotesk: ['"Space Grotesk"', "sans-serif"],
        // anticDidone: ['"Antic Didone"', "sans-serif"],
        jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
        // font-family: "Plus Jakarta Sans", sans-serif;
      },
      backgroundColor:{
        custom: 'rgba(40, 146, 243, .1333333333)'
      },
      borderColor: {
        custom: 'rgb(221, 221, 221)'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90.69deg, #9945FF -0.25%, #20E19F 100%)',
      },
      boxShadow:{
        'custom': '0px 4px 200px 0px #E8F9F733'

      }
    },
  },
  plugins: [],
};
export default config;
