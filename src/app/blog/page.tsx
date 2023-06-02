import BlogPostCard from "@/components/BlogPostCard";
import BlogPostWidget from "@/components/BlogPostWidget";
import { supabase } from "../supabaseClient";

export const revalidate = 0;

export default async function Blog() {
  const { data: posts } = await supabase.from("blog_posts").select("*");

  return (
    <main className="container min-h-screen px-10 mx-auto mb-8 font-mono">
      <h2 className="py-6 text-lg font-bold">Viikottaiset kuulumiset:</h2>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {!posts
            ? ""
            : posts.map((post) =>
                BlogPostCard({
                  title: post.title,
                  date: post.inserted_at,
                  desc: post.post,
                  index: post.id,
                })
              )}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <BlogPostWidget />
          </div>
        </div>
      </div>
    </main>
  );
}
