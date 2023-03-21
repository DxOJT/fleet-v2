import {
  Box,
  Button,
  Flex,
  HStack,
  Text,
  Table,
  Tbody,
  Tr,
  Td,
  Link,
} from "@chakra-ui/react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { useState } from "react";
import React from "react";
const itemsPerPage = 5;
function MobileResponsiveView({ driverData, ...rest }) {
  const maxButtonsToShow = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const displayedData = driverData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
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
    <Box className=" bg-white rounded-2xl   p-2 " m={6} {...rest}>
      <Box className="border-solid border-gray-200 m-5 border p-5">
        <Table className="" variant="simple">
          <Tbody>
            {displayedData.map((item) => (
              <Tr
                key={item.id}
                as="tr"
                borderBottom={{ base: "1px solid orange" }}
              >
                <Td
                  borderBottom=".5px solid  orange"
                  style={{ boxSizing: "border-box" }}
                >
                  <Text className=" mb-4 font-bold"> Name: {item.name}</Text>
                  <Text className=" text-gray-700">
                    License Expiry: {item.DateOflicense}
                  </Text>
                </Td>
                <Td
                  borderBottom=".5px solid "
                  style={{ boxSizing: "border-box" }}
                  className=" text-orange-500"
                  p={0}
                >
                  <Link>View</Link>
                </Td>
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
                      <Text
                        className={
                          currentPage === 1 ? " bg-slate-500 p-3" : "  p-3  "
                        }
                      >
                        <IoIosArrowBack fontSize={25} />
                      </Text>
                    </Button>
                    {getPageNumbersToShow().map((pageNumber) => (
                      <Button
                        bg={"white"}
                        className={
                          pageNumber === currentPage
                            ? "text-orange-500 btn border border-1 border-solid border-red-500    "
                            : " hover:border-red-500 hover:text-red-500 border-2   rounded-md  p-3 font-bold   text-xl text-gray-700 border-red    "
                        }
                        key={pageNumber}
                        onClick={() => setCurrentPage(pageNumber)}
                      >
                        <Text> {pageNumber} </Text>
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
                      <Text
                        className={
                          currentPage === pageCount
                            ? "  bg-slate-500 p-3"
                            : " p-3"
                        }
                      >
                        <IoIosArrowForward fontSize={20} />
                      </Text>
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
}

export default MobileResponsiveView;
