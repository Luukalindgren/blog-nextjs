"use client";
import { CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <div className="container min-h-screen px-10 mx-auto font-mono text-center">
      <h2 className="py-6 text-lg font-bold">Haetaan tietoja...</h2>
      <CircularProgress />
    </div>
  );
}
