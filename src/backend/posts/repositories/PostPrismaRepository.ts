import { Post } from "@/models/post/post-model";
import { PrismaClient } from "@prisma/client";
import prisma from "@/generated/prisma/client";
import PostRepository from "./PostRepository";
import { use } from "react";


class PostPrismaRepository implements PostRepository {
    
    constructor(private readonly prisma: PrismaClient) {}
    
    
    async findAll(): Promise<Post[]> {
        return await this.prisma.post.findMany({
            include: {
                author: true,
            }
        })
    }
    
    async create(data: Omit<Post, "id">): Promise<Post> {
       return await this.prisma.post.create({
            data
       });
    }
}

const postPrismaRepository = new PostPrismaRepository(new prisma.PrismaClient());
export default postPrismaRepository;