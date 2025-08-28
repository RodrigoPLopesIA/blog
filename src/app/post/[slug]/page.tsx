import SafeMarkdown from "@/components/SafeMarkdown/Index";
import { Post } from "@/models/post/post-model";
import { formatDateTime } from "@/utils/format-datetime";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const { slug } = params;
  const response = await fetch(`http://localhost:3000/api/posts/${slug}`);
  const post: Post = await response.json();
  return { title: post.title, description: post.excerpt };
}

async function PostSlugPage({ params }: Props) {
  const { slug } = params;

  let post: Post;
  try {
    const response = await fetch(`http://localhost:3000/api/posts/${slug}`);
    post = await response.json();
  } catch {
    notFound();
  }

  return (
    <div>
      <header className="flex flex-col justify-center gap-4">
        <Image
          src={post.coverImageUrl}
          alt={post.title}
          width={1200}
          height={720}
        />
        <h1 className="text-2xl text-left font-extrabold pt-8 md:text-6xl md:text-justify-center">
          {post.title}
        </h1>
        <time
          dateTime={formatDateTime(post.createdAt)}
          className="italic text-sm text-left"
        >
          Publicado em {formatDateTime(post.createdAt)} por {post.author.name}
        </time>

        <p className="mb-4 text-slate-300 italic">{post.excerpt}</p>
      </header>

      <section>
        <SafeMarkdown markdown={post.content} />
      </section>
    </div>
  );
}

export default PostSlugPage;
