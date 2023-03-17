import React from "react";
import {
  Box,
  useDisclosure,
} from "@chakra-ui/react";

import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import DrawerMobileView from "../components/Drawer";
import SidebarContent from "../components/SideBarContent";

export default function SidebarWithHeader({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box  minH="100vh"  /*bg={useColorModeValue("gray.100", "gray.900")}*/  bg={"#718096"} >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <DrawerMobileView isOpen={isOpen} onClose={onClose}/>
      {/* mobilenav */}
      <Header onOpen={onOpen}/>
      <Box ml={{ base: 0, md: 60 }} p="4">
        <Outlet />
      </Box>
    </Box>
  );
}




