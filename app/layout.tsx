import "./globals.css";
import Navigation from "@/components/Navigation";
import { Roboto } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import "../node_modules/locomotive-scroll/dist/locomotive-scroll.css";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "700"] });

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
