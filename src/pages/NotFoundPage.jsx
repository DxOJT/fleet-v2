import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
const NotFoundPage = () => {
  const { userRole } = useAuth();
  const navigate = useNavigate();
  return (
    <Box className="flex items-center justify-center min-h-screen flex-col p-10">
      <Image src="/404-error.png" />
      <Text className="flex md:text-6xl font-bold mt-10 text-center text-4xl">
        Oops! This page could not be found.
      </Text>
      <Text className="sm:text-2xl md:text-lg mt-2 text-gray-500 px-16 font-semibold">
        The page you are looking for might have removed, had its name changed,or
        its temporarily unavailable
      </Text>
      <Box className=" flex md:flex-row flex-col gap-5 mt-10">
        <Button
          className=" text-white"
          _hover={{ bg: "orange.400" }}
          bg={"orange.400"}
          px={10}
          onClick={() => navigate(-1)}
        >
          Go Back
        </Button>
        <Button className="" px={10} onClick={() => navigate(`/${userRole}`)}>
          Homepage
        </Button>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
