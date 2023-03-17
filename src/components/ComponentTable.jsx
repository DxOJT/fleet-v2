import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Link,
} from "@chakra-ui/react";

const ComponentTable = ({ driverData }) => {
  return (
    <Table variant="simple" mt={"5"}>
      <Thead>
        <Tr>
          <Th fontSize={"13"}>NAME </Th>
          <Th fontSize={"13"}>LICENSE EXPIRY DATE</Th>
          <Th fontSize={"13"}>ACTION</Th>
        </Tr>
      </Thead>
      <Tbody>
        {driverData.map((value, index) => {
          return (
            <Tr
              _hover={{ bg: "gray.100" }}
              key={index}
              borderBottom="2px ridge white"
            >
              <Td>{value.name}</Td>
              <Td> {value.DateOflicense}</Td>
              <Td>
                <Link color={"blue.500"}> {value.Action}</Link>
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default ComponentTable;
