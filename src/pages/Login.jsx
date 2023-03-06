import { useState } from "react";
import { Box, Input, Image, Button } from "@chakra-ui/react";
import { Card, CardBody, Text } from "@chakra-ui/react";
const LoginPage = () => {
  const email = "admin@test";
  const password = "admin";
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  return (
    <Box
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg={"#2D3748"}
    >
      <Card alignItems="center" borderColor="orange" borderWidth="2px">
        <Image src="/fleet.png" boxSize="100px" />
        <Text fontSize="30px" fontWeight="bold">
          Fleet Management
        </Text>
        <CardBody minWidth="550px">
          <Text>Username</Text>
          <Input
            placeholder="Username"
            type="email"
            required
            value={inputEmail}
            isInvalid={emailError}
            onChange={(e) => {
              setInputEmail(e.target.value);
            }}
          />
          <Text visibility={emailError ? "visible" : "hidden"} color="red">
            Incorrect Username
          </Text>
          <Text>Password</Text>
          <Input
            placeholder="Password"
            type="password"
            required
            value={inputPassword}
            isInvalid={passwordError}
            onChange={(e) => {
              setInputPassword(e.target.value);
            }}
          />
          <Text visibility={passwordError ? "visible" : "hidden"} color="red">
            Incorrect Password
          </Text>
          <Button colorScheme="orange" width="100%">
            Sign Up
          </Button>
        </CardBody>
      </Card>
    </Box>
  );
};

export default LoginPage;
