import React from "react";
import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
  Image,
  HStack,
  Center
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
        
        alignItems={'center'}
        {...rest}
      >
        <Flex alignItems="center" mx="8" justifyContent="space-between">

          
          <Box w={"100%"}  style={{ 
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column'
           }}>

            <HStack 
            ml={'-10'  }
            mb ={'50'}
            >

            <Image src='/fleettaxilogo.png' boxSize='100px' alt="logo" mr={-15} />
            <Text  as='b' fontSize='lg'  textAlign={'center'}  >Fleet Management</Text>

            </HStack>
          </Box>

          


          <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
        </Flex>
        {LinkItems.map((link) => (
          <NavItem    key={link.name} icon={link.icon} to={link.to}  ml={'25px'}  >
            <Text  fontWeight={'bold'} > {link.name} </Text> 
          </NavItem>
        ))}
      </Box>
    );
  };

export default SidebarContent;