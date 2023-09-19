import siteMetadata from "@/utils/siteMetaData";

export default function manifest() {
    return {
        name: siteMetadata.title,
        short_name: siteMetadata.title,
        description: siteMetadata.description,
        start_url: '/',
        display: 'standalone',
        // background_color: '#fff',
        // theme_color: '#fff',
        icons: [
            {
                src: '/images/favicon-32x32.png',
                sizes: '32x32',
                type: 'image/x-icon',
            },
            {
                src: '/images/favicon-16x16.png',
                sizes: '16x16',
                type: 'image/x-icon',
            },
            {
                src: '/images/android-chrome-512x512.png',
                sizes: '512x512',
                type: 'image/x-icon',
            },
            {
                src: '/images/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/x-icon',
            },
        ],
    }
}