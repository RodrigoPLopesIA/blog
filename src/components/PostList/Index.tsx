import { Post } from "@/models/post/post-model";
import React from "react";

async function PostList() {
  const response = await fetch("http://localhost:3000/api/posts");
  const posts: Post[] = await response.json();
  return (
    <>
      {posts.map((post) => (
        <div
          key={post.id}
          className="max-w-2xl mx-auto my-8 p-4 border rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
          <p className="mb-4">
            By {post.author?.name} on{" "}
            {new Date(post.createdAt).toLocaleDateString()}
          </p>
          {/* {post.coverImageUrl && (
            <div className="mb-4">
              <Image
                src={post.coverImageUrl}
                alt={post.title}
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          )} */}
          <p className="">{post.content}</p>
        </div>
      ))}
    </>
  );
}

export default PostList;
