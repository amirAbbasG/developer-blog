import Link from "next/link";

import {sortBlogs} from "@/utils";
import {RecentBlogCard} from "@/components/cards";

const RecentPosts = ({blogs}) => {
    const sortedBlogs = sortBlogs(blogs)

    return (
        <section className="w-full flex flex-col justify-center items-center mt-32 px-32">
            <div className="w-full flex items-center justify-between">
                <h2 className="inline-block font-bold text-4xl">Recent Posts</h2>
                <Link href="/categories/all" className="inline-block font-medium text-accent underline underline-offset-2">View All</Link>
            </div>

            <div className="grid grid-cols-3 grid-rows-2 gap-16 mt-16">
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