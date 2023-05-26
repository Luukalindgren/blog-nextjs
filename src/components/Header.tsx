import React, { useContext } from "react";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="container px-10 mx-auto mb-8">
      <div className="inline-block w-full py-8 border-b border-gray-800">
        <div className="block md:float-left">
          <Link href="/">
            <h1 className="text-4xl font-bold text-white cursor-pointer">
              Luukan Blogi
            </h1>
          </Link>
        </div>
        <div className="contents ">
          <Link href="/account">
            <span className="mt-2 ml-4 font-semibold text-white align-middle cursor-pointer md:float-right">
              Käyttäjä
            </span>
          </Link>
          <Link href="/books">
            <span className="mt-2 ml-4 font-semibold text-white align-middle cursor-pointer md:float-right">
              Kirjatiivistelmät
            </span>
          </Link>
          <Link href="/">
            <span className="mt-2 ml-4 font-semibold text-white align-middle cursor-pointer md:float-right">
              Blogi
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
