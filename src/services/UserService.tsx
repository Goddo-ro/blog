import {$api} from "../api/api.ts";

export default class UserService {
    static async login(username: string, password: string) {
        return await $api.post("/auth/login", {
            username: username,
            password: password,
        });
    }
}