import {Box, Button, Flex, Image, Link as ChakraLink, Stack} from "@chakra-ui/react";
import {JSX, useState} from "react";

// @ts-ignore
import Logo from "../../assets/icons/crown.svg";
import {Link} from "react-router-dom";
import {useAuthContext} from "../../context/AuthContext.tsx";
import Skeleton from "react-loading-skeleton";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Box
            bg={"blackAlpha.300"}
        >
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                w="100%"
                p={8}
                mx="auto"
                maxW={1200}
                color={"#000"}
            >
                <img src={Logo} alt={"User"}/>
                <Box display={{base: "block", md: "none"}} onClick={toggle}>
                    {isOpen ? <CloseIcon/> : <MenuIcon/>}
                </Box>
                <MenuLinks isOpen={isOpen}/>
            </Flex>
        </Box>
    )
}

const CloseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <title>Close</title>
        <path
            fill="#000"
            d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
        />
    </svg>
);

const MenuIcon = () => (
    <svg
        width="24px"
        height="24px"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000"
    >
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
    </svg>
);

type MenuItemProps = {
    children: string | JSX.Element | JSX.Element[];
    to: string;
}

const MenuItem = ({children, to = "/"}: MenuItemProps) => {
    return (
        <ChakraLink fontSize={22} as={Link} to={to}>
            {children}
        </ChakraLink>
    );
};

const User = () => {
    const [isShowExit, setShowExit] = useState(false);

    const {id, image, isUserLoading, logout} = useAuthContext();

    return (
        <>
        {
            id
            ?
            <Box
                display={"flex"}
                alignItems={"center"}
                marginLeft={10}
                onMouseEnter={() => setShowExit(true)}
                onMouseLeave={() => setShowExit(false)}
            >
                { !isUserLoading ?
                    <>
                        <Link to={`user/${id}`}>
                            <Image
                                border={"1px solid gray"}
                                src={image}
                                width={42}
                                height={42}
                                borderRadius="50%"
                                marginRight={2}
                                transform={isShowExit ? "translateX(0)" : "translateX(40px)"}
                                transition="all 1s"
                                zIndex={2}
                            />
                        </Link>
                        <Button
                            onClick={() => logout()}
                            opacity={isShowExit ? 1 : 0}
                            colorScheme={"red"}
                            variant={"outline"}
                            transition={"opacity 1s"}
                        >
                            Leave
                        </Button>
                    </>
                    : <Skeleton circle={true} width="40px" height="40px"/>
                }
            </Box>
            :
            <MenuItem to="/login">
                <Button
                    size="md"
                    fontSize={20}
                    rounded="md"
                    color={"#fff"}
                    bg={"#008181"}
                    _hover={{
                        bg: ["#033636"]
                    }}
                >
                    Sign In
                </Button>
            </MenuItem>
}
        </>
    )
}

const MenuLinks = ({isOpen}: { isOpen: boolean }) => {
    return (
        <Box
            display={{base: isOpen ? "block" : "none", md: "block"}}
            flexBasis={{base: "100%", md: "auto"}}
        >
            <Stack
                spacing={8}
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}
            >
                <MenuItem to="/">Posts</MenuItem>
                <User/>
            </Stack>
        </Box>
    );
};
