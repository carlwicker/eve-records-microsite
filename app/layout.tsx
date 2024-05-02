import "./globals.css";
import Navigation from "@/components/Navigation";
import { Roboto } from "next/font/google";
import "../node_modules/locomotive-scroll/dist/locomotive-scroll.css";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { url } from "inspector";

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "700"] });

export const metadata: Metadata = {
  title: "Eve Records",
  description:
    "Welcome to Eve Records, where innovation meets electronic excellence. Explore our curated releases, join our global community, and experience the future of music.",
  keywords:
    "Eve Records, electronic music, music label, music community, music releases, music innovation, studio, music production, music mastering, music distribution, music promotion, music marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className={roboto.className}>
        <SpeedInsights />
        <Analytics />
        <div className="container mx-auto text-white p-5">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
