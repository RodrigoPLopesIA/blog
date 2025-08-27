import { Post } from "@/models/post/post-model";



export interface PostRepository {
    findAll(): Promise<Post[]>;
}