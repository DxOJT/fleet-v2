import { Box, Button, Flex, HStack, Input, Text } from "@chakra-ui/react";
import { ClassNames } from "@emotion/react";
import DriverTable from "../components/DriverTable";
import MobileResponsiveView from "../components/MobileResponsiveView";

const DriverList = () => {
  const driverData = [
    {
      id: 1,
      name: "Sonny Boy Fuenteblanca",
      DateOflicense: "12/24/2023",
    },
    {
      id: 2,
      name: "Cedric Franz Candido",
      DateOflicense: "12/24/2023",
    },
    {
      id: 3,
      name: "Sean Camogues",
      DateOflicense: "12/24/2023",
    },
    {
      id: 4,
      name: "Reyjan Cuyog",
      DateOflicense: "12/24/2023",
    },
    {
      id: 5,
      name: "Eunice Balmes Mabaho",
      DateOflicense: "12/24/2023",
    },
    {
      id: 6,
      name: "ggggggggggg",
      DateOflicense: "12/24/2023",
    },
    {
      id: 7,
      name: "fffffffff",
      DateOflicense: "12/24/2023",
    },
    {
      id: 8,
      name: "jjjjjjjjjjj",
      DateOflicense: "12/24/2023",
    },
    {
      id: 9,
      name: "nnnnnnnnnnnn",
      DateOflicense: "12/24/2023",
    },
    {
      id: 10,
      name: "Seganwqeqeqwe Abayo",
      DateOflicense: "12/24/2023",
    },

    {
      id: 11,
      name: "Segan Abayo",
      DateOflicense: "12/24/2023",
    },
  ];
  return (
    <>
      <Box mt={"5"}>
        <Box className=" flex flex-col md:flex-row justify-between bg-white  m-6 p-5 rounded-x md:items-center">
          <Text
            className=" font-bold"
            fontSize={{ base: 35, md: 23 }}
            ml={{ base: 0, md: 6 }}
          >
            Driver List
          </Text>

          <div className=" flex flex-col md:flex-row w-full md:w-1/3 gap-2">
            <Input
              className="flex-1"
              placeholder="Search"
              fontSize={{ base: 22, md: 18 }}
              mb={{ base: 5, md: 0 }}
              p={{ base: 7, md: 5 }}
              h={8}
            />
            <Button
              className="flex-1"
              fontSize={{ base: 20, md: 15 }}
              px={{ base: 0, md: 10 }}
              py={{ base: 7, md: 0 }}
              borderStyle={"solid"}
              borderWidth={"1px"}
              borderColor={"orange.500"}
              color={"orange.600"}
              bg={"white"}
              mt={0}
            >
              Add Driver
            </Button>
          </div>
        </Box>
        <Box>
          <DriverTable
            driverData={driverData}
            display={{ base: "none", md: "block" }}
          />
          <MobileResponsiveView
            driverData={driverData}
            display={{ base: "block", md: "none" }}
          />
        </Box>
      </Box>
    </>
  );
};

export default DriverList;
