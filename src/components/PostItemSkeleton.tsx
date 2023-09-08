import {Box} from "@chakra-ui/react";
import {UserSkeleton} from "./PostItem.tsx";
import Skeleton from "react-loading-skeleton";

export default function PostItemSkeleton() {
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
            <Box
                display={"flex"}
                alignItems={"center"}
                gap={"8px"}
            >
                <UserSkeleton/>
            </Box>
            <Skeleton/>
            <Skeleton count={3} />
            <Skeleton/>
        </Box>
    )
}
