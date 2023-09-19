/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer")

const nextConfig = {
    compiler: {
        removeConsole: process.env.NODE_ENV === "production" && {
            exclude: ['error'],
        },
    },
}

module.exports = withContentlayer(nextConfig)
