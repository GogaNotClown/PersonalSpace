/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js}",
        "./node_modules/daisyui/**/*.js"
    ],
    theme: {
        extend: {
            fontFamily: {
                custom: ['Google Sans', 'sans-serif'],
            },
        },
    },
    daisyui: {
        themes: [
            "winter",
            "luxury",
        ],
    },
    plugins: [
        require("daisyui")
    ],
}