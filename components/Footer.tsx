import { SiBeatport } from "react-icons/si";
import { RiInstagramLine } from "react-icons/ri";
import { SiFacebook } from "react-icons/si";

import Link from "next/link";

export default function Footer() {
  return (
    <div className="py-32">
      <section className="flex w-full justify-center">
        <div className="w-2/3  align-middle justify-center flex self-center gap-3">
          <Link
            href="https://www.beatport.com/label/eve-records/4320"
            target="_blank"
          >
            <SiBeatport
              style={{ height: "40px", width: "40px" }}
              className="hover:text-red-500 transition-all duration-300 ease-in-out cursor-pointer"
            />
          </Link>

          <Link href="https://www.instagram.com/eve.records" target="_blank">
            <RiInstagramLine
              style={{ height: "40px", width: "40px" }}
              className="hover:text-red-500 transition-all duration-300 ease-in-out cursor-pointer"
            />
          </Link>

          <Link href="https://www.facebook.com/EveRecords" target="_blank">
            <SiFacebook
              style={{ height: "40px", width: "40px" }}
              className="hover:text-red-500 transition-all duration-300 ease-in-out cursor-pointer"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
