import { Card,  Center, Flex, Text } from "@chakra-ui/react"


export const Dashboard  = () =>  {


    


    const  cardLayout  = {
      width: "200px",
      height: "80px",
      bgColor: "White",
      borderRadius: "10px",
      color: "black",
      minWidth: "120px" ,
      flexWrap :"nowrap"

    }

    


     const  cardFont= {
        fontWeight:"bold",
        fontSize:"12px",
     }

     const sampledata = [
        {id:1, text1:0, text2:"Franchise  in One  (1) month"},
        {id:2, text1:0, text2:"Franchise  in One  (1) month"},
        {id:3, text1:0, text2:"Franchise  in One  (1) month"},
        {id:4, text1:0, text2:"Franchise  in One  (1) month"},

        
     ]

   



return(

    
      
      
        <Flex  className="flex justify-center   "     rowGap={"50px"}   gap={"24px"} direction={"row"}  flexWrap="wrap" > 
          
            {sampledata.map((value)=>(


            <Card    style={cardLayout}  key={value.id}>
            <Center   height={"70%"} > < Text  style={cardFont}   > {value.text1}</Text></Center>
            <Center>  <Text  style={cardFont} > {value.text2}</Text> </Center> 
            </Card>


            ))}

          

         
         
  



            

        
        </Flex>





   

    


)



}