"use client";

import "./globals.css";
import Navigation from "@/components/Navigation";
import { Roboto } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import "../node_modules/locomotive-scroll/dist/locomotive-scroll.css";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "700"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const scrollRef = useRef(null);
  const [scroll, setScroll] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("locomotive-scroll").then((LocomotiveScroll) => {
        const scrollInstance = new LocomotiveScroll.default({
          el: scrollRef.current,
          smooth: true,
        });
        setScroll(scrollInstance);
      });
    }

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <html lang="en" className="bg-black">
      <body className={roboto.className}>
        <SpeedInsights />
        <Analytics />
        <div
          ref={scrollRef}
          data-scroll-container
          className="container mx-auto text-white p-5"
        >
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
