/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        fade:"var(--fade)",
        offwhite:"var(--offwhite)",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        "pro-blue":"var(--pro-blue)",
        deepGreen:"var(--deepGreen)",
        main:"var(--main)",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily:{
        nunito:['Nunito Sans','sans-serif'],
        inter:['Inter', 'sans-serif']
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "rotate-star":{
          "0%":{
            transform:"translateX(160px) rotate(360deg)",
            opacity:0,
          },
          "20%":{
            transform:"translateX(0px) rotate(0deg)",
            opacity:1
          },
          "100%":{
            transform:"translateX(0px) rotate(0deg)",
            opacity:1
          }
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        moveBg:{
          "0%":{
            "background-position":"0 0"
          },
          "100%":{
           "background-position":"0px -100px" 
          }
        },
        spinReverse:{
          "0%":{
            transform:"rotate(0deg)"
          },
          "100%":{
            transform: "rotate(-360deg)"
          }
        },
        fadeUp:{
          "0%":{
            transform:"translateY(160px)",
            opacity:0
          },
          "100%":{
            transform:"translateY(0px)",
            opacity:1
          },
        },
        fadeRight:{
          "0%":{
            transform:"translateX(160px)",
            opacity:0
          },
          "100%":{
            transform:"translateX(0px)",
            opacity:1
          },
        },
        fadeLeft:{
          "0%":{
            transform:"translateX(-160px)",
            opacity:0
          },
          "100%":{
            transform:"translateX(0px)",
            opacity:1
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        movebg:"moveBg 30s linear infinite",
        fadeup:"fadeUp 1.2s linear 1",
        faderight:"fadeRight 1s linear 1",
        fadeleft:"fadeLeft 1s linear 1",
        star:"rotate-star 5s linear 10",
        spinreverse:"spinReverse 2s linear infinite"
      },
      screens:{
        xs:"340px",
        xr:"365px",
        ...defaultTheme.screens,
        sm:"560px",
        lg:"1048px",
      },
      backgroundImage:{
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss-animation-delay"),
  ],
}