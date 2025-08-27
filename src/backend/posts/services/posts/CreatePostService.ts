import { Post } from "@/models/post/post-model";
import PostRepository from "../../repositories/PostRepository";
import { User } from "@/generated/prisma";

export default class CreatePostService {
  constructor(private readonly repository: PostRepository) {}
  async execute(data: Omit<Post, "id">) {
    return this.repository.create({
      title: "New Post",
      slug: "new-post",
      author: { email: "rodrigo@email.com", "name": "rodrigo", createdAt: new Date(), updatedAt: new Date() } as User,
      coverImageUrl: "https://example.com/image.jpg",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      published: true,
      excerpt: "This is a new post",
      content: "This is the content of the new post",
    });
  }
}
