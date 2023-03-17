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
import { IoHome, } from "react-icons/io5";
import { FaUserShield,FaUserFriends,FaRegBuilding,FaCarSide ,FaUserInjured,FaFileInvoice,FaTaxi,FaWarehouse,FaRegHandshake,FaGasPump} from "react-icons/fa";
import { HiOutlineUsers ,   } from "react-icons/hi";




const LinkItems = [
  { name: "Dashboard", icon: IoHome, to: "/" },
  { name: "Owner", icon: FaUserShield, to: "#" },
  { name: "Employee", icon: FaUserFriends,  subLinks:[
    { name: "Driver", icon: FaUserFriends, to: "/driverList" },
    { name: "Gatekeeper", icon: HiOutlineUsers, to: "#" },
  ] },
  { name: "Company", icon: FaRegBuilding ,  subLinks:[
 
  ]  }
  ,
  { name: "Vehicles", icon:FaCarSide, subLinks:[
 
  ]  },

  { name: "Insurance", icon: FaUserInjured, to: "#" },
  { name: "Inventory", icon: FaFileInvoice,  subLinks:[
 
  ]  },
  { name: "Taxi", icon: FaTaxi, to: "#" },
  { name: "Garage", icon: FaWarehouse, to: "#" },

  { name: "Transaction", icon:FaRegHandshake,  subLinks:[
 
  ]  },
  { name: "Fuel", icon: FaGasPump, to: "#" },

  { name: "Settings ", icon: FiSettings,  subLinks:[
 
  ]  },



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
            mb ={'5'}
            >

            <Image src='/fleettaxilogo.png' boxSize='100px' alt="logo" mr={-15} />
            <Text  as='b' fontSize='lg'  textAlign={'center'}  >Fleet Management</Text>

            </HStack>
          </Box>

          


          <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
        </Flex>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon} to={link.to} subLinks={link.subLinks}>
            {link.name}
          </NavItem>
        ))}
      </Box>
    );
  };

export default SidebarContent;