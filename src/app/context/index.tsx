"use client";

import { supabase } from "@/lib/supabaseClient";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import type { User } from "@supabase/supabase-js";

interface AuthContextProps {
  user: User | null;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
});

export const AuthContextProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const onAuthStateChange = async () => {
    try {
      const { data } = await supabase.auth.getUser();
      if (data && data.user) setUser(data.user as User);
      else setUser(null);
      console.log(user);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    onAuthStateChange();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
