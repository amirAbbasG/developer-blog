import Image from "next/image";
import Link from "next/link";

import {sortBlogs} from "@/utils";
import styles from "./styles/HomeCover.module.css"
import {Tag} from "../Elements";
import {HoverUnderlineText, OverlayGradiant} from "../shared";
import {slug} from "github-slugger";

const HomeCover = ({blogs}) => {
    const sortedBlogs = sortBlogs(blogs)
    const blog = sortedBlogs?.[0]

    return (
        <section className="w-full inline-block">
            <article className={styles.container}>
                <OverlayGradiant/>
                <Image
                    src={blog.image.filePath.replace("../public", "")}
                    alt={blog.title}
                    fill
                    placeholder="blur"
                    blurDataURL={blog.image.blurhashDataUrl}
                    className={styles.bgImage}
                    sizes="100vw"
                    property
                />
                <div className={styles.categories}>
                    <Tag link={`/categories/${slug(blog.tags[0])}`} name={blog.tags[0]}/>
                    <Link href={blog.url} className="mt-2">
                        <h1 className="font-bold text-lg sm:text-xl md:text-3xl lg:text-4xl capitalize">
                            <HoverUnderlineText text={blog.title}/>
                        </h1>
                    </Link>
                    <p className="hidden sm:inline-block font-inter md:text-lg lg:text-xl">{blog.description}</p>
                </div>
            </article>
        </section>
    );
};

export default HomeCover;