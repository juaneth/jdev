"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { Scale } from "lucide-react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useRouter } from "next/navigation";

export default function Work() {
  let projects = [
    {
      name: "QSM",
      url: "https://github.com/juaneth/QSM",
      screenshot: "/vhs.gif",
      description: "Mod manager for Beat Saber on the Oculus Quest",
      subdescription:
        "Still proud of the programming behind this one, definintely the first project that got me interested in difficult programming",
      lastUpdate: "Nov 2020",
    },
    {
      name: "Omnipetal",
      url: "https://github.com/juaneth/Omnipetal",
      screenshot: "/screenshots/omnipetal.png",
      description: "A minecraft server manager built on top of docker",
      subdescription:
        "My first ever project to get minimal attention, have contributors and be open source",
      lastUpdate: "Jan 2023",
    },
    {
      name: "bot.dev",
      url: "https://github.com/juaneth/bot.dev",
      screenshot: "/screenshots/botdev.png",
      description: "Desktop app to manage Discord.js bots",
      subdescription: "Honestly my worst design",
      lastUpdate: "Nov 2023",
    },
    {
      name: "uniSSH",
      url: "https://github.com/juaneth/uniSSH",
      screenshot: "/screenshots/unissh.png",
      description: "An SSH Client built around customisability",
      subdescription:
        "Co-Authored with Silvias.uk and dropped because of Warp Terminal xD",
      lastUpdate: "Mar 2024",
    },
    {
      name: "Avon PM",
      url: "https://github.com/juaneth/avon",
      screenshot: "/vhs.gif",
      description: "Multipurpose project manager built in React and Tauri",
      subdescription:
        "Didn't realise avon was a makeup company until after I made the repo so...",
      lastUpdate: "Apr 2024",
    },
    {
      name: "Argo",
      url: "https://github.com/juaneth/argo",
      screenshot: "/screenshots/argo.png",
      description:
        "Platform to let communities decide how they want things done",
      subdescription:
        "My first project to deal with databases, full stack development and the ideals for these types of projects",
      lastUpdate: "Jun 2024",
    },
    {
      name: "Oopsi SMP",
      url: "https://oopsismp.com",
      screenshot: "/screenshots/oopsi.png",
      description: "Website for a MC server I play on",
      subdescription:
        "The guys website wasnt the best so I offered to make him one for free to expand my portfolio!",
      lastUpdate: "Jul 2024",
    },
  ];

  let designs = [
    {
      name: "Trimego",
      screenshot: "/screenshots/trimego.png",
      description:
        "Frontend design and develoment for the unreleased sandbox game",
      subdescription:
        "My first ever project in a team of people working closely together",
      lastUpdate: "Aug 2024",
      screenshots: [
        {
          display: "Main UI",
          image: "",
        },
      ],
    },
  ];

  const router = useRouter();

  return (
    <div className="absolute inset-0 top-[50vh] flex h-96 w-full -translate-y-[50%] flex-col bg-white/10 md:flex-row">
      <div className="flex justify-end bg-white/5 md:w-1/2">
        <div className="relative flex h-min flex-wrap gap-3 p-3 md:w-3/4 md:justify-end">
          {projects.map((project) => {
            return (
              <HoverCard>
                <HoverCardTrigger>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    onTap={() => {
                      open(project.url, "_blank");
                    }}
                    className="h-20 w-20 overflow-hidden rounded-lg"
                    key={project.name}
                  >
                    <Image
                      height={160}
                      width={160}
                      quality={50}
                      src={project.screenshot}
                      alt="Image"
                      className="aspect-square h-20"
                    ></Image>
                  </motion.div>
                </HoverCardTrigger>
                <HoverCardContent className="w-96">
                  <div className="text-lg font-semibold tracking-tight">
                    {project.name} - {project.lastUpdate}
                  </div>
                  <p>{project.description}</p>
                  <p className="mt-3 text-sm text-white/70">
                    {project.subdescription}
                  </p>
                </HoverCardContent>
              </HoverCard>
            );
          })}
        </div>
      </div>
      <div className="flex justify-start md:w-1/2">
        <div className="relative flex h-min w-3/4 flex-wrap justify-start gap-3 p-3">
          {designs.map((design) => {
            return (
              <HoverCard>
                <HoverCardTrigger>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    onTap={() => {
                      router.push(`/designview/${design.name}`);
                    }}
                    className="h-20 w-20 overflow-hidden rounded-lg"
                    key={design.name}
                  >
                    <Image
                      height={160}
                      width={160}
                      quality={50}
                      src={design.screenshot}
                      alt="Image"
                      className="aspect-square h-20"
                    ></Image>
                  </motion.div>
                </HoverCardTrigger>
                <HoverCardContent className="w-96">
                  <div className="text-lg font-semibold tracking-tight">
                    {design.name}- {design.lastUpdate}
                  </div>
                  <p>{design.description}</p>
                  <p className="mt-3 text-sm text-white/70">
                    {design.subdescription}
                  </p>
                </HoverCardContent>
              </HoverCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
