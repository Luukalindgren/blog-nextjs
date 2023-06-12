"use client";

import BookPostCard from "@/components/Book/BookPostCard";
import { supabase } from "@/lib/supabaseClient";
import BookPostWidget from "@/components/Book/BookPostWidget";
import { useEffect, useState } from "react";
import type { Book } from "@/lib/types";

export const revalidate = 0;

export default async function Books() {
  const [bookSummaries, setBookSummaries] = useState<Book[] | null>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await supabase.from("book_summaries").select("*");
        if (!data) return;
        setBookSummaries(data as Book[]);
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchData();
  }, [supabase]);

  return (
    <main className="container min-h-screen px-10 mx-auto mb-8 font-mono">
      <h2 className="py-6 text-lg font-bold">Kirjatiivistelmät:</h2>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {bookSummaries === null
            ? ""
            : bookSummaries.map((post) => (
                <BookPostCard
                  title={post.title}
                  desc={post.summary}
                  index={post.id}
                  author={post.author}
                  rating={post.rating}
                  key={post.id}
                />
              ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <BookPostWidget />
          </div>
        </div>
      </div>
    </main>
  );
}
