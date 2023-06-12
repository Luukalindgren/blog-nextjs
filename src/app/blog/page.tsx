"use client";

import BlogPostCard from "@/components/Blog/BlogPostCard";
import BlogPostWidget from "@/components/Blog/BlogPostWidget";
import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";
import type { Post } from "@/lib/types";

export const revalidate = 0;

export default async function Blog() {
  const [posts, setPosts] = useState<Post[] | null>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await supabase.from("blog_posts").select("*");
        if (!data) return;
        setPosts(data as Post[]);
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchData();
  }, [supabase]);

  return (
    <main className="container min-h-screen px-10 mx-auto mb-8 font-mono">
      <h2 className="py-6 text-lg font-bold">Viikottaiset kuulumiset:</h2>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {!posts
            ? ""
            : posts.map((post) => (
                <BlogPostCard
                  title={post.title}
                  date={post.inserted_at}
                  desc={post.post}
                  index={post.id}
                  key={post.id}
                />
              ))}
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
