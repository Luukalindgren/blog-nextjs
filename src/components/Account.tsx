"use client";

import { useAuthContext } from "@/app/context";
import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";
import CustomModal from "./CustomModal";
import type { User } from "@supabase/supabase-js";

export default function Account() {
  const { user } = useAuthContext();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    window.location.reload();
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    handleOpen();
  };

  return (
    <div>
      <h2 className="py-6 text-lg font-bold text-center">
        Kirjauduttu sisään tunnuksella:
      </h2>
      <h3>
        <span className="font-semibold">Sähköposti: </span>
        {user?.email}
      </h3>
      <h3>
        <span className="font-semibold">Käyttäjätunnus: </span>
        {user?.id}
      </h3>
      <div className="flex">
        <button
          className="px-16 py-4 mx-auto my-4 transition duration-500 shadow-xl bg-black/20 rounded-xl hover:bg-black/40 active:scale-95"
          onClick={handleSignOut}
        >
          Kirjaudu ulos
        </button>
      </div>
      <CustomModal
        open={open}
        close={handleClose}
        text="Kirjauduttu ulos onnistuneesti"
        clicked={handleClose}
      />
    </div>
  );
}
