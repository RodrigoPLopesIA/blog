import Link from "next/link";
import React from "react";

interface PostHeadingProps {
  children?: React.ReactNode;
  url: string;
  as: "h1" | "h2";
}

const headingClass = {
    h1: "text-2xl/tight text-left font-extrabold sm:text-6xl/tight hover:text-green-500 ",
    h2: "text-xl/tight font-bold text-left hover:text-green-500"
}
export default function PostHeading({
  children,
  url,
  as: Tag = "h1",
}: PostHeadingProps) {
  return (
    <Tag className={headingClass[Tag]}>
      <Link href={url}>{children}</Link>
    </Tag>
  );
}
