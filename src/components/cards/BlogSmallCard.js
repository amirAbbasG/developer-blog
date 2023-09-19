import Link from "next/link";
import Image from "next/image";

import {format} from "date-fns";

import {HoverUnderlineText} from "@/components/shared";

const BlogSmallCard = ({blog}) => {
    return (
        <div className="group grid grid-cols-12 gap-4 items-center text-dark">
            <Link href={blog.url} className="col-span-12 lg:col-span-4 h-full rounded-xl overflow-hidden">
                <Image
                    src={blog.image.filePath.replace("../public", "")}
                    alt={blog.title}
                    width={blog.image.width}
                    height={blog.image.height}
                    placeholder="blur"
                    blurDataURL={blog.image.blurhashDataUrl}
                    className="w-full h-full aspect-square object-cover object-center group-hover:scale-105 transition-all duration-300 ease-in-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
            </Link>
            <div className="col-span-12 lg:col-span-8 w-full">
               <span className="w-full uppercase text-xs sm:text-sm font-semibold text-accent dark:text-accentDark">{blog.tags[0]}</span>
                <Link href={blog.url} className="inline-block mb-1 mt-2 w-full">
                    <h2 className="font-semibold text-base sm:text-lg capitalize">
                        <HoverUnderlineText
                            text={blog.title}
                            className="from-accent/50 to-accent/50 group-hover:bg-[length:100%_6px] dark:text-light"
                        />
                    </h2>
                </Link>
                <span className="capitalize text-dark/50 dark:text-light/50 text-xs sm:text-base font-semibold">
                    {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
                </span>
            </div>
        </div>
    );
};

export default BlogSmallCard;