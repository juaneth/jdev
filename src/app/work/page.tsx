"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import {
  DM_Sans,
  DM_Mono,
  DM_Serif_Display,
  Instrument_Serif,
} from "next/font/google";

const dm_sans = DM_Sans({ subsets: ["latin"] });

const instrument_serif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
});

const instrument_serif_italic = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  style: "italic",
});

const dm_mono = DM_Mono({
  weight: ["400", "300", "500"],
  subsets: ["latin"],
});
const dm_display = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
});

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

import { useRouter } from "next/navigation";
export default function Work() {
  useEffect(() => {
    sessionStorage.setItem("linked", "true");
  }, []);

  return (
    <div className="relative flex h-screen w-screen bg-[#FAF5E2] px-32 py-16 text-black">
      <img
        src="/grain2.png"
        alt="grain"
        className="absolute left-0 top-0 h-screen w-full rotate-180 opacity-40"
      />
      <h1
        className={`font-italic text-4xl font-bold tracking-tight text-black opacity-90 sm:text-8xl ${instrument_serif_italic.className}`}
      >
        Previous work:
      </h1>
    </div>
  );
}
