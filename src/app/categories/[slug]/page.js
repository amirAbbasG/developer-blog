import React from 'react';
import {allBlogs} from "@contentlayer/generated";
import GithubSlugger, {slug} from "github-slugger";
import {Categories} from "@/components/sections";
import {RecentBlogCard} from "@/components/cards";
import siteMetadata from "@/utils/siteMetaData";

const slugger = new GithubSlugger()

export async function generateStaticParams() {
    const paths = [ {slug: "all"}]

    allBlogs.forEach(blog => {
        blog.tags.forEach(tag => {
            const newPath = {slug: slugger.slug(tag)}
            if (!paths.includes(newPath)) {
                paths.push(newPath)
            }
        })
    })
    return paths
}

export async function generateMetadata({params}) {
    const title = params.slug === "all" ? "web development" : params.slug.replace("-", " ")
    return {
        title: `${title} Blogs`,
        description: `learn more about ${title} through our collection of expert blogs and tutorials`,
    }
}

const Category = ({params}) => {
    const allCategories = ["all"]
    const blogs = allBlogs.filter(blog => blog.tags.some(tag => {
        const slugified = slug(tag)
        if (!allCategories.includes(slugified)) {
            allCategories.push(slugified)
        }
        if (params.slug === "all") {
            return true
        }
        return slugified === params.slug
    }))


    return (
        <article className="flex flex-col mt-12 text-dark dark:text-light">
            <div className="flex flex-col px-5 sm:px-10 md:px-24 sxl:px-32">
                <h1 className="font-semibold text-2xl md:text-4xl lg:text-5xl mt-6">
                    #{params.slug}
                </h1>
                <span className="inline-block mt-2">Discover more categories and expand your knowledge</span>
            </div>
            <Categories categories={allCategories} activeCat={params.slug}/>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16
             mt-5 sm:mt-10 md:mt-16 sxl:mt-24 px-5 sm:px-10 md:px-24 sxl:px-32">
                {
                    blogs.map(blog => (
                        <article key={blog.title} className="col-span-1 row-span-1">
                            <RecentBlogCard blog={blog}/>
                        </article>
                    ))
                }
            </div>
        </article>
    );
};

export default Category;