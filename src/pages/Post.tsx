import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Post as PostType} from "../types/Post.tsx";
import {useFetching} from "../hooks/useFetching.tsx";
import PostService from "../services/PostService.tsx";
import {Box} from "@chakra-ui/react";
import PostContainer from "../components/PostContainer.tsx";
import PostContainerSkeleton from "../components/PostContainerSkeleton.tsx";
import PostComments from "../components/PostComments.tsx";

export default function Post() {
    const [post, setPost] = useState<PostType>();

    const [fetchPost, isLoading] = useFetching(async (id: number) => {
        const response = await PostService.getPostById(id);
        setPost(response.data)
    })

    const {id} = useParams();

    useEffect(() => {
        fetchPost(Number(id));
    }, []);

    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"2rem"}
        >
            {
                !isLoading
                    ? <PostContainer post={post}/>
                    : <PostContainerSkeleton/>
            }
            <PostComments postId={Number(id)}/>
        </Box>
    )
}
