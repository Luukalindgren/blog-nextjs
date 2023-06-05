"use client";

import { supabase } from "@/lib/supabaseClient";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  const onAuthStateChange = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) setUser(user);
      console.log(user);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    onAuthStateChange();
  }, []);

  return <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);