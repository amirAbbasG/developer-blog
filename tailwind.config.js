/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                dark: "#222831",
                light: "#fff",
                accent: "#19447A",
                accentDark: "#00FFF5",
                gray: "#747474",
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            fontFamily: {
                inter: ["var(--font-inter)"],
                manrope: ["var(--font-manrope)"]
            },
            animation: {
                roll: "roll 24s linear infinite"
            },
            keyframes: {
                roll: {
                    "0%": {
                        transform: "translateX(100%)"
                    },
                    "100%": {
                        transform: "translateX(-100%)"
                    }
                }
            },
            screens: {
                sxl: "1180px",
                xs: "480px"
            }
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
    ],
}