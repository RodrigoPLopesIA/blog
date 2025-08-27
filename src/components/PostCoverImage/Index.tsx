import { Post } from "@/generated/prisma";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PostCoverImageProps {
  linkProps: React.ComponentProps<typeof Link>;
  imageProps: React.ComponentProps<typeof Image>;
}
function PostCoverImage({ imageProps, linkProps }: PostCoverImageProps) {
  return (
    <Link className="h-full w-full overflow-hidden rounded-2xl" {...linkProps}>
      <Image
        {...imageProps}
        className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
      />
    </Link>
  );
}

export default PostCoverImage;
