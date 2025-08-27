import { Post } from "@/models/post/post-model";
import { PostRepository } from "@/repositories/post/post.repository";

export class FindAll {
  constructor(private readonly postRepository: PostRepository) {}

  public async execute() : Promise<Post[]> {
    return await this.postRepository.findAll();
  }
}
