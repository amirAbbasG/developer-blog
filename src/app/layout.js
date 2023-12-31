import {Inter, Manrope} from 'next/font/google'

import {cx} from "@/utils";
import {Header, Footer, ThemeSwitchScript} from "@/components/layout";
import siteMetadata from "@/utils/siteMetaData";

import './globals.css'

const inter = Inter({subsets: ['latin'], display: "swap", variable: "--font-inter"})
const manrope = Manrope({subsets: ['latin'], display: "swap", variable: "--font-manrope"})

export const metadata = {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: {
        template: `%s | ${siteMetadata.title}`,
        default: siteMetadata.title,
    },
    description: siteMetadata.description,
    openGraph: {
        title: siteMetadata.title,
        description: siteMetadata.description,
        url: siteMetadata.siteUrl,
        siteName: siteMetadata.title,
        images: [
            siteMetadata.socialBanner
        ],
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    twitter: {
        card: 'summary_large_image',
        title: siteMetadata.title,
        description: siteMetadata.description,
        images: [siteMetadata.socialBanner],
    },
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={cx(inter.variable, manrope.variable, "font-manrope bg-light dark:bg-dark")}>
        <ThemeSwitchScript/>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    )
}
