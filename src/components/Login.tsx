"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import type { Database } from "@/lib/database.types";
import { TextField } from "@mui/material";

export default function Login() {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

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
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
    router.refresh();
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
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
        onClick={handleSignUp}
      >
        Sign up
      </button>
      <button
        className="px-16 py-4 transition duration-500 shadow-xl bg-black/20 rounded-xl hover:bg-black/40 active:scale-95"
        onClick={handleSignIn}
      >
        Sign in
      </button>
      <button
        className="px-16 py-4 transition duration-500 shadow-xl bg-black/20 rounded-xl hover:bg-black/40 active:scale-95"
        onClick={handleSignOut}
      >
        Sign out
      </button>
    </div>
  );
}
