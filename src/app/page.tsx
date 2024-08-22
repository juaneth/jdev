"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import "@/styles/page.css";

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

import { useRouter } from "next/navigation";

import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("@/app/header"), {
  ssr: false,
  loading: () => (
    <section
      className={`flex h-screen w-screen flex-col items-center justify-center bg-[#FAF5E2]`}
    >
      <img
        src="/grain2.png"
        alt="grain"
        className="absolute h-screen w-full rotate-180 opacity-40"
      />
    </section>
  ),
});
const Work = dynamic(() => import("@/app/work"), {
  ssr: false,
});

import { ImageResponse } from "next/og";

export default function Home() {
  let standardTransition = {
    type: "tween",
    duration: 1.5,
    delay: 1,
    ease: [0.87, 0, 0.05, 1],
  };

  let popIn = {
    type: "tween",
    duration: 0.7,
    delay: 0,
    ease: [0.16, 1, 0.3, 1],
  };
  let popInStart = {
    type: "tween",
    duration: 0.7,
    delay: 0.7,
    ease: [0.16, 1, 0.3, 1],
  };

  const router = useRouter();

  const [openPrevWork, setOpenPrevWork] = useState(false);

  return (
    <div className="relative flex w-screen flex-col items-center gap-1 bg-[#101211]">
      <div className="vhs absolute h-full w-[100vw]"></div>

      <DynamicHeader></DynamicHeader>

      <motion.div className="relative">
        <motion.section
          initial={{ opacity: 0, scaleX: 0.4, scaleY: 0.4 }}
          animate={{
            opacity: 1,
            scaleX: 1,
            scaleY: 1,
          }}
          transition={popInStart}
          className="long-section pointer-events-none relative flex w-screen flex-col gap-5 overflow-hidden p-12 md:p-16 md:px-32 lg:h-screen"
        >
          <div className="relative flex flex-row">
            <h1
              className={`font-italic text-4xl font-bold tracking-tight text-white opacity-90 sm:text-8xl ${instrument_serif_italic.className}`}
            >
              About me
            </h1>

            <img
              src="/PNG/17-02.png"
              alt=""
              className="ml-5 h-8 sm:h-12"
              style={{
                filter: "brightness(1000%)",
              }}
            />
          </div>

          <div className="mb-[50vh] flex flex-col gap-8 sm:pb-0">
            <div
              className={`${dm_sans.className} flex flex-col gap-3 border-l border-white/20 pl-5`}
            >
              <p className="text-lg tracking-tight">
                I am (as stated above) a web developer and designer based in the
                UK. I'm completely self taught and have been a developer since
                age 11, a self proclaimed designer since about a year ago and a
                tinkerer since birth.
              </p>

              <p className="text-lg tracking-tight">
                Currently looking for work.
              </p>
            </div>

            <h1
              className={`mt-5 text-3xl font-bold text-white opacity-90 sm:text-5xl ${instrument_serif.className}`}
            >
              My journey:
            </h1>

            <div
              className={`${dm_sans.className} flex flex-col gap-3 border-l border-white/20 pl-5`}
            >
              <p className="">
                I got started making the absolute worst winforms apps with my
                friend{" "}
                <Button
                  variant={"link"}
                  className="overflow-y-scroll px-0 text-sm text-blue-200"
                >
                  <Link href={"https://silvias.uk"}>@silvias.uk</Link>
                </Button>{" "}
                back in 2019 (you can see these in my previous works section).
                This was incredibly rough to start learning with but my reasons
                for using it were: I can make something without lots of code and
                that it was just a means to and end. Around that time I had also
                started to use GitHub... without the Git part. After a year of
                learning I knew I was testing the limits of my tools and I
                needed something better. This led me to HTML, JS and CSS. After
                a few months of tinkering and making my (insanely
                over-ambitious) project called Omnipetal. I learnt more and
                realised that the thing everyone used was React.js. And luckily
                I tried React when it was JSX and Hooks so I wasnt scared by the
                crazy syntax, This then led to me discovering proper CSS. Not
                just changing fonts and setting padding: <b>REAL CSS</b>; This
                was my moment where I realised web development was going to be
                my passion. I still enjoyed general programming and solving
                problems but creating something visually and seeing it work with
                different looks and styles was incredible to me. I've since
                tried out other languages like Rust and Python but this is still
                my main passion.
              </p>

              <p>
                I've been striving to make better designs, climb higher and
                hopefully make a living out of my passion.
              </p>
            </div>

            <h1
              className={`mt-5 text-3xl font-bold text-white opacity-90 sm:text-5xl ${instrument_serif.className}`}
            >
              TLDR:
            </h1>

            <div
              className={`${dm_sans.className} flex flex-col gap-3 border-l border-white/20 pl-5`}
            >
              <p>
                Started off making low quality things, now I'm making better
                things but I'm always learning. And please hire me.
              </p>
            </div>
          </div>

          <motion.img
            src="/info.png"
            alt="clickmepls"
            className="fixed bottom-0 right-0 w-64 max-w-[300px] sm:w-1/3"
          ></motion.img>
        </motion.section>
      </motion.div>

      <motion.div className="relative flex items-center justify-center">
        <motion.section
          initial={{ opacity: 0, scaleX: 0.4, scaleY: 0.4 }}
          whileInView={
            !openPrevWork
              ? {
                  opacity: 1,
                  scaleX: 1,
                  scaleY: 1,
                }
              : {}
          }
          animate={
            openPrevWork && {
              opacity: 0,
              scaleX: 0.4,
              scaleY: 0.4,
            }
          }
          transition={popIn}
          className="pointer-events-none relative flex h-screen w-screen flex-col gap-5 overflow-hidden p-12 md:p-16 md:px-32"
        >
          <h1
            className={`font-italic text-5xl font-bold tracking-tight text-white opacity-90 sm:text-8xl ${instrument_serif_italic.className}`}
          >
            Previous work
          </h1>

          <motion.img
            src="/marbleball.png"
            alt="clickmepls"
            className="fixed bottom-0 right-0 w-64 max-w-[300px] sm:w-[35%]"
          ></motion.img>
        </motion.section>
        
        <Work></Work>
      </motion.div>

      <motion.div className="relative">
        <motion.section
          initial={{ opacity: 0, scaleX: 0.4, scaleY: 0.4 }}
          whileInView={
            !openPrevWork
              ? {
                  opacity: 1,
                  scaleX: 1,
                  scaleY: 1,
                }
              : {}
          }
          animate={
            openPrevWork && {
              opacity: 0,
              scaleX: 0.4,
              scaleY: 0.4,
            }
          }
          transition={popIn}
          className="pointer-events-none relative z-50 flex h-screen w-screen flex-col gap-5 overflow-hidden p-12 md:p-16 md:px-32"
        >
          <h1
            className={`font-italic text-5xl font-bold tracking-tight text-white opacity-90 sm:text-8xl ${instrument_serif_italic.className}`}
          >
            Articles
          </h1>
          <motion.img
            src="/pen.png"
            alt="clickmepls"
            className="fixed bottom-0 right-0 w-64 max-w-[300px] sm:w-1/3"
          ></motion.img>
        </motion.section>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, scaleX: 0.1, scaleY: 0.1 }}
        whileInView={{ opacity: 1, scaleX: 1, scaleY: 1 }}
        transition={popIn}
        className="flex h-screen w-full flex-col gap-5 overflow-hidden p-8 md:p-16 md:px-32"
      >
        <h1
          className={`font-italic text-5xl font-bold tracking-tight text-white opacity-90 sm:text-8xl ${instrument_serif_italic.className}`}
        >
          Contact me
        </h1>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, scaleX: 0.1, scaleY: 0.1 }}
        whileInView={{ opacity: 1, scaleX: 1, scaleY: 1 }}
        transition={{
          type: "tween",
          duration: 1,
          delay: 0,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="flex h-screen w-full flex-col items-center justify-center gap-5 overflow-hidden bg-[#FAF5E2] p-12 text-center md:p-16 md:px-32"
      >
        <img
          src="/grain2.png"
          alt="grain"
          className="absolute h-screen w-full rotate-180 opacity-40"
        />
        <div className="flex flex-col items-center justify-center overflow-hidden p-8 py-12 text-center sm:px-32 sm:py-20">
          <h1
            className={`text-3xl text-[#241D26] opacity-90 sm:text-4xl ${instrument_serif.className}`}
          >
            this has been a
          </h1>
          <h1
            className={`texteffect z-10 text-6xl font-bold italic tracking-tighter text-transparent sm:text-[140px] sm:tracking-[-0.75rem] ${dm_sans.className}`}
          >
            juaneth.dev
          </h1>

          <h1
            className={`text-3xl text-[#241D26] opacity-90 sm:text-4xl ${instrument_serif.className}`}
          >
            production.
          </h1>

          <div className="my-5 h-[1px] w-full bg-neutral-700 sm:my-8"></div>

          <h2
            className={`text-2xl text-[#241D26] opacity-90 ${instrument_serif.className}`}
          ></h2>
        </div>
      </motion.section>
    </div>
  );
}
