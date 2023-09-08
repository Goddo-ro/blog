import {Button} from "@chakra-ui/react";
import {InView} from "react-intersection-observer";

type InfinityScrollViewProps = {
    onChange: (inView: boolean) => void
    fetch: () => void
    isLoading: boolean
}

export default function InfinityScrollView({onChange, fetch, isLoading}: InfinityScrollViewProps) {
    return (
        <InView as="div" onChange={onChange}
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
        >
            <Button
                onClick={fetch}
                isLoading={isLoading}
                loadingText={"Loading"}
                spinnerPlacement={"end"}
                colorScheme={"gray"}
                marginInline={"auto"}
                size={"lg"}
            >
                Load more
            </Button>
        </InView>
    )
}
