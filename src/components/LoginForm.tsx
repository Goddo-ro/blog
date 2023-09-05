import {Box, Button, FormControl, FormErrorMessage, FormLabel, Input} from "@chakra-ui/react";
import {ChangeEvent, useState} from "react";

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [isUsernameError, setUsernameError] = useState(false);
    const [password, setPassword] = useState("");
    const [isPasswordError, setPasswordError] = useState(false);

    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        username && setUsernameError(false);
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        password && setPasswordError(false);
        setPassword(e.target.value);
    }

    const handleLogin = () => {
        !username && setUsernameError(true);
        !password && setPasswordError(true);
    }

    return (
        <Box
            width="100%"
            flex="1"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Box
                width="100%"
                maxW={600}
                p={8}
                borderWidth={1}
                borderRadius={8}
                boxShadow="md"
                display="flex"
                flexDirection="column"
                gap={4}
            >
                <FormControl isRequired={true} isInvalid={isUsernameError}>
                    <FormLabel>Username</FormLabel>
                    <Input type="text" value={username}
                           onChange={handleUsernameChange} />
                    {
                        isUsernameError &&
                      <FormErrorMessage>Username is required.</FormErrorMessage>
                    }
                </FormControl>

                <FormControl isRequired={true} isInvalid={isPasswordError}>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" value={password}
                           onChange={handlePasswordChange} />
                    {
                        isPasswordError &&
                      <FormErrorMessage>Password is required.</FormErrorMessage>
                    }
                </FormControl>
                <Button
                    colorScheme='teal'
                    ml={"auto"}
                    px={8}
                    onClick={handleLogin}
                >Login</Button>
            </Box>
        </Box>
    )
}
