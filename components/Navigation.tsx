import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["900"] });

export default function Navigation() {
  return (
    <div className="flex w-full flex-col">
      <div id="logo" className="uppercase text-2xl mx-auto py-20">
        <Link href="/" className={roboto.className}>
          Eve Records
        </Link>
      </div>
      <div
        id="nav"
        className="flex gap-4 text-sm self-center font-extrabold uppercase "
      >
        <Link
          href="/about"
          className="hover:text-red-400 transition duration-500 ease-in-out"
        >
          About
        </Link>
        |
        <a
          href="https://store.recoverworld.com/store?search=&label=7"
          target="_blank"
          className="hover:text-red-400 transition duration-500 ease-in-out"
        >
          MP3/WAV
        </a>
        |
        <a
          href="https://recoverworld.teemill.com"
          target="_blank"
          className="hover:text-red-400 transition duration-500 ease-in-out"
        >
          Merchandise
        </a>
        |
        <Link
          href="/demos"
          className="hover:text-red-400 transition duration-500 ease-in-out"
        >
          Demos
        </Link>
        |
        <Link
          href="/mastering"
          className="hover:text-red-400 transition duration-500 ease-in-out"
        >
          Mastering
        </Link>
        |
        <Link
          href="/studio"
          className="hover:text-red-400 transition duration-500 ease-in-out"
        >
          Studio
        </Link>
        |
        <Link
          href="/contact"
          className="hover:text-red-400 transition duration-500 ease-in-out"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
