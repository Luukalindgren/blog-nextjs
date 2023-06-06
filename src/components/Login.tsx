"use client";

import { useRouter } from "next/navigation";
import {  useState } from "react";
import { TextField } from "@mui/material";
import { supabase } from "@/lib/supabaseClient";
import { useAuthContext } from "@/app/context";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { user } = useAuthContext();

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    router.refresh();
  };

  const handleSignIn = async () => {
    if (!email || !password) {
      alert("Sähköposti tai salasana puuttuu!");
      return;
    }
    try {
      setLoading(true);
      await supabase.auth.signInWithPassword({
        email,
        password,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    router.refresh();
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4 p-16 ">
        <TextField
          name="email"
          type="email"
          label="Sähköposti"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <TextField
          type="password"
          name="password"
          label="Salasana"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button
          className="px-16 py-4 transition duration-500 shadow-xl bg-black/20 rounded-xl hover:bg-black/40 active:scale-95"
          onClick={handleSignIn}
        >
          Kirjaudu sisään
        </button>
        <button
          className="px-16 py-4 transition duration-500 shadow-xl bg-black/20 rounded-xl hover:bg-black/40 active:scale-95"
          onClick={handleSignOut}
        >
          Kirjaudu ulos
        </button>
        {!user && (
        <button
          className="w-1/2 col-span-2 px-16 py-4 m-auto transition duration-500 shadow-xl bg-black/20 rounded-xl hover:bg-black/40 active:scale-95"
          onClick={handleSignUp}
        >
          Luo tili
        </button>)}
      </div>

      {user ? (
        <div>
          <h2 className="py-6 text-lg font-bold">Käyttäjätiedot</h2>
          <p>Sähköposti: {user.email}</p>
          <p>Käyttäjätunnus: {user.id}</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
