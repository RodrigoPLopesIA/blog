import { User } from "@/generated/prisma";


export type Post = {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    coverImageUrl: string;
    published: boolean;
    createdAt: string;
    updatedAt: string;
    author: User;

}