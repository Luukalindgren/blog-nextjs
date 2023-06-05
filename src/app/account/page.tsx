import Login from "@/components/Login";
import AccountInfo from "@/components/Account";

export default function Account() {
  return (
    <main className="container min-h-screen px-10 mx-auto mb-8 font-mono">
      <h2 className="py-6 text-lg font-bold">Käyttäjän tiedot:</h2>
      <Login />
      <AccountInfo />
    </main>
  );
}
