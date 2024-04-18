"use client";

import Link from "next/link";
import { Roboto } from "next/font/google";
import { useState, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const roboto = Roboto({ subsets: ["latin"], weight: ["900"] });

export default function Navigation() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const navRef = useRef(null);

  return (
    <div>
      <div className="flex w-full flex-col items-center ">
        <div id="logo" className="uppercase text-2xl mx-auto py-20">
          <Link href="/" className={roboto.className}>
            Eve Records
          </Link>
        </div>
        <div className="visable md:hidden pb-10" ref={navRef}>
          <GiHamburgerMenu
            size={"2rem"}
            onClick={() => {
              setMobileNavOpen(!mobileNavOpen);
              console.log(mobileNavOpen);
            }}
            className="hover:text-red-400 text-white transition duration-300 ease-in-out cursor-pointer"
          />
        </div>

        <div
          id="nav"
          className={`flex gap-4 text-sm self-center font-extrabold uppercase  items-center ${mobileNavOpen ? "block flex-col" : "hidden "} md:flex md:flex-row`}
        >
          <Link
            href="/about"
            className="hover:text-red-400 transition duration-500 ease-in-out"
            onClick={() => setMobileNavOpen(false)}
          >
            About
          </Link>
          <div className="hidden md:block">|</div>
          <a
            href="https://store.recoverworld.com/store?search=&label=7"
            target="_blank"
            className="hover:text-red-400 transition duration-500 ease-in-out"
          >
            MP3/WAV
          </a>
          <div className="hidden md:block">|</div>
          <a
            href="https://recoverworld.teemill.com"
            target="_blank"
            className="hover:text-red-400 transition duration-500 ease-in-out"
          >
            Merchandise
          </a>
          <div className="hidden md:block">|</div>
          <Link
            href="/demos"
            className="hover:text-red-400 transition duration-500 ease-in-out"
            onClick={() => setMobileNavOpen(false)}
          >
            Demos
          </Link>
          <div className="hidden md:block">|</div>
          <Link
            href="/mastering"
            className="hover:text-red-400 transition duration-500 ease-in-out"
            onClick={() => setMobileNavOpen(false)}
          >
            Mastering
          </Link>
          <div className="hidden md:block">|</div>
          <Link
            href="/studio"
            className="hover:text-red-400 transition duration-500 ease-in-out"
            onClick={() => setMobileNavOpen(false)}
          >
            Studio
          </Link>
          <div className="hidden md:block">|</div>
          <Link
            href="/contact"
            className="hover:text-red-400 transition duration-500 ease-in-out"
            onClick={() => setMobileNavOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
