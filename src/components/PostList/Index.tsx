import { Post } from "@/models/post/post-model";
import React from "react";
import PostCoverImage from "../PostCoverImage/Index";
import PostSummary from "../PostSummary/Index";

async function PostList() {
  const response = await fetch("http://localhost:3000/api/posts");
  const posts: Post[] = await response.json();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 ">
      {posts.slice(1).map((post) => {
        const postLink = `/post/${post.slug}`;
        return (
          <div key={post.id} className="flex gap-4 flex-col group">
            <PostCoverImage
              imageProps={{
                src: post.coverImageUrl,
                alt: post.slug,
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
              postHeading="h2"
              postLink={postLink}
            />
            
          </div>
        );
      })}
    </div>
  );
}

export default PostList;
