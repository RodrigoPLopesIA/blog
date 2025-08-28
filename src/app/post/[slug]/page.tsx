import { Post } from "@/models/post/post-model";
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
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Author: {post.author.name}</p>
    </div>
  );
}

export default PostSlugPage;
