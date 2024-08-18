import Link from "next/link";

import { dm_mono } from "./layout";

export default function Home() {
  return (
    <main className="m-5 flex w-full justify-center p-8">
      <h1
        className={`scroll-m-20 text-4xl font-extrabold tracking-tighter xl:text-5xl`}
      >
        Hey, I'm juan, a web developer and desktop developer from the UK
      </h1>
    </main>
  );
}
