import {Flex, Heading} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {useFetching} from "../hooks/useFetching.tsx";
import PostService from "../services/PostService.tsx";
import {Comment as CommentType} from "../types/Comment.tsx";
import Comment from "./Comment.tsx";

export default function PostComments({postId}: {postId: number}) {
    const [comments, setComments] = useState<CommentType[]>([]);

    const [fetchComments, areLoading] = useFetching(async () => {
        const response = await PostService.getPostComments(postId);
        setComments(response.data.comments);
    });

    useEffect(() => {
        fetchComments();
    }, []);

    return (
        <Flex
            flexDirection={"column"}
            gap={"1rem"}
        >
            <Heading as={"h3"} size={"md"}>Comments</Heading>
            {
                !areLoading &&
                comments.map(comment =>
                    <Comment key={comment.id} comment={comment} />
                )
            }
        </Flex>
    )
}
