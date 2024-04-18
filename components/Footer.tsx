import { SiBeatport } from "react-icons/si";
import { RiInstagramLine } from "react-icons/ri";
import { SiFacebook } from "react-icons/si";

import Link from "next/link";

export default function Footer() {
  type IconLinkProps = {
    href: string;
    title: string;
    children: React.ReactNode;
  };

  const IconLink = ({ href, title, children }: IconLinkProps) => (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className="icon-link"
    >
      {children}
    </Link>
  );

  return (
    <div className="py-10">
      <section className="flex w-full justify-center">
        <div className="w-2/3 align-middle justify-center flex self-center gap-3">
          <IconLink
            title="Beatport"
            href="https://www.beatport.com/label/eve-records/4320"
          >
            <SiBeatport
              size={"2em"}
              className="text-white hover:text-blue-300"
            />
          </IconLink>

          <IconLink
            title="Instagram"
            href="https://www.instagram.com/eve.records"
          >
            <RiInstagramLine
              size={"2em"}
              className="text-white hover:text-blue-300"
            />
          </IconLink>

          <IconLink title="Facebook" href="https://www.facebook.com/EveRecords">
            <SiFacebook
              size={"2em"}
              className="text-white hover:text-blue-300"
            />
          </IconLink>
        </div>
      </section>
    </div>
  );
}
