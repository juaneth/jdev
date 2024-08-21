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
  delay,
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

import { useRouter } from "next/navigation";

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

  const router = useRouter();

  const [openPrevWork, setOpenPrevWork] = useState(false);
  const [visited, setVisited] = useState(sessionStorage.getItem("visited"));

  sessionStorage.setItem("visited", "true");

  return (
    <div className="relative flex w-screen flex-col items-center gap-1 bg-[#101211]">
      <div className="vhs absolute h-full w-[200vh]"></div>
      <section className="w-screen overflow-hidden">
        <motion.div
          initial={
            visited == "true"
              ? {}
              : {
                  height: "100vh",
                  width: "100%",
                  borderRadius: "0px",
                }
          }
          animate={{
            height: "auto",
          }}
          transition={standardTransition}
          className={
            "z-50 flex w-full flex-col items-center justify-center overflow-hidden bg-[#FAF5E2] text-center"
          }
        >
          <img
            src="/grain2.png"
            alt="grain"
            className="absolute h-screen w-full rotate-180 opacity-40"
          />
          <div className="flex flex-col items-center justify-center overflow-hidden p-8 py-12 text-center md:px-32 md:py-20">
            <h1
              className={`text-2xl text-[#241D26] opacity-90 sm:text-4xl ${instrument_serif.className}`}
            >
              i am a
            </h1>
            <h1
              className={`texteffect z-10 text-5xl italic text-transparent sm:text-[70px] sm:tracking-[-2.96px] ${instrument_serif_italic.className}`}
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

        <motion.div
          initial={
            visited == "true"
              ? {
                  opacity: 0,
                }
              : {
                  height: "100%",
                  width: "100%",
                }
          }
          animate={{
            opacity: 0,
          }}
          transition={{
            delay: 1,
            duration: 1.5,
            ease: "circInOut",
          }}
          className="loadeffect fixed top-0 z-50 bg-white"
        ></motion.div>
      </section>

      <motion.section
        initial={{ opacity: 0, scaleX: 0.4, scaleY: 0.4 }}
        whileInView={{ opacity: 1, scaleX: 1, scaleY: 1 }}
        transition={popIn}
        className="relative flex h-screen w-full flex-col gap-5 overflow-hidden p-12 sm:p-16 sm:px-32"
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
            className="ml-5 h-12"
            style={{
              filter: "brightness(1000%)",
            }}
          />
        </div>

        <div className="flex flex-col gap-8">
          <div
            className={`${dm_sans.className} flex flex-col gap-3 border-l border-white/20 pl-5`}
          >
            <p className="text-lg tracking-tight">
              I am (as stated above) a web developer and designer based in the
              UK. I'm completely self taught and have been a developer since age
              11, a self proclaimed designer since about a year ago and a
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
              learning I knew I was testing the limits of my tools and I needed
              something better. This led me to HTML, JS and CSS. After a few
              months of tinkering and making my (insanely over-ambitious)
              project called Omnipetal. I learnt more and realised that the
              thing everyone used was React.js. And luckily I tried React when
              it was JSX and Hooks so I wasnt scared by the crazy syntax, This
              then led to me discovering proper CSS. Not just changing fonts and
              setting padding: <b>REAL CSS</b>; This was my moment where I
              realised web development was going to be my passion. I still
              enjoyed general programming and solving problems but creating
              something visually and seeing it work with different looks and
              styles was incredible to me.
            </p>

            <p>
              Ever since then I've been striving to make better designs, climb
              higher and hopefully make a living out of my passion.
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
      </motion.section>

      <motion.div className="relative">
        <motion.div
          onClick={() => {
            setOpenPrevWork(true);

            setTimeout(() => {
              router.push("/work");
            }, 500);
          }}
          animate={
            openPrevWork
              ? {
                  position: "fixed",
                  backgroundColor: "#FFF",
                  zIndex: "20",
                  scaleX: 1,
                  scaleY: 1,
                  left: 0,
                  top: 0,
                  borderRadius: "0px",
                  border: "0px",
                  padding: "0px",
                }
              : {
                  borderRadius: "20px",
                  opacity: 1,
                  scaleX: 0.4,
                  scaleY: 0.4,
                  backgroundColor: "#FFF",
                  left: 0,
                }
          }
          transition={{
            duration: 0.5,
            ease: "circInOut",
          }}
          className="pointer-events-auto absolute top-0 flex h-screen w-screen items-center justify-center overflow-hidden border-2 border-white bg-white p-2"
        >
          <iframe
            src="/work"
            className="pointer-events-none z-0 h-full w-full"
            title="work page"
          ></iframe>
        </motion.div>

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
          className="pointer-events-none relative flex h-screen w-screen flex-col gap-5 overflow-hidden p-8 sm:p-16 sm:px-32"
        >
          <h1
            className={`font-italic text-3xl font-bold tracking-tight text-white opacity-90 sm:text-8xl ${instrument_serif_italic.className}`}
          >
            Previous work
          </h1>

          <motion.img
            src="/marbleball.png"
            alt="clickmepls"
            className="fixed bottom-0 right-0 w-72 sm:w-auto"
          ></motion.img>
        </motion.section>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, scaleX: 0.4, scaleY: 0.4 }}
        whileInView={{ opacity: 1, scaleX: 1, scaleY: 1 }}
        transition={popIn}
        className="relative flex h-screen w-full flex-col gap-5 overflow-hidden p-8 sm:p-16 sm:px-32"
      >
        <h1
          className={`font-italic text-3xl font-bold tracking-tight text-white opacity-90 sm:text-8xl ${instrument_serif_italic.className}`}
        >
          Articles
        </h1>
        <div className="flex h-96 w-full flex-row items-center justify-start"></div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, scaleX: 0.1, scaleY: 0.1, translateZ: "0px" }}
        whileInView={{ opacity: 1, scaleX: 1, scaleY: 1, translateZ: "300px" }}
        transition={popIn}
        className="flex h-screen w-full flex-col gap-5 overflow-hidden p-8 sm:p-16 sm:px-32"
      >
        <h1
          className={`font-italic text-3xl font-bold tracking-tight text-white opacity-90 sm:text-8xl ${instrument_serif_italic.className}`}
        >
          Contact me
        </h1>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, scaleX: 0.1, scaleY: 0.1, translateZ: "0px" }}
        whileInView={{ opacity: 1, scaleX: 1, scaleY: 1, translateZ: "300px" }}
        transition={{
          type: "tween",
          duration: 1,
          delay: 0,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="flex h-screen w-full flex-col items-center justify-center gap-5 overflow-hidden bg-[#FAF5E2] p-8 text-center sm:p-16 sm:px-32"
      >
        <img
          src="/grain2.png"
          alt="grain"
          className="absolute h-screen w-full rotate-180 opacity-40"
        />
        <div className="flex flex-col items-center justify-center overflow-hidden p-8 py-12 text-center md:px-32 md:py-20">
          <h1
            className={`text-2xl text-[#241D26] opacity-90 sm:text-4xl ${instrument_serif.className}`}
          >
            this has been a
          </h1>
          <h1
            className={`texteffect z-10 text-5xl font-bold italic text-transparent sm:text-[140px] sm:tracking-[-0.75rem] ${dm_sans.className}`}
          >
            juaneth.dev
          </h1>

          <h1
            className={`text-2xl text-[#241D26] opacity-90 sm:text-4xl ${instrument_serif.className}`}
          >
            production.
          </h1>

          <div className="my-5 h-[1px] w-2/3 bg-neutral-700 sm:my-8"></div>

          <h2
            className={`text-2xl text-[#241D26] opacity-90 ${instrument_serif.className}`}
          ></h2>
        </div>
      </motion.section>
    </div>
  );
}
