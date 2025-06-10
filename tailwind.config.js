/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}","./app/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        myGreen: "#10B981", // Emerald 500
        myGrey: "#6B7280", // Gray 600
        myWhite: "#FFFFFF", // White
        myBackground: "#F3F4F6", // Gray 100
      },
    },
  },
  plugins: [],
}