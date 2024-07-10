import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      common: {
        black: '#000000',
        white: '#FFFFFF',
      },
      grey: {
        200: '#181A20',
        150: '#232121',
        100: '#333333',
        90: '',
        85: '#6C757D',
        75: '#717171',
        70: '#BEBDBD',
        55: '#E9E9E9',
        40: '',
        25: '#F7F7F7',
        10: '',
      },
      skyBlue: {
        100:'#0E6251',
        90:'#0E6655 ',
        80:'',
        70:'',
        60:'',
        50:'',
      },
      text: {
        text1: '',
        text2: '',
        text3: '',
        text4: '',
      },
      primary: {
        cian: '#018B8B',
        mustard: '#FFAC12',
      }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;