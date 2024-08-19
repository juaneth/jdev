"use client";

import Link from "next/link";

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

import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  let standardTransition = {
    type: "tween",
    duration: 1.5,
    ease: [0.87, 0, 0.05, 1],
  };

  return (
    <div className="flex w-full flex-col items-center gap-8 md:p-6">
      <motion.div
        initial={{
          height: "100vh",
          width: "100%",
          borderRadius: "0px",
        }}
        animate={{
          height: "auto",
        }}
        transition={standardTransition}
        className={
          "relative z-50 flex w-full flex-col items-center justify-center overflow-hidden bg-[#FAF5E2] text-center"
        }
      >
        <img
          src="/grain2.png"
          alt="grain"
          className="absolute h-screen w-full rotate-180 opacity-40"
        />
        <div className="flex flex-col items-center justify-center overflow-hidden p-8 text-center md:p-16 md:px-32">
          <h1
            className={`text-2xl text-[#241D26] opacity-90 sm:text-4xl ${instrument_serif.className}`}
          >
            i am a
          </h1>
          <motion.h1
            initial={{
              opacity: 0.4,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={standardTransition}
            className={`texteffect z-10 text-5xl italic text-transparent sm:text-[70px] sm:tracking-[-2.96px] ${instrument_serif_italic.className}`}
          >
            web developer and designer
          </motion.h1>

          <h1
            className={`text-2xl text-[#241D26] opacity-90 sm:text-4xl ${instrument_serif.className}`}
          >
            from the UK.
          </h1>

          <div className="my-8 h-[1px] w-2/3 bg-neutral-700 shadow shadow-xl shadow-black"></div>

          <h2
            className={`text-2xl text-[#241D26] opacity-90 ${instrument_serif.className}`}
          >
            Want to learn more about me? Keep reading
          </h2>
        </div>
      </motion.div>

      <div className="relative flex w-full flex-col gap-5 overflow-hidden bg-[#ff5a30] p-8 md:p-16 md:px-32">
        <h1
          className={`font-italic text-3xl font-bold tracking-tight text-white opacity-90 sm:text-8xl ${instrument_serif_italic.className}`}
        >
          Design
        </h1>
        <div className="flex h-96 w-full flex-row items-center justify-start"></div>
      </div>

      <div className="relative flex w-full flex-col gap-5 overflow-hidden bg-[#0388fc] p-8 md:p-16 md:px-32">
        <h1
          className={`font-italic text-3xl font-bold tracking-tight text-white opacity-90 sm:text-8xl ${instrument_serif_italic.className}`}
        >
          Development
        </h1>
        <div className="flex h-96 w-full flex-row items-center justify-start"></div>
      </div>

      <div className="relative flex w-full flex-col gap-5 overflow-hidden bg-[#7303fc] p-8 md:p-16 md:px-32">
        <h1
          className={`font-italic text-3xl font-bold tracking-tight text-white opacity-90 sm:text-8xl ${instrument_serif_italic.className}`}
        >
          Previous work
        </h1>
        <div className="flex h-96 w-full flex-row items-center justify-start"></div>
      </div>

      <div className="relative flex w-full flex-col gap-5 overflow-hidden bg-[#fc037f] p-8 md:p-16 md:px-32">
        <h1
          className={`font-italic text-3xl font-bold tracking-tight text-white opacity-90 sm:text-8xl ${instrument_serif_italic.className}`}
        >
          Articles
        </h1>
        <div className="flex h-96 w-full flex-row items-center justify-start"></div>
      </div>

      <div className="relative flex w-full flex-col gap-5 overflow-hidden border border-white bg-black p-8 md:p-16 md:px-32">
        <h1
          className={`font-italic text-3xl font-bold tracking-tight text-white opacity-90 sm:text-8xl ${instrument_serif_italic.className}`}
        >
          Contact me
        </h1>
        <div className="flex h-96 w-full flex-row items-center justify-start"></div>
      </div>
    </div>
  );
}
