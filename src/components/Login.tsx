"use client";

import { useState } from "react";
import { TextField } from "@mui/material";
import { supabase } from "@/lib/supabaseClient";
import CustomModal from "./CustomModal";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [modalText, setModalText] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    if (modalText === "Kirjautuminen onnistui!") window.location.reload();
  };

  const handleSignUp = async () => {
    if (!email || !password) {
      setModalText("Sähköposti tai salasana puuttuu!");
      handleOpen();
      return;
    }
    try {
      await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
      });
    } catch (error) {
      setModalText("Virhe rekisteröinnissä!");
      handleOpen();
    } 
      setModalText("Vahvista tili sähköpostistasi!");
      handleOpen();
    
  };

  const handleSignIn = async () => {
    if (!email || !password) {
      setModalText("Sähköposti tai salasana puuttuu!");
      handleOpen();
      return;
    }
    try {
      await supabase.auth.signInWithPassword({
        email,
        password,
      });
    } catch (error) {
      setModalText("Virhe kirjautumisessa!");
      handleOpen();
    } finally {
      setModalText("Kirjautuminen onnistui!");
      handleOpen();
    }
  };

  return (
    <div>
      <h2 className="pt-6 text-lg font-bold text-center">
        Kirjaudu sisään tai luo käyttäjä
      </h2>
      <div className="grid grid-cols-2 gap-4 p-16 ">
        <TextField
          name="email"
          type="email"
          label="Sähköposti"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          autoComplete="email"
        />
        <TextField
          type="password"
          name="password"
          label="Salasana"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          autoComplete="current-password"
          inputProps={{ minLength: 6, maxLength: 25 }}
          helperText="Salasanan tulee olla 6-25 merkkiä"
        />
        <button
          className="px-16 py-4 transition duration-500 shadow-xl bg-black/20 rounded-xl hover:bg-black/40 active:scale-95"
          onClick={handleSignIn}
        >
          Kirjaudu sisään
        </button>
        <button
          className="px-16 py-4 transition duration-500 shadow-xl bg-black/20 rounded-xl hover:bg-black/40 active:scale-95"
          onClick={handleSignUp}
        >
          Luo tili
        </button>
      </div>
      <CustomModal open={open} close={handleClose} text={modalText} clicked={handleClose}/>
    </div>
  );
}
