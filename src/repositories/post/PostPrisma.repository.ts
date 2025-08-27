/* eslint-disable import/no-anonymous-default-export */
import { Post } from "@/models/post/post-model";
import { PostRepository } from "./post.repository";
import { PrismaClient } from "@prisma/client";

class PostPrismaRepository implements PostRepository {
  constructor(private readonly prismaClient: PrismaClient) {}
  
  async findAll(): Promise<Post[]> {
    return this.prismaClient.post.findMany();
  }
}

export default new PostPrismaRepository(new PrismaClient());
