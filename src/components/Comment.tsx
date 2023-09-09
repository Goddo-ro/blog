import {Comment as CommentType} from "../types/Comment.tsx";
import {Box, Heading, Link as ChakraLink, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";

export default function Comment({comment}: {comment: CommentType}) {
    return (
        <Box key={comment.id}
            borderBottom={"1px solid rgba(0, 0, 0, .1)"}
             paddingBottom={"8px"}
        >
            <Heading as={"h4"} size={"xs"} mb={"4px"}>
                <ChakraLink as={Link} to={`/user/${comment.user.id}`}
                    color={"#33BBC5"}
                >
                    {comment.user.username}
                </ChakraLink>
            </Heading>
            <Text>{comment.body}</Text>
        </Box>
    )
}
