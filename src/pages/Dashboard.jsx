import { Card,  Center, Flex, Text } from "@chakra-ui/react"


export const Dashboard  = () =>  {


    


    const  cardLayout  = {
      width: "205px",
      height: "80px",
      bgColor: "White",
      borderRadius: "10px",
      color: "black",
      flexWrap :"nowrap",
      padding : "10px"
      

    }

    


     const  cardFont= {
        fontWeight:"bold",
        fontSize:"30px",
    
        
     }

     const sampledata = [
        {id:1, text1:0, text2:"Franchise  in One  (1) month"},
        {id:2, text1:0, text2:"Vehicle  Registration expiring in (1) month "},
        {id:3, text1:0, text2:"Driving license expiring in (1) month"},
        {id:4, text1:0, text2:"Insurance expiring in (1) month"},

        
     ]

   



return(

    
      
      
        <Flex  className="flex justify-center   "        gap={"10px"} direction={"row"}  flexWrap="wrap" > 
          
            {sampledata.map((value)=>(


            <Card    style={cardLayout}  key={value.id}>
            <Center   height={"70%"} > < Text  style={cardFont} className ={" text-9xl mb-1 "  }   > {value.text1}</Text></Center>
            <Center>  <Text  fontSize={"10px" } fontWeight={"bold"}   p={"2px"} > {value.text2}</Text> </Center> 
            </Card>


            ))}

          

         
         
  



            

        
        </Flex>





   

    


)



}