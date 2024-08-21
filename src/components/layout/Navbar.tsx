"use client";

import { FloatingDock } from "@/components/ui/dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconCode,
  IconHomeFilled,
  IconArticleFilled,
  IconBriefcase2Filled,
} from "@tabler/icons-react";
import Image from "next/image";

import { motion, useScroll } from "framer-motion";

import { useRef } from "react";

export default function Navbar() {
  return (
    <div>
      <DesktopNavbar></DesktopNavbar>
      <MobileNavbar></MobileNavbar>
    </div>
  );
}

export function DesktopNavbar() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div className="relative hidden h-full lg:block"></div>
    </>
  );
}

export function MobileNavbar() {
  return <div className="h-16 w-full lg:hidden"></div>;
}
