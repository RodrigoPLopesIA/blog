import PostFeatured from "@/components/PostFeatured/Index";
import PostList from "@/components/PostList/Index";
import SpinLoader from "@/components/SpinLoader/Index";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <PostFeatured />
      <Suspense fallback={<SpinLoader className="min-h-screen" />}>
        <PostList />
      </Suspense>
    </>
  );
}
