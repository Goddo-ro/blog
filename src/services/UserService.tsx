import {$api} from "../api/api.ts";
import {User} from "../types/User.tsx";

export default class UserService {
    static async login(username: string, password: string) {
        return await $api.post("/auth/login", {
            username: username,
            password: password,
        });
    }

    static async getUserById(id: number) {
        return await $api.get<User>(`/users/${id}`);
    }

    static async getUserPosts(userId: number) {
        return await $api.get(`/users/${userId}/posts`);
    }
}
