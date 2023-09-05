import AppRouter from "./components/AppRouter.tsx";
import Navbar from "./components/Navbar.tsx";
import {Box, ChakraProvider} from "@chakra-ui/react";
import Container from "./components/Container.tsx";

function App() {
  return (
      <ChakraProvider>
          <Box
              display="flex"
              flexDirection="column"
              minHeight="100vh"
          >
            <Navbar/>
            <Container>
                <AppRouter/>
            </Container>
          </Box>
      </ChakraProvider>
  )
}

export default App
