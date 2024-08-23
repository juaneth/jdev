"use client";

import { useEffect, useState } from "react";

import articles from "@/app/articles.json";

import "@/styles/article.css";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default function ArticlePage({
  params,
}: {
  params: { article: string };
}) {
  let article = articles.find((data) => data.md === params.article);

  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(`/articleFiles/${params.article}.md`)
      .then((res) => res.text())
      .then((md) => {
        setMarkdown(md);
        document.title = `${article?.title} | juaneth.dev`;
      });
  }, []);
  return (
    <>
      <div className="p-4 text-xl">
        <Markdown
          className="article w-full rounded-lg border border-white/30 bg-neutral-950/50 p-10 py-12 text-white/90"
          children={markdown}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        ></Markdown>
      </div>
    </>
  );
}

/* export async function generateStaticParams() {
  const posts = await fetch("/articles.json").then((res) => res.json());

  return posts.map((post) => ({
    slug: post.name,
  }));
}
 */
