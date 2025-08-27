import React from "react";
import PostCoverImage from "../PostCoverImage/Index";
import PostHeading from "../PostHeading/Index";

function PostFeatured() {
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
        linkProps={{ href: "/" }}
      />
      <div className="flex flex-col sm:justify-center gap-4">
        <time className="text-slate-300 text-sm/tight" dateTime="2025-10-09">
          09/10/2025 10:00
        </time>
        <PostHeading as="h1" url="/">
          Hacker news!
        </PostHeading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          impedit tempora dolorem, quasi eos exercitationem quam ex velit
          voluptas neque error, fuga id assumenda esse, labore soluta quibusdam
          consectetur commodi.
        </p>
      </div>
    </section>
  );
}

export default PostFeatured;
