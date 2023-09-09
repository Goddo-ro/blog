import {$api} from "../api/api.ts";

export default class PostService {
    static async getPosts(limit?: number, skip?: number) {
        return await $api.get("/posts", {
            params: {
                limit: limit,
                skip: skip,
            }
        });
    }

    static async getPostsWithSearch(limit?: number, skip?: number, search?: string) {
        return await $api.get("/posts/search", {
            params: {
                limit: limit,
                skip: skip,
                q: search,
            }
        });
    }
}
