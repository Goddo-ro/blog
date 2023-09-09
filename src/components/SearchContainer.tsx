import {Box, Button, Input} from "@chakra-ui/react";
import * as React from "react";

type SearchContainerProps = {
    search: string
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleSearch: () => void
}

export default function SearchContainer(props: SearchContainerProps) {
    return (
        <Box
            display={"flex"}
            gap={"8px"}
        >
            <Input value={props.search} onChange={props.handleInputChange}/>
            <Button
                onClick={props.handleSearch}
                variant={"outline"}
                px={"1.5rem"}
            >Search</Button>
        </Box>
    )
}
