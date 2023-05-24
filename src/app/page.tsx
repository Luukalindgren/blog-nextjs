import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
        <h1>Viikottaiset kuulumiset:</h1>
        <p>Blogi postaus 1</p>
        <p>Blogi postaus 2</p>
        <div className="pt-4">
          <Link className="p-1 border-2 border-black rounded-md " href="/books">
            Kirjatiivistelmät
          </Link>
        </div>
        <div className="pt-4">
          <Link className="p-1 border-2 border-black rounded-md " href="/account">
            Käyttäjä
          </Link>
        </div>
      </div>
    </main>
  );
}
