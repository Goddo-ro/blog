import {useEffect, useState} from "react";
import {Post} from "../types/Post.tsx";
import {useFetching} from "../hooks/useFetching.tsx";
import UserService from "../services/UserService.tsx";
import {Flex, Heading} from "@chakra-ui/react";
import PostItem from "./PostItem.tsx";

export default function UserPosts({userId}: {userId: number}) {
    const [posts, setPosts] = useState<Post[]>([]);

    const [fetchPosts] = useFetching(async () => {
       const response = await UserService.getUserPosts(userId);
       setPosts(response.data.posts);
    });

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <Flex
            mt={"4rem"}
            flexDirection={"column"}
            gap={"1rem"}
        >
            <Heading as={"h4"} size={"md"}>User's posts</Heading>
            {
                posts.map(post => <PostItem key={post.id} post={post} hasUser={false}/>)
            }
        </Flex>
    )
}
