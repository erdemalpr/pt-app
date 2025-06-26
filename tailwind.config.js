/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Ana giriş dosyanız
    "./App.{js,jsx,ts,tsx}",
    // Expo Router klasörü (app dizini)
    "./app/**/*.{js,jsx,ts,tsx}",
    // Ek bileşenleriniz
    "./components/**/*.{js,jsx,ts,tsx}",
    // Eğer başka klasörleriniz varsa ekleyin
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
