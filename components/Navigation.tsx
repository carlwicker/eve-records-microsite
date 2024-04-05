import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["900"] });

export default function Navigation() {
  return (
    <div className="flex w-full justify-between py-10">
      <div id="logo" className="uppercase text-2xl">
        <Link href="/" className={roboto.className}>
          Eve Records
        </Link>
      </div>
      <div id="nav" className="flex h-20 align-middle gap-4 text-sm">
        <Link href="/about">About</Link>
        <Link href="/digital">Digital</Link>

        <a
          href="https://store.recoverworld.com/store?search=&label=7"
          target="_blank"
        >
          MP3/WAV
        </a>

        <Link href="/merchandise">Merchandise</Link>
        <Link href="/demos">Demos</Link>
        <Link href="/mastering">Mastering</Link>
        <Link href="/studio">Studio</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
}
