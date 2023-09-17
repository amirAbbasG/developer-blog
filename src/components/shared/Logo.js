import Link from "next/link";
import Image from "next/image";

import profileImg from "@public/images/profile-img.png"

const Logo = () => {
    return (
        <Link href="/" className="flex items-center gap-3 text-dark">
            <div className="w-16 rounded-full overflow-hidden border border-dark">
                <Image src={profileImg} alt="my logo" className="w-full h-auto rounded-full"/>
            </div>
            <span className="font-bold text-xl">MyBlock</span>
        </Link>
    );
};

export default Logo;