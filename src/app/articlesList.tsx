import Link from "next/link";
import { useRouter } from "next/navigation";

import { Suspense } from "react";

import articles from "./articles.json";

import { motion } from "framer-motion";

export default function ArticlesList() {
  const router = useRouter();

  let popIn = {
    type: "tween",
    duration: 0.7,
    delay: 0,
    ease: [0.16, 1, 0.3, 1],
  };

  return (
    <>
      <Suspense>
        <div className="pointer-events-auto flex flex-col gap-5 text-xl">
          {articles.map((article) => (
            <Link
              className="flex flex-col gap-1 text-3xl lg:text-4xl"
              key={article.id}
              href={`/articles/${article.md}`}
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  x: 50,
                }}
                transition={popIn}
              >
                <div className="flex flex-row items-center">
                  <p className="tracking-tight">{article.title}</p>
                </div>

                <p className="text-lg text-white/70">
                  {article.desc} - {article.date}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </Suspense>
    </>
  );
}
