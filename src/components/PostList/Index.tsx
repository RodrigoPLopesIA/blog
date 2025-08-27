import { Post } from "@/models/post/post-model";
import React from "react";
import PostCoverImage from "../PostCoverImage/Index";
import PostHeading from "../PostHeading/Index";
import { formatDateTime } from "@/utils/format-datetime";

async function PostList() {
  const response = await fetch("http://localhost:3000/api/posts");
  const posts: Post[] = await response.json();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 ">
      {posts.map((post) => {
        const postLink = `/posts/${post.slug}`;
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
            <div className="flex flex-col sm:justify-center gap-4">
              <time
                className="text-slate-300 text-sm/tight"
                dateTime={formatDateTime(post.createdAt)}
              >
                {formatDateTime(post.createdAt)}
              </time>
              <PostHeading as="h2" url={postLink}>
                {post.title}
              </PostHeading>
              <p>{post.excerpt}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PostList;
