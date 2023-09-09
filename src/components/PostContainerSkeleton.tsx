import {Box} from "@chakra-ui/react";
import {UserSkeleton} from "./PostItem.tsx";
import Skeleton from "react-loading-skeleton";

export default function PostContainerSkeleton() {
    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"1rem"}
        >
            <Box
                display={"flex"}
                alignItems={"center"}
                gap={"8px"}
            >
                <UserSkeleton/>
            </Box>
            <Skeleton/>
            <Skeleton/>
            <Skeleton count={3} />
        </Box>
    )
}
