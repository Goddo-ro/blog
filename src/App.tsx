import AppRouter from "./components/AppRouter.tsx";
import Navbar from "./components/Navbar.tsx";
import {ChakraProvider} from "@chakra-ui/react";
import Container from "./components/Container.tsx";

function App() {
  return (
      <ChakraProvider>
        <Navbar/>
        <Container>
            <AppRouter/>
        </Container>
      </ChakraProvider>
  )
}

export default App
