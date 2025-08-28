import { Post } from "@/models/post/post-model";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};
async function PostSlugPage({ params }: Props) {
  const { slug } = params;

  const response = await fetch(`http://localhost:3000/api/posts/${slug}`);
  const post: Post = await response.json();
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Author: {post.author.name}</p>
    </div>
  );
}

export default PostSlugPage;
