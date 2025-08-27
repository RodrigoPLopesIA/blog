import PostRepository from "@/backend/repositories/PostRepository";


export default class FindAllPostsService {

    constructor(private readonly postRepository: PostRepository) {}


    async execute() { 
        return this.postRepository.findAll();
    }
}