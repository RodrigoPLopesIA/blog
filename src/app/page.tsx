import Container from "@/components/Container/Index";
import Content from "@/components/Content/Index";
import Header from "@/components/Header/Index";
import PostList from "@/components/PostList/Index";
import SpinLoader from "@/components/SpinLoader/Index";
import { Post } from "@/models/post/post-model";
import Image from "next/image";
import { Suspense } from "react";

export default async function Home() {
  return (
    <Container>
      <Content>
        <Header />
        <Suspense fallback={<SpinLoader className="min-h-screen" />}>
          <PostList />
        </Suspense>
      </Content>
    </Container>
  );
}
