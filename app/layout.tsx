import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { Roboto } from "next/font/google";
// import LocomotiveScroll from "locomotive-scroll";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "700"] });

export const metadata: Metadata = {
  title: "Eve Records",
  description: "Eve Records is a record label based in the UK.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={roboto.className}
      style={{
        backgroundImage: `url('img/forest.jpg')`,
        backgroundSize: "bg-cover",
      }}
    >
      <body className=" text-white container mx-auto">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
