/** @type {import('tailwindcss').Config} */
import {nextui} from "@nextui-org/react";
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
     "./node_modules/flowbite-react/lib/**/*.js",
    "./utils/**/*.{js,jsx}",
    "./public/**/*.html",
  ],
  theme: {
    darkMode: "class",
    plugins: [nextui()],
    screens: {
   
        'sm': '240px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1500px',
        // => @media (min-width: 1500px) { ... }
      
    },
    
    extend: {
      fontFamily: {
        body: ["Inter", "Sans Serif"],
        title: ["Inter", "Sans Serif"],
        postbody: ["Lora", "Sans Serif"]
      },
      fontSize: {
        body: [
          "1rem",
          {
            lineHeight: "1.5rem"
          }
        ],
        h1: [
          "3.5rem",
          {
            lineHeight: "3.75rem"
          }
        ],
        h2: [
          "2.25rem",
          {
            lineHeight: "2.625rem"
          }
        ],
        h3: [
          "1.875rem",
          {
            lineHeight: "2.25rem"
          }
        ],
        h4: [
          "1.5rem",
          {
            lineHeight: "2rem"
          }
        ],
        h5: [
          "1.25rem",
          {
            lineHeight: "1.75rem"
          }
        ],
        h6: [
          "1.125rem",
          {
            lineHeight: "1.5rem"
          }
        ],
        mini: [
          "0.75rem",
          {
            lineHeight: "1.5rem"
          }
        ]
      },
      colors: {
        black: {
          DEFAULT: "#000000",
          50: "#E6E6E6",
          100: "#CCCCCC",
          200: "#999999",
          300: "#666666",
          400: "#333333",
          500: "#000000",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000"
        },
        white: {
          DEFAULT: "#FFFFFF",
          50: "#FFFFFF",
          100: "#FCFCFC",
          200: "#FCFCFC",
          300: "#FAFAFA",
          400: "#FAFAFA",
          500: "#F7F7F7",
          600: "#C7C7C7",
          700: "#949494",
          800: "#636363",
          900: "#303030"
        },
        primary: {
          50: "#FCFCFC",
          100: "#FCFCFC",
          200: "#FCFCFC",
          300: "#FCFCFC",
          400: "#FAFAFA",
          500: "#FAFAFA",
          600: "#E3E3E3",
          700: "#C7C7C7",
          800: "#A6A6A6",
          900: "#787878",
          950: "#595959"
        },
        secondary: {
          50: "#FFF9F0",
          100: "#FFF5E5",
          200: "#FFEBCC",
          300: "#FFDEAD",
          400: "#FFD494",
          500: "#FFC56E",
          600: "#FFA929",
          700: "#EB8D00",
          800: "#C77700",
          900: "#8A5300",
          950: "#663D00"
        },
        badge: "#F1F5F9",
        badgeText: "#475569",
        button: "#007931",
        hoverbutton: "#1a1a1a",
        orange : "#FAA51A",
        pastel: "#fee6ca"

      }
    },
  },
    plugins: [
        require('flowbite/plugin')
    ]

};
