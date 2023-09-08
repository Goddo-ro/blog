import {Post} from "../types/Post.tsx";
import {Box} from "@chakra-ui/react";
import PostItem from "./PostItem.tsx";

export default function PostsList({posts}: {posts: Post[]}) {
    return (
        <Box

        >
            {
                posts.map(item => <PostItem key={item.id} post={item}/>)
            }
        </Box>
    )
}
