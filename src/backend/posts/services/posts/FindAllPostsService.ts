import PostRepository from "@/backend/posts/repositories/PostRepository"


export default class FindAllPostsService {

    constructor(private readonly postRepository: PostRepository) {}


    async execute() { 
        return this.postRepository.findAllPublic();
    }
}