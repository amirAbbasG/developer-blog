import {AboutCover, Skills} from "@/components/sections";
import Link from "next/link";
import siteMetadata from "@/utils/siteMetaData";

export const metadata = {
    title: "About me",
    description: `Here is some detail about myself and my skills`
}

const About = () => {
    return (
        <>
            <AboutCover/>
            <Skills/>
            <h2 className="p-5 xs:p-10 sm:p-12 md:p-16 lg:p-20 font-semibold dark:font-normal dark:text-light text-lg md:text-2xl mt-8">
                Have a project in mind? Reach out to me 📞 from <Link className="!underline underline-offset-2" href="/contact"> here </Link> and let's make it happen.
            </h2>
        </>
    );
};

export default About;