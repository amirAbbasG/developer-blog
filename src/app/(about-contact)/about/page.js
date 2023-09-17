import {AboutCover, Skills} from "@/components/sections";
import Link from "next/link";

const About = () => {
    return (
        <>
            <AboutCover/>
            <Skills/>
            <h2 className="px-20 font-semibold text-2xl mt-8">
                Have a project in mind? Reach out to me 📞 from <Link className="!underline underline-offset-2" href="/contact"> here </Link> and let's make it happen.
            </h2>
        </>
    );
};

export default About;