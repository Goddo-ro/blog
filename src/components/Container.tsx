import {JSX} from "react";
import {Box} from "@chakra-ui/react";

type ContainerProps = {
    children: string | JSX.Element | JSX.Element[]
}

export default function Container({children}: ContainerProps) {
    return (
        <Box
            mx={"auto"}
            maxW={1200}
            p={8}
        >
            {children}
        </Box>
    )
}
