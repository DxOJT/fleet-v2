import { Box, Input, Image } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react'
const LoginPage = () => {
    return (  
        <Box minH="100vh" display="flex" justifyContent="center" alignItems="center">
            <Card alignItems="center">
                    <Image borderRadius="full" src='/fleet.png' boxSize="100px"/>
                    <Text fontSize="30px">Fleet Management</Text>
                <CardBody minWidth="550px">
                    <Text>Username</Text> 
                    <Input placeholder='Username' type='email' required/>
                    <Text visibility="hidden">Incorrect Username</Text>
                    <Text>Password</Text> 
                    <Input placeholder='Password' type='password' required/>
                    <Text visibility="hidden">Incorrect Password</Text>
                </CardBody>
            </Card>
        </Box>
    );
}
 
export default LoginPage
;