import { Post } from "@/models/post/post-model";

import React from "react";

async function Posts() {
  const response = await fetch("http://localhost:3000/api/posts");
  const posts: Post[] = await response.json();

  return (
    <div>
      <h1>posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
