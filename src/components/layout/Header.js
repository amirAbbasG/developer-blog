import Link from "next/link";

import {Logo, SocialMedias} from "../shared";
import styles from "./styles/header.module.css"
import {SunIcon} from "@/components/Icons";

const Header = () => {
    return (
        <header className={styles.root}>
            <Logo/>
            <nav className={styles.navContainer}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <button><SunIcon/></button>
            </nav>
            <SocialMedias/>
        </header>
    );
};

export default Header;