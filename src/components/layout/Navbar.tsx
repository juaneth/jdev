import { FloatingDock } from "@/components/ui/dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconHomeFilled,
  IconArticleFilled,
  IconBriefcase2Filled,
} from "@tabler/icons-react";
import Image from "next/image";

export default function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHomeFilled className="h-full w-full text-neutral-500 dark:text-white/70" />
      ),
      href: "/",
    },
    {
      title: "Portfolio",
      icon: (
        <IconBriefcase2Filled className="h-full w-full text-neutral-500 dark:text-white/70" />
      ),
      href: "/portfolio",
    },
    {
      title: "Articles",
      icon: (
        <IconArticleFilled className="h-full w-full text-neutral-500 dark:text-white/70" />
      ),
      href: "/articles",
    },
  ];
  return (
    <div className="fixed bottom-0 right-0 flex p-5 md:bottom-0 md:w-full md:py-4">
      <FloatingDock items={links} />
    </div>
  );
}
