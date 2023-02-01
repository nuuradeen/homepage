import React from 'react'
import Toggle from './toggle'
import NextLink from 'next/link'

//ChakraUI Imports 
import {Box, Button, HStack, Heading, Show, IconButton, Link, Icon, Menu, MenuButton, MenuList,MenuItem} from '@chakra-ui/react'
//React & Chakra Icons
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HamburgerIcon } from '@chakra-ui/icons';

//Navigation Bar
const Navbar=(props)=> {
    //Handles External Links 
    const handleLinkedIn = () => {
        window.open('https://www.linkedin.com/in/noorkahalah/');
      };
      const handleGithub = () => {
        window.open('https://github.com/Fyvii');
      };

    return (
        <HStack justify="space-between" p={4}>
        <Box display="flex">
          <Heading fontSize="lg">
            <Link as={NextLink} href='/home'>Noor Kahalah</Link>
          </Heading>
        </Box>
  
        <Show above="md">
          <Link as={NextLink} href="/works">
            Works
          </Link>
        </Show>
  
        <Show above="md">
          <Link as={NextLink} href="/posts">Posts</Link>
        </Show>
        <Show above="md">
          <IconButton
            icon={<FaLinkedinIn />}
            colorScheme="linkedin"
            onClick={handleLinkedIn}
          />
        </Show>
        <Show above="md">
          <Box>
            <Icon as={FaGithub} />
            <Link href="https://github.com/Fyvii">Github Source</Link>
          </Box>
        </Show>
        <HStack>
          <Show below="md">
            <Menu>
              <MenuButton as={Button} colorScheme="green">
                <Icon as={HamburgerIcon}></Icon>
              </MenuButton>
              <MenuList>
                <MenuItem as={Link} href="/">
                  Home
                </MenuItem>
                <MenuItem as={Link} href="/works">
                  Works
                </MenuItem>
                <MenuItem as={Link} href="/posts">
                  Posts
                </MenuItem>
                <MenuItem onClick={handleLinkedIn}>LinkedIn</MenuItem>
                <MenuItem onClick={handleGithub}>Github Source</MenuItem>
              </MenuList>
            </Menu>
          </Show>
          <Toggle className="switch" />
        </HStack>
      </HStack>
    );
}

//Footer 
const Footer=()=>{
    return
}

//Static Layout for Entire Web Page
const Layout=({children}) =>{
  return (
    <>
    <Navbar/>
    <main>{children}</main>
    <Footer/>
    </>
  )
}

export default Layout;