import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta padrão ARJ Prime
  primary: "#070D17",       // usada em outras abas do site
  accent: "#664C00",        // destaque dourado
  white: "#FFFFFF",

  // Paleta Seiko Partners
  secondary: "#003b39",     // Seiko (fundo escuro)
  tertiary: "#f05a00",      // Seiko (laranja CTA)
  offwhite: "#f7f7ed",      // Seiko (fundo claro)
  neutro: "#062b2e",        // Seiko (título)
  borda: "#e0e0dc",         // Seiko (divisores)
},
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
      },
      spacing: {
        "72": "18rem",
        "80": "20rem",
        "96": "24rem",
      },
      boxShadow: {
        soft: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        card: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
      borderRadius: {
        lg: "0.5rem",
        xl: "1rem",
      },
      animation: {
        marquee: "marquee 10s linear infinite",
        "fade-in-up": "fadeInUp 1s ease-out forwards",
        "custom-bounce": "customBounce 1s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        customBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};



export default config;


