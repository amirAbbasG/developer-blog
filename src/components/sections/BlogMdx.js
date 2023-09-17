"use client"
import {useMDXComponent} from "next-contentlayer/hooks"
import Image from "next/image";


const mdxComponent = {
    Image
}

const BlogMdx = ({blog}) => {
    const MDXComponent = useMDXComponent(blog.body.code)

    return (
        <div className="col-span-8 font-inter prose prose-lg max-w-max prose-blockquote:bg-accent/20 prose-blockquote:py-2
        prose-blockquote:px-6 prose-blockquote:border-accent prose-blockquote:not-italic prose-blockquote:rounded-r-lg
        prose-li:marker:text-accent">
            <MDXComponent components={mdxComponent}/>
        </div>
    );
};

export default BlogMdx;