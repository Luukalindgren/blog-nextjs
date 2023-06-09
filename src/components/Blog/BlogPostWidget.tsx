"use client";

import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { supabase } from "@/lib/supabaseClient";
import { useAuthContext } from "@/app/context";
import Link from "next/link";
import CustomModal from "../CustomModal";
import { useState } from "react";

export default function BlogPostWidget() {
  const { register, handleSubmit, reset } = useForm();
  const [open, setOpen] = useState(false);
  const [modalText, setModalText] = useState("");

  const { user } = useAuthContext();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    if (modalText === "Blogin lisääminen onnistui!") window.location.reload();
  };

  const onSubmit = async (data: any) => {
    try {
      const { data: newBlogPost, error } = await supabase
        .from("blog_posts")
        .insert({
          title: data.title,
          post: data.post,
        });

      setModalText("Blogin lisääminen onnistui!");
      handleOpen();
    } catch (error) {
      setModalText("Blogin lisääminen epäonnistui!");
      handleOpen();
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
      <h2 className="font-semibold text-center ">Kirjoita postaus</h2>
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
      <CustomModal open={open} close={handleClose} text={modalText} clicked={handleClose} />
    </div>
  );
}
