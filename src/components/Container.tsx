import {JSX} from "react";
import {Box} from "@chakra-ui/react";

type ContainerProps = {
    children: string | JSX.Element | JSX.Element[]
}

export default function Container({children}: ContainerProps) {
    return (
        <Box
            mx={"auto"}
            width="100%"
            maxW={1200}
            p={8}
            flex={1}
            display="flex"
            flexDirection="column"
        >
            {children}
        </Box>
    )
}
