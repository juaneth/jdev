import "@/styles/globals.css";

import {
  DM_Sans,
  DM_Mono,
  DM_Serif_Display,
  Instrument_Serif,
} from "next/font/google";
import { type Metadata } from "next";

import { cn } from "@/lib/utils";

import Image from "next/image";

export const dm_sans = DM_Sans({ subsets: ["latin"] });

import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "juaneth.dev",
  description: "portfolio + personal site",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className="dark" lang="en">
      <body
        className={cn(
          "flex min-h-screen flex-row antialiased",
          dm_sans.className,
        )}
      >
        <div className="fixed top-0 -z-10 h-full w-full"></div>

        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
