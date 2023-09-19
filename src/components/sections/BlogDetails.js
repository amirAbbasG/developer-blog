import Link from "next/link";

import {format, parseISO} from "date-fns";
import {slug} from "github-slugger";

import {ViewCounter} from "@/components/Elements";

const BlogDetails = ({blog, slug: blogSlug}) => {

    return (
        <div
            className="flex items-center justify-around flex-wrap px-2 md:px-10 py-4 mx-5 md:mx-10 gap-6
           bg-accent dark:bg-accentDark rounded-lg text-light dark:text-dark font-normal dark:font-semibold text-lg sm:text-xl">
            <time>
                {format(parseISO(blog.publishedAt), "LLL d, yyyy")}
            </time>
            <ViewCounter slug={blogSlug}/>
            <div>
                {blog.readingTime.text}
            </div>
            <Link
                href={`/categories/${slug(blog.tags[0])}`}
            >
                #{blog.tags[0]}
            </Link>
        </div>
    );
};

export default BlogDetails;