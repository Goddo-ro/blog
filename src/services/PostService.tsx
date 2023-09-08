import {$api} from "../api/api.ts";

export default class PostService {
    static async getPosts(limit?: number, skip?: number) {
        return await $api.get("/posts", {
            params: {
                limit: limit,
                skip: skip
            }
        });
    }
}
