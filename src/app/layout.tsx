import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { AuthContextProvider } from "./context";

//TODO:
// Done Make backend for blog posts and book summaries (Supabase?)
// Done Make site fetch data from backend
// Done Make posts appear logically, now they are not showing new lines etc.
// DONE Make ratings appear as stars or some images
// - Make all pages responsive, now they are only desktop friendly
// - Fix render not mathcing DB data, tried something on the main page with useState and useEffect, works but not well with the loading.tsx file...
// - Fix Links to specific summaries, was working, but now not anymore, probably because of the above
// - Make loading to be like skeleton loading, now it's just a circle that spins
// - Add subscription to Supabase to make the site update automatically when new posts are added
// - Add modals(popups) for sign in, sign up, log out, post and summary adding, editing and deleting etc.
// DONE Add functionality to add new posts and book summaries
// - Add sorting system to book summaries (by rating, by date, alphabetically etc.)
// DONE Add account system (Register, log in, log out etc.)
// - Add functionality to edit and delete posts and book summaries
// - Add functionality to comment on posts and book summaries
// - Add pagination to posts and book summaries, 2-3 posts per page
// DONE Make post adding, editing and deleting to be available only for logged in users
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
    <html lang="fi">
      <body>
        <AuthContextProvider>
          <Header />
          {children}
          <Footer />
        </AuthContextProvider>
      </body>
    </html>
  );
}
