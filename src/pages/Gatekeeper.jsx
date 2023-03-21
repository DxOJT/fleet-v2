import { Box, Button, Flex, HStack, Input, Text } from "@chakra-ui/react";
import { ClassNames } from "@emotion/react";
import ComponentTable from "../components/ComponentTable";
import MobileResponsiveView from "../components/MobileResponsiveView";

const Gatekeeper = () => {
  const gateKeeperData = [
    {
      id: 1,
      name: "Sonny Boy Fuenteblanca",
      DateOflicense: "12/24/2023",
  
    },
    {
      id:2,
      name: "Cedric Franz Candido",
      DateOflicense: "12/24/2023",
   
    },
    {
      id:3,
      name: "Sean Camogues",
      DateOflicense: "12/24/2023",
     
    },{
      id: 4,
      name: "Reyjan Cuyog",
      DateOflicense: "12/24/2023",
  
    },
    {
      id:5,
      name: "Eunice Balmes Mabaho",
      DateOflicense: "12/24/2023",
   
    },
    {
      id:6,
      name: "ggggggggggg",
      DateOflicense: "12/24/2023",
     
    },{
      id: 7,
      name: "fffffffff",
      DateOflicense: "12/24/2023",
  
    },
    {
      id:8,
      name: "jjjjjjjjjjj",
      DateOflicense: "12/24/2023",
   
    },
    {
      id:9,
      name: "nnnnnnnnnnnn",
      DateOflicense: "12/24/2023",
     
    },{
      id: 10,
      name: "Seganwqeqeqwe Abayo",
      DateOflicense: "12/24/2023",
  
    },
    {
      id:11,
      name: "Segan Abayo",
      DateOflicense: "12/24/2023",
   
    },
   

    
  ];
  return (
    <>
      <Box mt={"5"}>
        <Box className= " flex flex-col md:flex-row justify-between bg-white  m-6 p-5 rounded-x md:items-center">
          <Text
            className=" font-bold"
            fontSize={{ base: 35, md: 23 }}
            ml={{ base: 0, md: 6 }}
          >
            Gatekeeper List
          </Text>

          <div className=" flex flex-col md:flex-row w-full md:w-1/3">
            <Input mr={5} placeholder="Search" fontSize={{ base:22, md:18}} mb={{base:5, md:0}}
              p={{base:7, md:0}}/>
            <Button
              fontSize={{ base:20, md:18}}
              px={{base:7, md:10}}
              py={{base:7, md:0}}
              borderStyle={"solid"}
              borderWidth={"1px"}
              borderColor={"orange.500"}
              color={"orange.600"}
            >
              Add GateKeeper
            </Button>
          </div>
        </Box>
        <Box>
          <ComponentTable driverData={gateKeeperData} display={{base:'none', md:'block'}} />
          <MobileResponsiveView driverData={gateKeeperData} display={{base:'block', md:'none'}}/>
        </Box>
      </Box>
    </>
  );
};

export default Gatekeeper;
