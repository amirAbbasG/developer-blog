import Link from "next/link";
import {cx} from "@/utils";

const Tag = ({link = "#", name, className, ...otherProps}) => {
    return (
        <Link
            href={link}
            className={cx(
                "inline-block py-2 sm:py-3 px-6 sm:px-10 bg-dark text-light text-sm sm:text-base " +
                "font-semibold capitalize rounded-full border-2 border-light hover:scale-105 duration-200",
                className
            )}
            {...otherProps}
        >
            {name}
        </Link>
    );
};

export default Tag;