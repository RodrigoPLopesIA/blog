import React from "react";
import PostCoverImage from "../PostCoverImage/Index";
import PostSummary from "../PostSummary/Index";
import { Post } from "@/models/post/post-model";

async function PostFeatured() {
  const response = await fetch("http://localhost:3000/api/posts");
  const posts: Post[] = await response.json();
  const post: Post = posts[0];
  const postLink = `/posts/${post.slug}`;
  return (
    <section className="grid grid-cols-1 gap-8 my-8 sm:grid-cols-2 group">
      <PostCoverImage
        imageProps={{
          src: "/hacker.png",
          alt: "Coding Image",
          width: 1200,
          height: 720,
          priority: true,
        }}
        linkProps={{ href: postLink }}
      />
      <PostSummary
        createdAt={post.createdAt}
        title={post.title}
        excerpt={post.excerpt}
        postHeading="h1"
        postLink={postLink}
      />
    </section>
  );
}

export default PostFeatured;
