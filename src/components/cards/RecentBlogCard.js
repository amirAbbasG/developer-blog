import Link from "next/link";
import Image from "next/image";
import {HoverUnderlineText} from "@/components/shared";
import {format} from "date-fns";

const RecentBlogCard = ({blog}) => {
    return (
        <div className="group flex flex-col items-center gap-4 text-dark">
            <Link href={blog.url} className="h-full rounded-xl overflow-hidden">
                <Image
                    src={blog.image.filePath.replace("../public", "")}
                    alt={blog.title}
                    width={blog.image.width}
                    height={blog.image.height}
                    placeholder="blur"
                    blurDataURL={blog.image.blurhashDataUrl}
                    className="w-full h-full aspect-[4/3] object-cover object-center group-hover:scale-105 transition-all duration-300 ease-in-out"
                />
            </Link>
            <div className="flex flex-col w-full">
                <span className="uppercase text-sm font-semibold text-accent">{blog.tags[0]}</span>
                <Link href={blog.url} className="inline-block mb-1 mt-2">
                    <h1 className="font-semibold text-lg capitalize">
                        <HoverUnderlineText text={blog.title} className="from-accent/50 to-accent/50 group-hover:bg-[length:100%_6px]"/>
                    </h1>
                </Link>
                <span className="capitalize text-dark/50 text-base font-semibold">
                    {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
                </span>
            </div>
        </div>
    );
};

export default RecentBlogCard;