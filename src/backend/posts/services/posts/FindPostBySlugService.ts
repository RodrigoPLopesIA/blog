import { cache } from "react";
import PostRepository from "../../repositories/PostRepository";


export default class FindPostBySlugService {
    constructor(private readonly postRepository: PostRepository) {}


   private findBySlugCached = cache(async (slug: string) => {
       return await this.postRepository.findBySlug(slug);
     });
    async execute(slug: string) {
        const post = await this.findBySlugCached(slug);
        if (!post) {
            throw new Error("Post not found");
        }
        return post;
    }
}