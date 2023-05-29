import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between px-10 py-5 space-x-2 font-bold text-white item-center">
      <div className="flex items-center space-x-2 ">
        <Link href="/">
          <Image
          className="transition duration-500 cursor-pointer hover:opacity-80 hover:scale-105"
            src="/LL.png"
            width={100}
            height={100}
            alt="Luuka Lindgren Logo"
          />
        </Link>
        <Link href="/">
          <h1 className="text-4xl transition duration-500 cursor-pointer hover:text-gray-100/80">
            :n Blogi
          </h1>
        </Link>
      </div>

      <div className="flex items-center py-8 space-x-2 md:space-x-6">
        <Link href="/blog">
          <span className="align-middle transition duration-500 cursor-pointer hover:text-gray-100/80">
            Blogi
          </span>
        </Link>
        <Link href="/books">
          <span className="align-middle transition duration-500 cursor-pointer hover:text-gray-100/80">
            Kirjatiivistelmät
          </span>
        </Link>
        <Link href="/account">
          <span className="align-middle transition duration-500 cursor-pointer hover:text-gray-100/80">
            Käyttäjä
          </span>
        </Link>
      </div>
    </header>
  );
}
