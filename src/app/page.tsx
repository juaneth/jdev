"use client";

import Link from "next/link";

import { dm_mono } from "./layout";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="m-5 flex w-full flex-col items-center sm:justify-center sm:px-20 sm:px-5">
      <div className="rounded-lg shadow shadow-2xl shadow-white/5">
        <div
          className={
            "group mx-auto w-fit rounded-xl border border-white/10 bg-gray-100 p-7 shadow-[4px_8px_32px_0px_rgba(248,248,248,0.06)_inset] dark:bg-neutral-900 sm:px-12 sm:py-10"
          }
        >
          <h1
            className={`scroll-m-20 text-2xl font-extrabold tracking-tighter sm:text-4xl xl:text-5xl`}
          >
            Hey, I'm juan, a web and desktop developer from the UK.
          </h1>
        </div>
      </div>
    </main>
  );
}
