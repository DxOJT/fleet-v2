import { Box, Center, Flex, Text } from "@chakra-ui/react"


export const Dashboard  = () =>  {

return(

    
        <div>

      
        <Flex   rowGap={"50px"}   gap={"24px"} direction={"row"} > 
            <Box width={"200px"}  height={"50px"}  bgColor={"White"} >
                 <Text> 0 </Text>
              </Box>

             <Box width={"200px"}  height={"50px"}  bgColor={"White"} >
                 <Text> 0 </Text>
              </Box>

             <Box width={"200px"}  height={"50px"}  bgColor={"White"} >
                 <Text> 0 </Text>
              </Box>

             <Box    width={"200px"}  height={"50px"}  bgColor={"White"}   borderRadius='10px'>
                 <Center height={"100%"} > < Text fontSize={"50px"}  color={"black"}    > 0</Text></Center>
             </Box>
  



            

        
        </Flex>



        </div>


   

    


)



}