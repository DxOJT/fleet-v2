import React from "react";
import {
  Drawer,
  DrawerContent,
} from "@chakra-ui/react";
import SidebarContent from "./SideBarContent";
const DrawerMobileView = ({isOpen, onClose}) => {
    return ( 
      <Drawer
      autoFocus={false}
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      returnFocusOnClose={false}
      onOverlayClick={onClose}
      size="full"
    >
      <DrawerContent>
        <SidebarContent onClose={onClose} />
      </DrawerContent>
    </Drawer>
     );
}
 
export default DrawerMobileView;