import Image from "next/image";

import {slug} from "github-slugger";

import {allBlogs} from "@contentlayer/generated";
import {Tag} from "@/components/Elements";
import {OverlayGradiant} from "@/components/shared";
import {BlogDetails, BlogMdx} from "@/components/sections";
import siteMetadata from "@/utils/siteMetaData";


export async function generateStaticParams() {
    return allBlogs.map((blog) => ({slug: blog._raw.flattenedPath}))
}

export async function generateMetadata({params}) {
    const blog = allBlogs.find(b => b._raw.flattenedPath === params.slug)
    if (!blog) {
        return null
    }
    let imageList = [siteMetadata.socialBanner]
    if (blog.image) {
        imageList = typeof blog.image.filePath === "string"
            ? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
            : blog.image
    }

    const ogImages = imageList.map(img => ({
        url: img.includes("http") ? img : siteMetadata.siteUrl + img
    }))

    return {
        title: blog.title,
        description: blog.description,
        openGraph: {
            title: blog.title,
            description: blog.description,
            url: siteMetadata.siteUrl + blog.url,
            siteName: siteMetadata.title,
            type: 'article',
            publishedTime: new Date(blog.publishedAt).toISOString(),
            modifiedTime: new Date(blog.updatedAt || blog.publishedAt).toISOString(),
            locale: 'en_US',
            images: ogImages,
            authors: blog.author ? [blog.author] : [siteMetadata.author]
        },
        twitter: {
            card: 'summary_large_image',
            title: blog.title,
            description: blog.description,
            images: ogImages,
        },

    }
}

const Blog = ({params}) => {
    const blog = allBlogs.find(b => b._raw.flattenedPath === params.slug)
    let imageList = [siteMetadata.socialBanner]
    if (blog.image) {
        imageList = typeof blog.image.filePath === "string"
            ? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
            : blog.image
    }


    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": blog.title,
        "description": blog.description,
        "image": imageList,
        "datePublished": new Date(blog.publishedAt).toISOString(),
        "dateModified": new Date(blog.updatedAt || blog.publishedAt).toISOString(),
        "author": [{
            "@type": "Person",
            "name": blog.author ? blog.author : siteMetadata.author,
            "url": siteMetadata.siteUrl + blog.url
        }]
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
            />
            <article>
                <div className="relative w-full h-[70vh] mb-8 text-center bg-dark">
                    <OverlayGradiant classname="z-10 rounded-none"/>
                    <div
                        className="w-full flex flex-col items-center justify-center z-10 absolute bottom-1/2 translate-y-1/2">
                        <Tag
                            name={blog.tags[0]}
                            link={`/categories/${slug(blog.tags[0])}`}
                            className="px-6 py-2 text-sm"
                        />
                        <h1 className="w-full sm:w-5/6 inline-block mt-6 text-light text-2xl md:text-3xl lg:text-5xl font-semibold capitalize leading-normal">
                            {blog.title}
                        </h1>
                    </div>
                    <div className="absolute inset-0">
                        <Image
                            src={blog.image.filePath.replace("../public", "")}
                            alt={blog.title}
                            width={blog.image.width}
                            height={blog.image.height}
                            placeholder="blur"
                            blurDataURL={blog.image.blurhashDataUrl}
                            className="w-full h-full object-cover object-center"
                            priority
                            sizes="100vw"
                        />
                    </div>
                </div>
                <BlogDetails blog={blog} slug={params.slug}/>

                <div className="grid grid-cols-12 gap-8 lg:gap-12 sxl:gap-16 mt-8 px-5 md:px-10">
                    <div className="col-span-12 lg:col-span-4">
                        <details
                            className="sticky top-6 max-h-[80vh] p-4 rounded-lg border border-dark dark:border-light text-dark dark:text-light
                         overflow-x-hidden overflow-y-auto">
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
                                                className="flex items-center border-dark/40 dark:border-light/40
                                             data-[level=two]:pt-2 data-[level=two]:border-t
                                            data-[level=three]:pl-4 sm:data-[level=three]:pl-6"
                                            >
                                                {
                                                    heading.level === "three"
                                                        ? <span
                                                            className="flex w-f h-1 rounded-full bg-dark mr-2">&nbsp;</span>
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
        </>
    );
};

export default Blog;