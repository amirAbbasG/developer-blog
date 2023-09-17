import Image from "next/image";

import {allBlogs} from "@contentlayer/generated";
import {Tag} from "@/components/Elements";
import {OverlayGradiant} from "@/components/shared";
import {BlogDetails, BlogMdx} from "@/components/sections";
import {slug} from "github-slugger";


export async function generateStaticParams() {
    return allBlogs.map((blog) => ({slug: blog._raw.flattenedPath}))
}

const Blog = ({params}) => {
    const blog = allBlogs.find(b => b._raw.flattenedPath === params.slug)

    return (
        <article>
            <div className="relative w-full h-[70vh] mb-8 text-center bg-dark">
                <OverlayGradiant classname="z-10 rounded-none"/>
                <div className="w-full flex flex-col items-center justify-center z-10 absolute bottom-1/2 translate-y-1/2">
                    <Tag
                        name={blog.tags[0]}
                        link={`/categories/${slug(blog.tags[0])}`}
                        className="px-6 py-2 text-sm"
                    />
                    <h1 className="w-5/6 inline-block mt-6 text-light text-5xl font-semibold capitalize leading-normal">
                        {blog.title}
                    </h1>
                </div>
                <div className="absolute inset-0 bg-dark/60">
                    <Image
                        src={blog.image.filePath.replace("../public", "")}
                        alt={blog.title}
                        width={blog.image.width}
                        height={blog.image.height}
                        placeholder="blur"
                        blurDataURL={blog.image.blurhashDataUrl}
                        className="w-full h-full object-cover object-center"
                    />
                </div>
            </div>
            <BlogDetails blog={blog} slug={params.slug}/>

            <div className="grid grid-cols-12 gap-16 mt-8 px-10">
                <div className="col-span-4">
                    <details className="sticky top-6 max-h-[80vh] p-4 rounded-lg border border-dark text-dark overflow-x-hidden overflow-y-auto">
                        <summary className="text-lg font-semibold cursor-pointer">
                            Table Of Content
                        </summary>
                        <ul className="mt-4 text-base font-inter">
                            {
                                blog?.toc?.map(heading => (
                                    <li key={`#${heading.slug}`} className="py-1">
                                        <a
                                            href={`#${heading.slug}`}
                                            data-level={heading.level}
                                            className="flex items-center border-dark/40 data-[level=two]:pt-2 data-[level=two]:border-t
                                            data-[level=three]:pl-6"
                                        >
                                            {
                                                heading.level === "three"
                                                    ? <span className="flex w-f h-1 rounded-full bg-dark mr-2">&nbsp;</span>
                                                    : null
                                            }
                                            <span className="hover:underline">{heading.text}</span>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </details>
                </div>
                <BlogMdx blog={blog}/>
            </div>
        </article>
    );
};

export default Blog;