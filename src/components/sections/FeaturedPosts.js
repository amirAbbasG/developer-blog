import {sortBlogs} from "@/utils";
import {BlogBigCard, BlogSmallCard} from "@/components/cards";

const FeaturedPosts = ({blogs}) => {
    const sortedBlogs = sortBlogs(blogs)

    return (
        <section className="w-full flex flex-col justify-center items-center mt-32 px-32">
            <h2 className="w-full inline-block font-bold text-4xl">Featured Posts</h2>
            <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-16">
                <article className="col-span-1 row-span-2 relative">
                    <BlogBigCard blog={sortedBlogs[1]}/>
                </article>
                <article className="col-span-1 row-span-1 relative">
                    <BlogSmallCard blog={sortedBlogs[2]} />
                </article>
                <article className="col-span-1 row-span-1 relative">
                    <BlogSmallCard blog={sortedBlogs[3]} />
                </article>
            </div>
        </section>
    );
};

export default FeaturedPosts;