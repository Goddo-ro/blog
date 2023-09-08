import {Post} from "../types/Post.tsx";
import {Box, Heading, Image, List, ListItem, Text, Link as ChakraLink} from "@chakra-ui/react";
import {ReactNode, useEffect, useState} from "react";
import {User} from "../types/User.tsx";
import {useFetching} from "../hooks/useFetching.tsx";
import UserService from "../services/UserService.tsx";
import Skeleton from "react-loading-skeleton";
import {Link} from "react-router-dom";

export default function PostItem({post}: {post: Post | undefined}) {
    if (!post) return;
    return (
        <Box
            border={"1px solid #b9b9b9"}
            width={"100%"}
            padding={"1rem"}
            borderRadius={"1rem"}
            display={"flex"}
            flexDirection={"column"}
            gap={"4px"}
        >
            <UserContainer userId={post.userId}/>
            <ChakraLink as={Link} to={`posts/${post.id}`}
                        display={"flex"}
                        flexDirection={"column"}
                        gap={"4px"}
                        _hover={{textDecoration: "none"}}
            >
                <Heading as={"h3"} size={"md"}>
                    {post.title}
                </Heading>
                <Text>{post.body}</Text>
                <List
                    display={"flex"}
                    gap={"4px"}
                >
                    {post.tags.map((tag, i) => <Tag key={i} tag={tag}/>)}
                </List>
            </ChakraLink>

        </Box>
    )
}

function UserContainer({userId}: {userId: number}) {
    const [user, setUser] = useState<User | undefined>();

    const [fetchUser, isUserLoading] = useFetching(async (id: number) => {
        const response = await UserService.getUserById(id);
        setUser(response.data);
    })

    useEffect(() => {
        fetchUser(userId);
    }, []);

    return (
        <Box
            display={"flex"}
            alignItems={"center"}
            gap={"8px"}
        >
            {
                isUserLoading
                ? <UserSkeleton/>
                :
                    <>
                        <Image src={user?.image}
                               width={"40px"}
                               height={"40px"}
                               borderRadius={"50%"}
                               border={"1px solid #b9b9b9"}
                        />
                        <UserNames>
                            <Text>{user?.firstName} {user?.lastName}</Text>
                            <ChakraLink as={Link} to={`/user/${userId}`}
                                        width={"fit-content"}
                                        fontSize={"14px"}
                                        color={"#33BBC5"}
                            >{user?.username}</ChakraLink>
                        </UserNames>
                    </>
            }
        </Box>
    )
}

export function UserSkeleton() {
    return (
        <>
            <Skeleton circle width={"40px"} height={"40px"} />
            <UserNames>
                <Skeleton/>
                <Skeleton/>
            </UserNames>
        </>
    )
}

function UserNames({children}: {children?: ReactNode}) {
    return (
        <Box
            width={"100%"}
            maxWidth={"300px"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
        >
            {children}
        </Box>
    )
}

function Tag({tag}: {tag: string}) {
    return (
        <ListItem
            border={"1px solid #33BBC5"}
            borderRadius={"12px"}
            paddingX={"12px"}
            fontSize={"14px"}
        >
            {tag}
        </ListItem>
    )
}
