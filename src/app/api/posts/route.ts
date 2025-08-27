import postPrismaRepository from "@/backend/posts/repositories/PostPrismaRepository";
import CreatePostService from "@/backend/posts/services/posts/CreatePostService";
import FindAllPostsService from "@/backend/posts/services/posts/FindAllPostsService";
import { Post } from "@/models/post/post-model";
import { NextResponse } from "next/server";

const findAllPosts = new FindAllPostsService(postPrismaRepository);

export async function GET() {
  const data: Post[] = await findAllPosts.execute();
  return NextResponse.json(data);
}

