import { Box, Flex, ChakraProvider, theme,Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import LottieMaking from './components/LottieMaking.jsx';
import preloader from '../src/res/preloader.json';
import './App.css';
import MainRoute from './Routes.js';


import Bg from "./res/designedBackground.svg"

function App() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  return (
    <ChakraProvider theme={theme}>
      {loading && (
        <Flex
          position="absolute"
          zIndex={5}
          justifyContent={'center'}
          alignitems="center"
          w="100%"
          h="100vh"
          bg="white"
        >
          <LottieMaking animationData={preloader} />
        </Flex>
      )}
      <Box w="100%" position="relative" className="Noto"> 
        {/* <Image src={Bg} w="100%" h="100vh" objectFit={"cover"} position="absolute" zIndex={-1} /> */}
        <Box w="100%"  maxW="520px" h="100vh" className='scrolling' mx="auto">
          <Box  w="100%"  maxW="520px" h="100vh" bg="white" position={"absolute"} zIndex={-1}>
          </Box>
          <MainRoute />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
