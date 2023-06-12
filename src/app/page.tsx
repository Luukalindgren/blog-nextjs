"use client";

import BlogPostPreview from "@/components/Blog/BlogPostPreview";
import BookPostPreview from "@/components/Book/BookPostPreview";
import { supabase } from "../lib/supabaseClient";
import { useEffect, useState } from "react";
import type { Book, Post } from "@/lib/types";

export const revalidate = 0;

export default async function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [bookSummaries, setBookSummaries] = useState<Book[]>([]);



  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await supabase.from("blog_posts").select("*");
        if (!data) return;
        setPosts(data as Post[]);
      } catch (error) {
        console.log(error);
      }
    };
  
    const fetchBookSummaries = async () => {
      try {
        const { data } = await supabase.from("book_summaries").select("*");
        if (!bookSummaries) return;
        setBookSummaries(data as Book[]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
    fetchBookSummaries();
  }, []);

  return (
    <main className="container min-h-screen px-10 mx-auto font-mono text-center">
      <div>
        <h2 className="py-6 text-lg font-bold">Blogipostaukset:</h2>
        <div className="grid grid-cols-1 gap-4 p-4 my-4 rounded-lg shadow-lg sm:grid-cols-2 lg:grid-cols-3 bg-black/10">
          {posts.map((post) =>
            BlogPostPreview({
              title: post.title,
              date: post.inserted_at,
              index: post.id,
            })
          )}
        </div>
      </div>
      <div>
        <h2 className="py-6 text-lg font-bold">Kirjatiivistelmät:</h2>
        <div className="grid grid-cols-1 gap-4 p-4 my-4 rounded-lg shadow-lg sm:grid-cols-2 lg:grid-cols-3 bg-black/10">
          {bookSummaries.map((post) =>
            BookPostPreview({
              title: post.title,
              author: post.author,
              desc: post.summary,
              index: post.id,
              rating: post.rating,
            })
          )}
        </div>
      </div>
    </main>
  );
}
