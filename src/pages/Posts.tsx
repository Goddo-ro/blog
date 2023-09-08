import {Box, Heading} from "@chakra-ui/react";
import {useState} from "react";
import {Post} from "../types/Post.tsx";
import {useFetching} from "../hooks/useFetching.tsx";
import PostService from "../services/PostService.tsx";
import PostItem from "../components/PostItem.tsx";
import InfinityScrollView from "../components/InfinityScrollView.tsx";

export default function Posts() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [skip, setSkip] = useState(0);
    const [isEnd, setEnd] = useState(false);

    const limit = 10;
    const skipPlus = 10;

    const [fetchPosts, areLoading] = useFetching(async () => {
        const response = await PostService.getPosts(limit, skip);
        if (response.data.total <= skip)
            setEnd(true);
        setPosts(prev => [...prev, ...response.data.posts]);
    })

    const fetchNewPosts = () => {
        fetchPosts();
        setSkip(prev => prev + skipPlus);
    }

    const handleInView = (inView: boolean) => {
        if (!inView || areLoading) return;
        fetchNewPosts();
    }

    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"2rem"}
        >
            {
                posts.map(item => <PostItem key={item.id} post={item}/>)
            }
            {
                isEnd
                    ?
                <Heading
                    as={"h4"}
                    size={"md"}
                    marginInline={"auto"}
                    color={"#b9b9b9"}
                >
                    Posts are over...
                </Heading>
                    :
                <InfinityScrollView onChange={handleInView} fetch={fetchPosts} isLoading={areLoading}/>
            }
        </Box>
    )
}
