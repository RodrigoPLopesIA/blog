import PostRepository from "@/backend/posts/repositories/PostRepository";
import { cache } from "react";

export default class FindAllPostsService {
  constructor(private readonly postRepository: PostRepository) {}

  private findAllCached = cache(async () => {
    return await this.postRepository.findAllPublic();
  });
  async execute() {
    return await this.findAllCached();
  }
}
