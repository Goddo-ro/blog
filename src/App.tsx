import AppRouter from "./components/AppRouter.tsx";
import Navbar from "./components/Navbar.tsx";
import {ChakraProvider} from "@chakra-ui/react";

function App() {
  return (
      <ChakraProvider>
        <Navbar/>
        <AppRouter/>
      </ChakraProvider>
  )
}

export default App
