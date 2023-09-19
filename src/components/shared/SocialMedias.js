import {DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon} from "@/components/Icons";
import {cx} from "@/utils";
import siteMetadata from "@/utils/siteMetaData";


const linkStyles = "inline-block w-6 h-6 hover:scale-125 transition-all duration-200"
const SocialMedias = ({isDarkBg = false, className = ""}) => {
    return (
        <div className={cx("flex items-center gap-4", className)}>
            <a href={siteMetadata.linkedin} className={linkStyles}><LinkedinIcon/></a>
            <a href={siteMetadata.twitter} className={linkStyles}><TwitterIcon/></a>
            <a href={siteMetadata.github} className={cx(linkStyles, isDarkBg ? "fill-light dark:fill-dark" : "dark:fill-light")}><GithubIcon/></a>
            <a href={siteMetadata.dribbble} className={linkStyles}><DribbbleIcon/></a>
        </div>
    );
};

export default SocialMedias;