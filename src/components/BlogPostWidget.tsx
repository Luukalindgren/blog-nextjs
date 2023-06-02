"use client";

import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { supabase } from "@/app/supabaseClient";

export default function BlogPostWidget() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const { data: newBlogPost, error } = await supabase
        .from("blog_posts")
        .insert({
          title: data.title,
          post: data.post,
        });

      if (error) {
        throw new Error(error.message);
      }
      console.log("New blog post created: " + data.title);
      reset();
    } catch (error) {
      console.log("Error creating new blog post");
    }
  };

  return (
    <div className="w-full  h-[640px] p-4 my-4 rounded-lg bg-black/10 shadow-lg">
      <h2 className="font-semibold text-center ">Kirjoita postaus</h2>
      <div className="px-4 py-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Otsikko"
            id="title"
            type="string"
            required
            fullWidth
            {...register("title")}
          />
          <TextField
            className="mt-4"
            label="Blogi postaus"
            id="post"
            type="string"
            fullWidth
            multiline
            rows={16}
            required
            {...register("post")}
          />
          <button
            type="submit"
            className="w-full px-16 py-4 my-4 text-center align-middle transition duration-500 shadow-xl bg-black/20 rounded-xl hover:bg-black/40 active:scale-95"
          >
            Julkaise
          </button>
        </form>
      </div>
    </div>
  );
}
