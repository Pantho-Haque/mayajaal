import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import head_texture from '../res/firstPage_headTexture.png';
// svg imports
import headBg from '../res/headTopBg.svg';
import Logo from '../res/Logo.svg';
import Footer from './Footer';
import NavBurger from './NavBurger';

function ConfirmReg() {
  return (
    <Box>
      <Flex
        w="100%"
        h="200px"
        color={'white'}
        flexFlow="column"
        alignItems={'center'}
        position="relative"
      >
        <Flex
          w="100%"
          h="300px"
          bg="black"
          zIndex={-1}
          bgImage={head_texture}
          bgPosition="center"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 43%, 0% 100%)',
            filter: 'brightness(0.25)',
          }}
          position="absolute"
        ></Flex>
        <Image src={headBg} position="absolute" top={0} left={0} zIndex={-1} />
        <Flex justifyContent={'space-between'} w="100%" color="white">
          <Link to="/">
            <Image src={Logo} w={32} h={12} pl={3} mt={1} />
          </Link>
          <NavBurger />
        </Flex>
        <Text mt={5} fontSize={30} fontWeight="semibold">
          এডমিশন কনফার্মেশন
        </Text>
      </Flex>

      <Box h="auto" w="85%" textAlign={"justify"} mx="auto" mt={60} mb={40}>
        <Text color="green" fontSize={20} >
          আপনার রেজিস্ট্রেশন সফলভাবে সম্পন্ন হয়েছে। আপনার তথ্যাবলি সঠিকভাবে
          যাচাই বাছাই করে প্রাথমিকভাবে সিলেক্ট করা হলে অনলাইন ইন্টারভিউ এর জন্য
          সরাসরি আপনার নাম্বারে ফোন করা হবে। ধন্যবাদ।
        </Text>
      </Box>
      <Footer />
    </Box>
  );
}

export default ConfirmReg;
