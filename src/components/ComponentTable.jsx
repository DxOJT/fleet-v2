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

import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";

import { useState } from "react";

// const data = [
//   { id: 1, name: "John Doe", age: 30 },
//   { id: 2, name: "Jane Doe", age: 25 },
//   { id: 3, name: "Bob Smith", age: 40 },
//   { id: 4, name: "Alice Johnson", age: 35 },
//   { id: 5, name: "Peter Parker", age: 28 },
//   { id: 6, name: "Mary ane", age: 26 },
//   { id: 7, name: "Tony Stark", age: 45 },
//   { id: 8, name: "Steve Rogers", age: 38 },
//   { id: 9, name: "Natasha Romanoff", age: 32 },
//   { id: 10, name: "Bruce Banner", age: 42 },
// ];

const itemsPerPage = 5;
const maxButtonsToShow = 5;


const ComponentTable = ({ driverData, ...rest }) => {
  
  
    const [currentPage, setCurrentPage] = useState(1);
  
    const displayedData = driverData.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
    console.log(displayedData);
    const pageCount = Math.ceil(driverData.length / itemsPerPage);
  
    const handlePrevClick = () => {
      setCurrentPage((prevPage) => prevPage - 1);
    };
  
    const handleNextClick = () => {
      setCurrentPage((prevPage) => prevPage + 1);
    };

    const getPageNumbersToShow = () => {
      let pageNumbers = [];
    
      if (pageCount <= maxButtonsToShow) {
        pageNumbers = Array.from({ length: pageCount }, (_, index) => index + 1);
      } else {
        const leftOffset = Math.floor(maxButtonsToShow / 2);
        const rightOffset = maxButtonsToShow - leftOffset - 1;
    
        let startPage = currentPage - leftOffset;
        let endPage = currentPage + rightOffset;

        if (startPage < 1) {
          startPage = 1;
          endPage = maxButtonsToShow;
        }
    
        if (endPage > pageCount) {
          endPage = pageCount;
          startPage = pageCount - maxButtonsToShow + 1;
        }
    
        if (startPage > 1 && endPage < pageCount) {
          const overflow = maxButtonsToShow - (endPage - startPage + 1);
          const leftOverflow = Math.floor(overflow / 2);
          const rightOverflow = overflow - leftOverflow;
          startPage -= leftOverflow;
          endPage += rightOverflow;
        }
    
        pageNumbers = Array.from(
          { length: endPage - startPage + 1 },
          (_, index) => startPage + index
        );
      }
    
      return pageNumbers;
    };

  return (
    // <Table variant="simple" mt={"5"}>
    //   <Thead>
    //     <Tr>
    //       <Th fontSize={"13"}>NAME </Th>
    //       <Th fontSize={"13"}>LICENSE EXPIRY DATE</Th>
    //       <Th fontSize={"13"}>ACTION</Th>
    //     </Tr>
    //   </Thead>
    //   <Tbody>
    //     {driverData.map((value, index) => {
    //       return (
    //         <Tr
    //           _hover={{ bg: "gray.100" }}
    //           key={index}
    //           borderBottom="3px ridge white"
    //         >
    //           <Td>{value.name}</Td>
    //           <Td> {value.DateOflicense}</Td>
    //           <Td>
    //             <Link color={"blue.500"}> {value.Action}</Link>
    //           </Td>
    //         </Tr>
    //       );
    //     })}
    //   </Tbody> 
    // </Table>
     <Box className=" bg-white rounded-2xl   p-2 "  m={6}  {...rest}  >
      <Box className="border-solid border-gray-200 m-5 border p-5">
    <Table className=""  variant="simple"  >
    <Thead   className=" " >
      <Tr   className=" bg-gray-200"   >
        
        <Th>Name</Th>
        <Th>LICENSE EXPIRY</Th>
        <Th>ACTION</Th>
      </Tr>
    </Thead>
    
    <Tbody>
      {displayedData.map((item) => (
        <Tr key={item.id}   >
          <Td>{item.name}</Td>
          <Td>{item.DateOflicense}</Td>
        <Td className=" text-blue-700"><Link >View Profile</Link></Td>
        </Tr>
      ))}
    </Tbody>
    <tfoot>
      <Tr>
        <Td colSpan={3}>
        <Flex justifyContent="flex-end">

          <HStack spacing={2} justify="center">
            
            <Button
              onClick={handlePrevClick}
              isDisabled={currentPage === 1}
            >
            <Text className={currentPage===1?" bg-slate-500 p-3":" bg-white p-3"}>< IoIosArrowBack fontSize={25} /></Text>
            </Button>
            {getPageNumbersToShow  ().map((pageNumber) => (
            <Button    className=" hover:border-red-500 hover:text-red-500 border-2   rounded-md  bg-white p-3 font-bold   text-xl text-gray-700 "
              key={pageNumber}
              isActive={pageNumber === currentPage}
              onClick={() => setCurrentPage(pageNumber)}
            >
              {pageNumber}
            </Button>
          ))}
          {pageCount > maxButtonsToShow && (
            <>
              {currentPage <= pageCount - maxButtonsToShow / 2 && (
                <Button isDisabled>...</Button>
              )}
              {currentPage > pageCount - maxButtonsToShow / 2 && (
                <Button isDisabled>...</Button>
              )}
            </>
          )}

                

            <Button 
              onClick={handleNextClick}
              isDisabled={currentPage === pageCount}
            >

              
            <Text className={currentPage===pageCount?"  bg-slate-500 p-3":" bg-white p-3"}>< IoIosArrowForward fontSize={20} /></Text>

            </Button>
          </HStack>
            </Flex>
        </Td>
      </Tr>
    </tfoot>
  </Table>
  </Box>
  </Box>
  );
};

export default ComponentTable;
