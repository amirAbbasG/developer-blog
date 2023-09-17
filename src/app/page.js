import {allBlogs} from "@contentlayer/generated";
import {FeaturedPosts, HomeCover, RecentPosts} from "@/components/sections";


export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <HomeCover blogs={allBlogs}/>
            <FeaturedPosts blogs={allBlogs}/>
            <RecentPosts blogs={allBlogs}/>
        </main>
    )
}
