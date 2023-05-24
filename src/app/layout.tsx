import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

//TODO:
// - Make backend for blog posts and book summaries (Supabase?)
// - Make site fetch data from backend
// - Add functionality to add new posts and book summaries
// - Add account system (Register, log in, log out etc.)
// - Add functionality to edit and delete posts and book summaries
// - Add functionality to comment on posts and book summaries
// - Make post adding, editing and deleting to be available only for logged in users
// - Publish site to some hosting service (Azure or Vercel?)
// - Finish README.md
// - Add styling and maybe animations?


export const metadata: Metadata = {
  title: "Luuka's blog",
  description: "Blog site hosted by Luuka Lindgren",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
