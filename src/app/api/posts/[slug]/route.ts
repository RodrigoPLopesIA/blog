import postPrismaRepository from "@/backend/posts/repositories/PostPrismaRepository";
import FindPostBySlugService from "@/backend/posts/services/posts/FindPostBySlugService";
import { NextRequest } from "next/server";


const findPostBySlugService = new FindPostBySlugService(postPrismaRepository);

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
    const { slug } = params;
    const post = await findPostBySlugService.execute(slug);
    return Response.json(post);
}