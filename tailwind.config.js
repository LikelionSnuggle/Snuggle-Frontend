/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        signature: "#F29D38",
        signatureLight: "#E6AE5A",
        signatureThin: "#FFF3DB",
        lightGrey: "#ACACAC",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        fadeInOut: {
          "0%": { opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
        },
      },
      animation: {
        spinSlow: "spin 5s linear infinite",
        spinFast: "spin 4s linear infinite",
        fadeInOutSlow: "fadeInOut 3s ease-in-out infinite",
        fadeInOutNormal: "fadeInOut 4s ease-in-out infinite",
        fadeInOutFast: "fadeInOut 5s ease-in-out infinite",
        bounce: "bounce 1s infinite",
      },
    },
  },
  plugins: [],
};
