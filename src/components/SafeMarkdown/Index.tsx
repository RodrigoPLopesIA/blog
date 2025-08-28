import React from "react";
import ReactMarkDown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
type Props = {
  markdown: string;
};
function SafeMarkdown({ markdown }: Props) {
  return (
    <div className="prose overflow-hidden w-full max-w-none dark:prose-invert prose-a:text-green-500 prose-code:bg-gray-700/35 prose-code:p-4">
      <ReactMarkDown
        rehypePlugins={[rehypeSanitize]}
        remarkPlugins={[[remarkGfm]]}
      >
        {markdown}
      </ReactMarkDown>
    </div>
  );
}

export default SafeMarkdown;
