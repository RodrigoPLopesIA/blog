import { Post } from "@/models/post/post-model";



export default interface PostRepository {
    findAllPublic(): Promise<Post[]>;

    create(data: Omit<Post, 'id'>): Promise<Post>;
}