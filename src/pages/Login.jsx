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

  const handleSubmit =() => {
    if (email !== inputEmail) {
      setEmailError(true)
    } else {
        setEmailError(false)
    }
    if (password !== inputPassword && email === inputEmail) {
        setPasswordError(true)
    } else {
        setPasswordError(false)
    } 
  }
  const onchageEmail = (email) => {
    setInputEmail(email);
    setEmailError(false)
  }
  const onchangePassword = (password) => {
    setInputPassword(password);
    setPasswordError(false)
  }
  return (
    <Box className="flex min-h-screen justify-center items-center" bg="#2D3748">
      <Card className="flex items-center" borderColor="orange" borderWidth="2px" minWidth="25vw">
        <Image src="/fleet.png" boxSize="100px" />
        <Text className="font-bold text-3xl">
          Fleet Management
        </Text>
        <CardBody minWidth="inherit">
          <Text>Username</Text>
          <Input
            placeholder="Username"
            type="email"
            required
            value={inputEmail}
            onChange={(e) => {onchageEmail(e.target.value)}}
          />
          <Text visibility={emailError ? "visible" : "hidden"} color="red">
            User not found
          </Text>
          <Text>Password</Text>
          <Input
            placeholder="Password"
            type="password"
            required
            value={inputPassword}
            onChange={(e) => {onchangePassword(e.target.value)}}
          />
          <Text visibility={passwordError ? "visible" : "hidden"} color="red">
            Incorrect Password
          </Text>
          <Button colorScheme="orange" width="100%" onClick={() => {handleSubmit()}}>
            Sign Up
          </Button>
        </CardBody>
      </Card>
    </Box>
  );
};

export default LoginPage;
