import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

//TODO:
// Done Make backend for blog posts and book summaries (Supabase?)
// Done Make site fetch data from backend
// Done Make posts appear logically, now they are not showing new lines etc.
// - Make ratings appear as stars or some images
// - Add functionality to add new posts and book summaries
// - Add sorting system to book summaries (by rating, by date, alphabetically etc.)
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
        <Footer />
      </body>
    </html>
  );
}
