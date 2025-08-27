import { formatDateTime } from "@/utils/format-datetime";
import React from "react";
import PostHeading from "../PostHeading/Index";
interface PostSummaryProps {
  postLink: string;
  postHeading: "h1" | "h2";
  createdAt: string;
  title: string;
  excerpt: string;
}
function PostSummary({
  postLink,
  postHeading,
  createdAt,
  title,
  excerpt,
}: PostSummaryProps) {
  return (
    <div className="flex flex-col sm:justify-center gap-4">
      <time
        className="text-slate-300 text-sm/tight"
        dateTime={formatDateTime(createdAt)}
      >
        {formatDateTime(createdAt)}
      </time>
      <PostHeading as={postHeading} url={postLink}>
        {title}
      </PostHeading>
      <p>{excerpt}</p>
    </div>
  );
}

export default PostSummary;
