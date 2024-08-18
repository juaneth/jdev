import "@/styles/globals.css";

import { DM_Sans, DM_Mono } from "next/font/google";
import { type Metadata } from "next";

import { cn } from "@/lib/utils";

import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "juaneth.dev",
  description: "portfolio + personal site",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export const dm_sans = DM_Sans({ subsets: ["latin"] });
export const dm_mono = DM_Mono({
  weight: ["400", "300", "500"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className="dark" lang="en">
      <body
        className={cn(
          "bg-background flex min-h-screen flex-row antialiased",
          dm_sans.className,
        )}
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
