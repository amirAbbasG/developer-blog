"use client"
import {useState} from "react";

import Link from "next/link";

import {Logo, SocialMedias} from "../shared";
import styles from "./styles/header.module.css"
import {MoonIcon, SunIcon} from "@/components/Icons";
import {useSwitchTheme} from "@/hooks/useThemeSwitch";
import {cx} from "@/utils";

const Header = () => {
    const [mode, setMode] = useSwitchTheme()
    const [click, setClick] = useState(false);

    const toggle = () => {
        setClick(!click)
    }

    return (
        <header className={styles.root}>
            <Logo/>
            <button className="inline-block sm:hidden z-50 cursor-pointer" onClick={toggle}>
                <div className={styles.hamburgerContainer}>
                        <span className={cx(styles.hamburgerLine, click ? "-rotate-45" : "translate-y-[6px]")}>
                            &nbsp;
                        </span>
                    <span className={cx(styles.hamburgerLine, click && "opacity-0")}>
                            &nbsp;
                        </span>
                    <span className={cx(styles.hamburgerLine, click ? "rotate-45" : "-translate-y-[6px]")}>
                            &nbsp;
                        </span>
                </div>
            </button>
            <nav className={cx(styles.navContainer, click ? "top-4 sm:top-6" : "-top-20 sm:top-6")}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <button
                    onClick={() => setMode(mode === "light" ? "dark" : "light")}
                    className={cx(
                        "w-6 h-6 flex items-center justify-center rounded-full ml-2 p-1 ease-in-out",
                        mode === "light" ?
                            "bg-dark text-light"
                            : "bg-light text-dark"
                    )}
                >
                    {
                        mode === "light" ? <MoonIcon className="fill-dark"/> : <SunIcon className="fill-dark"/>
                    }
                </button>
            </nav>
            <SocialMedias className="max-sm:hidden"/>
        </header>
    );
};

export default Header;