import postPrismaRepository from "@/backend/posts/repositories/PostPrismaRepository"
import { cache } from "react"


export const findAllPostsQuery = cache(async () => await postPrismaRepository.findAllPublic())