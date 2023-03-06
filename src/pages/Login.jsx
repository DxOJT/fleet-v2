import { Box, Input, Image, Button } from '@chakra-ui/react'
import { Card, CardBody, Text } from '@chakra-ui/react'
const LoginPage = () => {


    return (  
        <Box minH="100vh" display="flex" justifyContent="center" alignItems="center" bg={"#2D3748"}>
            <Card alignItems="center" border= "1px" borderColor="orange">
                    <Image borderRadius="full" src='/fleet.png' boxSize="100px"/>
                    <Text fontSize="30px">Fleet Management</Text>
                <CardBody minWidth="550px">
                    <Text>Username</Text> 
                    <Input placeholder='Username' type='email'  required/>
                    <Text visibility="hidden">Incorrect Username</Text>
                    <Text>Password</Text> 
                    <Input placeholder='Password' type='password' required/>
                    <Text visibility="hidden">Incorrect Password</Text>
                    <Button colorScheme="orange"  width= "100%">Sign Up</Button>
                </CardBody>
            </Card>
        </Box>
    );
}
 
export default LoginPage
;