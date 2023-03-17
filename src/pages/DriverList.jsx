import { Box, Button, Flex, HStack, Input, Text } from "@chakra-ui/react";
import { ClassNames } from "@emotion/react";
import ComponentTable from "../components/ComponentTable";

const DriverList = () => {
  const driverData = [
    {
      name: "Segan Abayo",
      DateOflicense: "12/24/2023",
      Action: "View profile",
    },
    {
      name: "Segan Abayo",
      DateOflicense: "12/24/2023",
      Action: "View profile",
    },
    {
      name: "Segan Abayo",
      DateOflicense: "12/24/2023",
      Action: "View profile",
    },
  ];
  return (
    <>
      <Box mt={"5"}>
        <HStack className="flex justify-between">
          <Text
            className=" font-bold"
            fontSize={{ base: 15, md: 23 }}
            ml={{ base: 7, md: 0 }}
          >
            {" "}
            Driver List{" "}
          </Text>

          <div>
            <Input w={{ base: 20, md: 60 }} mr={"5"} placeholder="Search" />
            <Button
              w={{ base: 20, md: 40 }}
              mr={"5"}
              px="10"
              mt={"-2"}
              borderStyle={"solid"}
              borderWidth={"1px"}
              borderColor={"orange.500"}
              color={"orange.600"}
              fontSize={{ base: 12, md: 15 }}
            >
              Add Drivers
            </Button>
          </div>
        </HStack>
        <Box>
          <ComponentTable driverData={driverData} />
        </Box>
      </Box>
    </>
  );
};

export default DriverList;
