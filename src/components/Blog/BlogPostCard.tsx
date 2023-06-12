"use client";

import { useAuthContext } from "@/app/context";
import { supabase } from "@/lib/supabaseClient";
import CustomModal from "../CustomModal";
import { useState } from "react";

export default function BlogPostCard(prop: {
  title: string;
  desc: string;
  index: number;
  date: string;
}) {
  const [open, setOpen] = useState(false);
  const { user } = useAuthContext();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const formattedDate = prop.date.split("T")[0].split("-").reverse().join(".");

  const deletePost = async () => {
    const { data, error } = await supabase
      .from("blog_posts")
      .delete()
      .match({ id: prop.index });
    window.location.reload();
  };

  return (
    <div
      id={`${prop.index}`}
      className="p-4 my-4 rounded-lg shadow-lg bg-black/10"
    >
      {user?.email === "luuka.lindgren@gmail.com" && (
        <div className="relative">
          <button
            className="absolute right-0 px-6 py-2 transition duration-500 shadow-xl bg-black/20 rounded-xl hover:bg-black/40 active:scale-95"
            onClick={handleOpen}
          >
            X
          </button>
        </div>
      )}
      <h2 className="font-semibold text-center">{prop.title}</h2>
      <h3 className="mb-4 text-sm italic text-center">{formattedDate}</h3>
      {prop.desc.split("\n").map((paragraph, index) => (
        <p key={index}>
          {paragraph}
          <br />
        </p>
      ))}
      <CustomModal
        open={open}
        close={handleClose}
        clicked={deletePost}
        text="Haluatko varmasti poistaa tämän?"
      />
    </div>
  );
}
