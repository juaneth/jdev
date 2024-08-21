"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import {
  DM_Sans,
  DM_Mono,
  DM_Serif_Display,
  Instrument_Serif,
} from "next/font/google";

export const dm_sans = DM_Sans({ subsets: ["latin"] });

export const instrument_serif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
});

export const instrument_serif_italic = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  style: "italic",
});

export const dm_mono = DM_Mono({
  weight: ["400", "300", "500"],
  subsets: ["latin"],
});
export const dm_display = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
});

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

import { useRouter } from "next/navigation";
export default function Work() {
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
      <motion.div></motion.div>
    </div>
  );
}