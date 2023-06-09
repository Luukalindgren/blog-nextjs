"use client";

import Login from "@/components/Login";
import AccountInfo from "@/components/Account";
import { useAuthContext } from "../context";

export default function Account() {
  const { user } = useAuthContext();

  return (
    <main className="container min-h-screen px-10 mx-auto mb-8 font-mono">
      {user ? <AccountInfo /> : <Login />}
    </main>
  );
}
