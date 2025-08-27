import { Post } from "@/models/post/post-model";
import { PostRepository } from "./post.repository";

class PostImplRepository implements PostRepository {
  async findAll(): Promise<Post[]> {
    return [
      {
        id: "1",
        title: "First Post",
        slug: "first-post",
        excerpt: "This is the excerpt of the first post.",
        content: "This is the content of the first post.",
        coverImageUrl: "https://example.com/cover1.jpg",
        published: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        author: "Author One",
      },
    ];
  }
}

export default new PostImplRepository();
