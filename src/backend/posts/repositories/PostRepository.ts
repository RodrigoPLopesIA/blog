import { Post } from "@/models/post/post-model";



export default interface PostRepository {
    findAllPublic(): Promise<Post[]>;

    findBySlug(slug: string): Promise<Post | null>;
    create(data: Omit<Post, 'id'>): Promise<Post>;
}