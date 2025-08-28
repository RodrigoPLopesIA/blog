import { Post } from "@/models/post/post-model";
import { PrismaClient } from "@prisma/client";
import prisma from "@/generated/prisma/client";
import PostRepository from "./PostRepository";
import { use } from "react";


class PostPrismaRepository implements PostRepository {
    
    constructor(private readonly prisma: PrismaClient) {}
    
    async findBySlug(slug: string): Promise<Post | null> {
        return await this.prisma.post.findUnique({
            where: { slug },
            include: {
                author: true,
            }
        })
    }
    
    
    async findAllPublic(): Promise<Post[]> {
        return await this.prisma.post.findMany({
            include: {
                author: true,
            },
            where: {
                published: true,
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