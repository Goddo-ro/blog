import {Post} from "../types/Post.tsx";
import {Box, Heading, List, Text} from "@chakra-ui/react";
import {Tag, UserContainer} from "./PostItem.tsx";

export default function PostContainer({post}: {post: Post | undefined}) {
    if (!post) return;

    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"1rem"}
        >
            <UserContainer userId={post.userId}/>
            <Heading as={"h1"} size={"lg"}>{post.title}</Heading>
            <Box
                display={"flex"}
                gap={"1rem"}
            >
                <List
                    display={"flex"}
                    gap={"4px"}
                >
                    {post.tags.map((tag, i) => <Tag key={i} tag={tag}/>)}
                </List>
                <Text color={"#b2b2b2"}>{post.reactions} likes</Text>
            </Box>

            <Text>{post.body}</Text>
        </Box>
    )
}
