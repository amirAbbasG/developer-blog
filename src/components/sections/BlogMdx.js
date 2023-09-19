"use client"
import {useMDXComponent} from "next-contentlayer/hooks"
import Image from "next/image";


const mdxComponent = {
    Image
}

const BlogMdx = ({blog}) => {
    const MDXComponent = useMDXComponent(blog.body.code)

    return (
        <div className="max-w-max col-span-12 lg:col-span-8 font-inter first-letter:text-3xl sm:first-letter:text-5xl
            prose prose-base md:prose-lg
            prose-blockquote:bg-accent/20
            dark:prose-blockquote:bg-accentDark/20
            prose-blockquote:py-2
            prose-blockquote:px-6
            prose-blockquote:border-accent
            dark:prose-blockquote:border-accentDark
            prose-blockquote:not-italic
            prose-blockquote:rounded-r-lg
            prose-li:marker:text-accent
            dark:prose-li:marker:text-accentDark
            dark:prose-invert
         "
        >
            <MDXComponent components={mdxComponent}/>
        </div>
    );
};

export default BlogMdx;