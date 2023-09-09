import {Box, Flex} from "@chakra-ui/react";
import Skeleton from "react-loading-skeleton";

export default function UserInfoSkeleton() {
    return (
        <Flex
            gap={"2rem"}
            alignItems={"center"}
        >
            <Skeleton circle={true}
                      style={{
                          width: "100px",
                          height: "100px",
                      }}
            />
            <Box width={"100%"}>
                <Skeleton/>
                <Skeleton/>
            </Box>
        </Flex>
    )
}
