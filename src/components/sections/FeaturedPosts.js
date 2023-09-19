import {sortBlogs} from "@/utils";
import {BlogBigCard, BlogSmallCard} from "@/components/cards";

const FeaturedPosts = ({blogs}) => {
    const sortedBlogs = sortBlogs(blogs)

    return (
        <section className="w-full flex flex-col justify-center items-center mt-16 sn:mt-24 md:mt-32 p-5 sm:p-10 md:p-24 sxl:px-32">
            <h2 className="w-full inline-block font-bold text-2xl md:text-4xl dark:text-light">Featured Posts</h2>
            <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-10 sm:mt-16">
                <article className="col-span-2 sxl:col-span-1 row-span-2 relative">
                    <BlogBigCard blog={sortedBlogs[1]}/>
                </article>
                <article className="col-span-2 sm:col-span-1 row-span-1 relative">
                    <BlogSmallCard blog={sortedBlogs[2]} />
                </article>
                <article className="col-span-2 sm:col-span-1 row-span-1 relative">
                    <BlogSmallCard blog={sortedBlogs[3]} />
                </article>
            </div>
        </section>
    );
};

export default FeaturedPosts;