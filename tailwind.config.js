/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./shared/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
        "./features/**/*.{js,jsx,ts,tsx}"
    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                primary: "#204397",
                secondary: "#16347A",
                tertiary: "#546FAF",
                background: "#F2F2F2"
            },
            fontFamily: {
                'roboto-extrabold': ['Roboto-ExtraBold', 'sans-serif'],
                'roboto-bold': ['Roboto-Bold', 'sans-serif'],
                'roboto-semibold': ['Roboto-SemiBold', 'sans-serif'],
                'roboto-medium': ['Roboto-Medium', 'sans-serif'],
                'roboto-regular': ['Roboto-Regular', 'sans-serif'],
                'roboto-light': ['Roboto-Light', 'sans-serif'],
                'roboto-extralight': ['Roboto-ExtraLight', 'sans-serif'],
                'roboto-thin': ['Roboto-Thin', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

