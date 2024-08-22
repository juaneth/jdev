"use client";

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

import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  let standardTransition = {
    type: "tween",
    duration: 1.5,
    delay: 0,
    ease: [0.87, 0, 0.05, 1],
  };

  const [openPrevWork, setOpenPrevWork] = useState(false);

  const [visited, setVisited] = useState(() => {
    try {
      return sessionStorage.getItem("visited");
    } catch {
      return "false";
    }
  });

  useEffect(() => {
    sessionStorage.setItem("visited", "true");
  });

  const [linked, setLinked] = useState(() => {
    try {
      return sessionStorage.getItem("linked");
    } catch {
      return "false";
    }
  });

  sessionStorage.setItem("linked", "false");

  return (
    <>
      <section className="relative w-screen overflow-hidden">
        <motion.div
          initial={
            linked === "true"
              ? {}
              : {
                  height: "100vh",
                  width: "100vw",
                }
          }
          animate={{
            height: "auto",
          }}
          transition={standardTransition}
          className={
            "z-10 flex w-full flex-col items-center justify-center overflow-hidden bg-[#FAF5E2] text-center"
          }
        >
          <img
            src="/grain2.png"
            alt="grain"
            className="absolute h-screen w-full rotate-180 opacity-40"
          />
          <motion.div
            initial={
              linked === "true"
                ? {}
                : {
                    opacity: 0,
                  }
            }
            animate={{
              opacity: 1,
            }}
            transition={standardTransition}
          >
            <div className="flex flex-col items-center justify-center overflow-hidden p-8 py-12 text-center sm:px-32 sm:py-20">
              <h1
                className={`text-2xl text-[#241D26] opacity-90 sm:text-4xl ${instrument_serif.className}`}
              >
                i am a
              </h1>
              <h1
                className={`texteffect z-10 text-6xl italic text-transparent sm:text-[70px] sm:tracking-[-2.96px] ${instrument_serif_italic.className}`}
              >
                web developer and designer
              </h1>

              <h1
                className={`text-2xl text-[#241D26] opacity-90 sm:text-4xl ${instrument_serif.className}`}
              >
                from the UK.
              </h1>

              <div className="my-5 h-[1px] w-2/3 bg-neutral-700 shadow shadow-xl shadow-black sm:my-8"></div>

              <h2
                className={`text-2xl text-[#241D26] opacity-90 ${instrument_serif.className}`}
              >
                Want to learn more about me? Keep reading
              </h2>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
