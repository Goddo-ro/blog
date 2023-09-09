import {Box, Heading} from "@chakra-ui/react";
import React, {useState} from "react";
import {Post} from "../types/Post.tsx";
import {useFetching} from "../hooks/useFetching.tsx";
import PostService from "../services/PostService.tsx";
import PostItem from "../components/PostItem.tsx";
import InfinityScrollView from "../components/InfinityScrollView.tsx";
import PostItemSkeleton from "../components/PostItemSkeleton.tsx";
import SearchContainer from "../components/SearchContainer.tsx";
import {AxiosResponse} from "axios";

export default function Posts() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [skip, setSkip] = useState(0);
    const [isEnd, setEnd] = useState(false);
    const [search, setSearch] = useState("");
    const [isSearch, setIsSearch] = useState(false);

    const limit = 10;
    const skipPlus = 10;

    const [fetchPosts, areLoading, error] = useFetching(async (skip: number, isSearch?: boolean) => {
        let response: AxiosResponse;
        if (isSearch) {
            response = await PostService.getPostsWithSearch(limit, skip, search);
        }
        else {
            response = await PostService.getPosts(limit, skip);
        }

        if (response.data.total <= skip)
            setEnd(true);
        else
            setEnd(false);
        setPosts(prev => [...prev, ...response.data.posts]);
    })

    const fetchNewPosts = (skip: number, isSearch?: boolean) => {
        fetchPosts(skip, isSearch);
        setSkip(prev => prev + skipPlus);
    }

    const handleInView = (inView: boolean) => {
        if (!inView || areLoading) return;
        fetchNewPosts(skip, isSearch);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        if (!e.target.value && isSearch) {
            setIsSearch(false);
            setSkip(0);
            setPosts([]);
            fetchNewPosts(0);
        }
    }

    const handleSearch = () => {
        if (!search) return;
        setIsSearch(true);
        setPosts([]);
        setSkip(0);
        fetchNewPosts(0, true);
    }

    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"2rem"}
        >
            <SearchContainer search={search} handleInputChange={handleInputChange} handleSearch={handleSearch} />
            {
                !error &&!posts.length && areLoading &&
                <SkeletonList count={5} />
            }
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
                    {
                        posts.length === 0 ? "We didn't find anything" : "Posts are over..."
                    }
                </Heading>
                    :
                <InfinityScrollView onChange={handleInView} fetch={fetchPosts} isLoading={areLoading}/>
            }
        </Box>
    )
}

function SkeletonList({count}: {count: number}) {
    return (
        <>
            {
            Array(count).fill(0).map((_, i) =>
                <PostItemSkeleton key={i} />
            )
            }
        </>
    )
}
