import React from "react";
import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
  Image
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
} from "react-icons/fi";

const LinkItems = [
  { name: "Dashboard", icon: FiHome, to: "/" },
  { name: "Trending", icon: FiTrendingUp, to: "#" },
  { name: "Explore", icon: FiCompass, to: "#" },
  { name: "Favourites", icon: FiStar, to: "#" },
  { name: "Settings", icon: FiSettings, to: "#" },
];

import NavItem from "./NavItem";

const SidebarContent = ({ onClose, ...rest }) => {
    return (
      <Box  
        transition="3s ease"
        bg={useColorModeValue("white", "gray.900")}
        borderRight="1px"
        borderRightColor={useColorModeValue("gray.200", "gray.700")}
        w={{ base: "full", md: 60 }}
        pos="fixed"
        h="full"
        {...rest}
      >
        <Flex alignItems="center" mx="8" justifyContent="space-between">
          <Box w={"100%"}  style={{ 
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column'
           }}>
            <Image src='/fleettaxilogo.png' boxSize='110px' alt="logo" mt={"-5px"}/>
            <Text mt={"-15px"} as='b' fontSize='lg'>Fleet Management</Text>
          </Box>
          <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
        </Flex>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon} to={link.to}>
            {link.name}
          </NavItem>
        ))}
      </Box>
    );
  };

export default SidebarContent;