import { Post } from "@/models/post/post-model";
import postPrismaRepository from "@/repositories/post/PostPrisma.repository";
import { FindAll } from "@/services/post/findall.service";
import React from "react";

async function Posts() {
  const postService = new FindAll(postPrismaRepository);

  const posts: Post[] = await postService.execute();
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  )
}

export default Posts;
