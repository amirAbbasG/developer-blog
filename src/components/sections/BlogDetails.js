import Link from "next/link";

import {format, parseISO} from "date-fns";
import {slug} from "github-slugger";

import {ViewCounter} from "@/components/Elements";

const BlogDetails = ({blog, slug: blogSlug}) => {

    return (
        <div
            className="flex items-center justify-around flex-wrap px-10 py-4 mx-10 gap-6 bg-accent rounded-lg text-light font-normal text-xl">
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