"use client"

import {FooterForm} from "../forms";
import {SocialMedias} from "../shared";
import Link from "next/link";

const Footer = () => {

    return (
        <footer className="flex flex-col items-center m-10 mt-16 rounded-2xl bg-dark text-light gap-6">
            <h3 className="px-4 font-medium text-center text-4xl capitalize mt-16">
                Interesting Stories | Updates | Guides
            </h3>
            <p className="w-3/5 px-4 font-light text-base text-center">
                Subscribe to learn about new technology and updates. Join over 5000+ members community to stay up to
                date with latest news.
                © 2023 CodeBucks. All rights reserved.
            </p>
            <FooterForm/>
            <SocialMedias isDarkBg/>
            <div className="w-full flex flex-row items-center justify-between px-8 py-6 mt-8 border-t border-light font-medium">
                <span className="text-center">&copy; 2023 CodeBucks. All rights reserved.</span>
                <Link href="/sitemap.xml"  className="text-center underline">
                    sitemap.xml
                </Link>
                <div className="text-center">
                    Made by &hearts; <a href="https://github.com/amirAbbasG" target="_blank" className="underline">Amir</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;