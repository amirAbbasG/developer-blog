import Link from "next/link";

import {sortBlogs} from "@/utils";
import {RecentBlogCard} from "@/components/cards";

const RecentPosts = ({blogs}) => {
    const sortedBlogs = sortBlogs(blogs)

    return (
        <section className="w-full flex flex-col justify-center items-center mt-16 sn:mt-24 md:mt-32 p-5 sm:p-10 md:p-24 sxl:px-32">
            <div className="w-full flex items-center justify-between">
                <h2 className="inline-block font-bold text-2xl md:text-4xl dark:text-light">Recent Posts</h2>
                <Link
                    href="/categories/all"
                    className="inline-block font-medium text-base md:text-lg text-accent dark:text-accentDark underline underline-offset-2"
                >
                    View All
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16">
                {
                    sortedBlogs.slice(4, 10).map(blog => (
                        <article key={blog.title} className="col-span-1 row-span-1 relative">
                            <RecentBlogCard blog={blog}/>
                        </article>
                    ))
                }
            </div>
        </section>
    );
};

export default RecentPosts;