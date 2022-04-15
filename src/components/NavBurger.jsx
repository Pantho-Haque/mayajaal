import {
  Box,
  Button,
  Menu,
  Image,
  Icon,
  Flex,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import navBurgerBg from '../res/navBurgerBg.svg';

function NavBurger() {
  return (
    <Box justifySelf={'end'}>
      <Menu autoSelect={false}>
        <MenuButton onSelect={{ backgroundColor: 'none' }}>
          <Flex>
            <Image
              src={navBurgerBg}
              w={'130px'}
              fallbacksrc="https://via.placeholder.com/300/CCCCCC/CCCCCC"
              objectFit={'cover'}
            />
            {/* <Icon fontSize={25} color="white" as={AiOutlineMenu} /> */}
          </Flex>
        </MenuButton>
        <MenuList bg="black">
          <Link to="/">
            <MenuItem _hover={{ bg: '#414347' }}>হোম</MenuItem>
          </Link>
          <Link to="/courseDetails">
            <MenuItem _hover={{ bg: '#414347' }} _selection={{ bg: '#414347' }}>
              কোর্স ডিটেইলস
            </MenuItem>
          </Link>
          <Link to="/registration">
            <MenuItem _hover={{ bg: '#414347' }}>রেজিস্ট্রেশন</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default NavBurger;
