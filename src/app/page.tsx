import BlogPostCard from "@/components/BlogPostCard";
import PostWidget from "@/components/PostWidget";
import { supabase } from "./utils/supabaseClient";

export const revalidate = 0;

export default async function Home() {
  const { data: posts } = await supabase.from("blog_posts").select("*");

  return (
    <main className="container min-h-screen px-10 mx-auto mb-8 font-mono">
      <h2 className="py-6 text-lg font-bold">Viikottaiset kuulumiset:</h2>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {!posts
            ? ""
            : posts.map((post, index) =>
                BlogPostCard({
                  title: post.title,
                  date: post.inserted_at,
                  desc: post.post,
                  index: index,
                })
              )}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget />
          </div>
        </div>
      </div>
    </main>
  );
}
