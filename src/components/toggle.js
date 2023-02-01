import React from 'react'
//ChakraUI Buttons and Icons
import {IconButton} from '@chakra-ui/react';
import {MoonIcon, SunIcon} from '@chakra-ui/icons';

//ToggleColorMode Switch
import { useColorMode, useColorModeValue } from '@chakra-ui/react';

//Handles Dark Light Mode Switch
export default function Toggle(props) {

  const {toggleColorMode}= useColorMode();

  const text= useColorModeValue( 'dark','light' );

  const SwitchIcon= useColorModeValue( MoonIcon, SunIcon );

  return (
    <IconButton
      size="md"
      fontSize="xl"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      display="flex"
      color="current"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
}
