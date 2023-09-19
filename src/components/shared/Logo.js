import Link from "next/link";
import Image from "next/image";

import profileImg from "@public/images/profile-img.png"

const Logo = () => {
    return (
        <Link href="/" className="flex items-center gap-2 md:gap-3 text-dark dark:text-light">
            <div className="w-12 md:w-16 rounded-full overflow-hidden border border-dark dark:border-light/50 dark:font-semibold">
                <Image src={profileImg} alt="my logo" className="w-full h-auto rounded-full" sizes="33vw" priority/>
            </div>
            <span className="font-bold text-lg md:text-xl">MyBlock</span>
        </Link>
    );
};

export default Logo;