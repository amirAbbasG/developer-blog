import {DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon} from "@/components/Icons";
import {cx} from "@/utils";


const linkStyles = "inline-block w-6 h-6 hover:scale-125 transition-all duration-200"
const SocialMedias = ({isDarkBg = false}) => {
    return (
        <div className="flex items-center gap-4">
            <a href="https://example.com" className={linkStyles}><LinkedinIcon/></a>
            <a href="https://example.com" className={linkStyles}><TwitterIcon/></a>
            <a href="https://example.com" className={cx(linkStyles, isDarkBg ? "fill-light" : "")}><GithubIcon/></a>
            <a href="https://example.com" className={linkStyles}><DribbbleIcon/></a>
        </div>
    );
};

export default SocialMedias;