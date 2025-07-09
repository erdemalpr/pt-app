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
    extend: {
      colors: {
        background: '#121212',
        backgroundSecondary: '#1C1C1C',
        input: '#1E1E1E',
        primary: '#F97316',
        text: '#F5F5F5',
        muted: '#AAAAAA',
        placeholder: '#555555',
        border: '#333333',
        icon: '#888888',
      },
    },
  },
  plugins: [],
}
