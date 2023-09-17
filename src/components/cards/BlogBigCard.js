import Image from "next/image";
import Link from "next/link";

import {Tag} from "../Elements";
import {HoverUnderlineText, OverlayGradiant} from "../shared";
import {slug} from "github-slugger";

const BlogBigCard = ({blog}) => {
    return (
        <div className="inline-block rounded-xl overflow-hidden">
            <OverlayGradiant classname="rounded-xl"/>
            <Image
                src={blog.image.filePath.replace("../public", "")}
                alt={blog.title}
                width={blog.image.width}
                height={blog.image.height}
                placeholder="blur"
                blurDataURL={blog.image.blurhashDataUrl}
                className="object-center object-cover rounded-xl -z-10"
            />
            <div className="w-full absolute bottom-0 p-10">
                <Tag link={`/categories/${slug(blog.tags[0])}`} name={blog.tags[0]} className="px-6 py-2 text-sm !border"/>
                <Link href={blog.url}>
                    <h1 className="font-bold text-2xl capitalize text-light mt-4">
                        <HoverUnderlineText text={blog.title}/>
                    </h1>
                </Link>
            </div>
        </div>
    );
};

export default BlogBigCard;