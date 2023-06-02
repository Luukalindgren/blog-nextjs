"use client";

import BlogPostPreview from "@/components/BlogPostPreview";
import BookPostPreview from "@/components/BookPostPreview";
import { supabase } from "./supabaseClient";

export const revalidate = 0;

export default async function Home() {
  const { data: posts } = await supabase.from("blog_posts").select("*");
  const { data: bookSummaries } = await supabase
    .from("book_summaries")
    .select("*");
  return (
    <main className="container min-h-screen px-10 mx-auto font-mono text-center">
      <div>
        <h2 className="py-6 text-lg font-bold">Blogipostaukset:</h2>
        <div className="grid grid-cols-1 gap-4 p-4 my-4 rounded-lg shadow-lg sm:grid-cols-2 lg:grid-cols-3 bg-black/10">
          {!posts ? (
            <p>Blogipostauksien haku epäonnistui!</p>
          ) : (
            posts.map((post) =>
              BlogPostPreview({
                title: post.title,
                date: post.inserted_at,
                index: post.id,
              })
            )
          )}
        </div>
      </div>
      <div>
        <h2 className="py-6 text-lg font-bold">Kirjatiivistelmät:</h2>
        <div className="grid grid-cols-1 gap-4 p-4 my-4 rounded-lg shadow-lg sm:grid-cols-2 lg:grid-cols-3 bg-black/10">
          {!bookSummaries ? (
            <p>Tiivistelmien haku epäonnistui!</p>
          ) : (
            bookSummaries.map((post) =>
              BookPostPreview({
                title: post.title,
                author: post.author,
                desc: post.summary,
                index: post.id,
                rating: post.rating,
              })
            )
          )}
        </div>
      </div>
    </main>
  );
}
