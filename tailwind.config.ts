import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fall: 'fall 3s linear',
        'pink-pulse': 'pink-pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      fontFamily: {
        "baloo" : ["Baloo", "sans-serif"]
      },
      colors: {
        'pink-500': '#ec4899',
      },
      keyframes: {
        'pink-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 10px #ff69b4, 0 0 20px #ff69b4, 0 0 30px #ff69b4',
          },
          '50%': {
            boxShadow: '0 0 15px #ff69b4, 0 0 25px #ff69b4, 0 0 35px #ff69b4',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
