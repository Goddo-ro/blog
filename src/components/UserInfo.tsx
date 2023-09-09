import {User} from "../types/User.tsx";
import {Box, Flex, Heading, Image} from "@chakra-ui/react";

export default function UserInfo({user}: {user: User | undefined}) {
    if (!user) return;

    return (
        <Flex
            gap={"2rem"}
            alignItems={"center"}
        >
            <Image src={user.image}
                   width={"30%"}
                   maxWidth={"100px"}
                   borderRadius={"50%"}
                   border={"1px solid #b9b9b9"}
            />
            <Box>
                <Heading as={"h2"}>{user.firstName} {user.lastName}</Heading>
                <Heading as={"h3"} size={"lg"} color={"#33BBC5"}>{user.username}</Heading>
            </Box>
        </Flex>
    )
}
