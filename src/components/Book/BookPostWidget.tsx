"use client";

import { useForm } from "react-hook-form";
import { MenuItem, TextField } from "@mui/material";
import { supabase } from "@/lib/supabaseClient";
import { useAuthContext } from "@/app/context";
import Link from "next/link";

const ratingOptions = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

export default function BookPostWidget() {
  const { register, handleSubmit, reset } = useForm();

  const { user } = useAuthContext();

  const onSubmit = async (data: any) => {
    try {
      const { data: newBookPost, error } = await supabase
        .from("book_summaries")
        .insert({
          title: data.title,
          summary: data.summary,
          rating: data.rating,
          author: data.author,
        });

      if (error) {
        throw new Error(error.message);
      }
      console.log("New book summary created: " + data.title);
      reset();
    } catch (error) {
      console.log("Error creating new book summary.");
    }
  };

  return (
    <div
      className={
        user
          ? "w-full  h-[640px] p-4 my-4 rounded-lg bg-black/10 shadow-lg"
          : "w-full  h-[640px] p-4 my-4 rounded-lg bg-black/30 shadow-lg "
      }
    >
      <h2 className="font-semibold text-center ">Kirjoita tiivistelmä</h2>
      {!user && (
        <div className="absolute p-4 text-center transform -translate-x-1/2 -translate-y-1/2 rounded-lg top-1/2 left-1/2 bg-white/40">
          <p>Kirjaudu sisään kirjoittaaksesi</p>
          <Link href="/account">
            <button className="w-full px-16 py-4 my-4 text-center align-middle transition duration-500 shadow-xl bg-black/20 rounded-xl hover:bg-black/40 active:scale-95">
              Kirjaudu
            </button>
          </Link>
        </div>
      )}
      <div className={user ? "px-4 py-6" : "px-4 py-6 pointer-events-none"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Kirjan nimi"
            id="title"
            type="string"
            required
            fullWidth
            {...register("title")}
          />
          <TextField
            className="mt-4"
            label="Kirjailija"
            id="author"
            type="string"
            required
            fullWidth
            {...register("author")}
          />
          <TextField
            className="mt-4"
            label="Kirjatiivistelmä"
            id="summary"
            type="string"
            fullWidth
            multiline
            rows={10}
            required
            {...register("summary")}
          />
          <TextField
            className="mt-4"
            label="Arvosana 0-5"
            id="rating"
            type="number"
            min="0"
            max="5"
            fullWidth
            required
            select
            defaultValue={5}
            {...register("rating")}
          >
            {ratingOptions.map((rating) => (
              <MenuItem key={rating} value={rating}>
                {rating}
              </MenuItem>
            ))}
          </TextField>
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
