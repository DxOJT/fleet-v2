import React from "react";
import {
  Flex,
  Icon,
  Link,
  Text,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const NavItem = ({ icon, to, children, subLinks, ...rest }) => {
  console.log(subLinks)
  if(subLinks){
    return(
      <Accordion allowToggle>
        <AccordionItem
        align="center"
        mx="4"
        border={0}
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          boxShadow:'lg'
        }}
        {...rest}>
          <h2>
            <AccordionButton   
            p="4"
            _hover={{
              bg:'white'
            }}
            >
              <Icon
                mr="4"
                fontSize="28"
                _groupHover={{
                }}
                as={icon}
                color={'orange.400'}
              />
              <Box as="span" flex='1' textAlign='left' className=" font-bold">
                {children}
              </Box>
              <AccordionIcon
              fontSize={30} />
            </AccordionButton>
          </h2>
          <AccordionPanel 
          p={0}
          borderY='1px'
          mt={3}
          borderColor={'orange'}
          >
            {
              subLinks.map((sub)=>(
              <Link
              href={sub.to}
              style={{ textDecoration: "none" }}
              _focus={{ boxShadow: "none" }}
            >
              <Flex
                align="center"
                p="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                  bg:"gray.100"
                }}
                {...rest}
              >
                {icon && (
                  <Icon
                    mr="4"
                    fontSize="28"
                    _groupHover={{
                    }}
                    as={sub.icon}
                    color={'orange.400'}
                  />
                )}
                <Text className=" font-bold">{sub.name}</Text>
              </Flex>
            </Link>
              ))
            }
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    )
  }
    return (
      <Link
        href={to}
        style={{ textDecoration: "none" }}
        _focus={{ boxShadow: "none" }}
      >
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            boxShadow:'lg'
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="28"
              _groupHover={{
              }}
              as={icon}
              color={'orange.400'}
            />
          )}
          <Text className=" font-bold">{children}</Text>
        </Flex>
      </Link>
    );
  };

  export default NavItem;