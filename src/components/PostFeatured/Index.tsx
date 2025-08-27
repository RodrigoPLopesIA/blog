import React from "react";
import PostCoverImage from "../PostCoverImage/Index";
import PostSummary from "../PostSummary/Index";

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
      <PostSummary
        createdAt={"2025-10-09T10:00:00Z"}
        title="Hacker news!"
        excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          impedit tempora dolorem, quasi eos exercitationem quam ex velit
          voluptas neque error, fuga id assumenda esse, labore soluta quibusdam
          consectetur commodi."
        postHeading="h1"
        postLink="/"
      />
    </section>
  );
}

export default PostFeatured;
