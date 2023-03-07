import { Card,  Center, Flex, Text } from "@chakra-ui/react"


export const Dashboard  = () =>  {


    


    const  cardLayout  = {
<<<<<<< HEAD
      width: "250px",
=======
      width: "205px",
>>>>>>> bd2a498d7141e4935ca80af8c4ff0000d116885d
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
<<<<<<< HEAD
         

=======
    
        
>>>>>>> bd2a498d7141e4935ca80af8c4ff0000d116885d
     }

     const sampledata = [
        {id:1, text1:0, text2:"Franchise  in One  (1) month"},
<<<<<<< HEAD
        {id:2, text1:0, text2:"Vehicle Registration expiring in (1) month"},
        {id:3, text1:0, text2:"Driver's License expiring in one  (1) month"},
        {id:4, text1:0, text2:"Insurance Expiring in One  (1) month"},
=======
        {id:2, text1:0, text2:"Vehicle  Registration expiring in (1) month "},
        {id:3, text1:0, text2:"Driving license expiring in (1) month"},
        {id:4, text1:0, text2:"Insurance expiring in (1) month"},
>>>>>>> bd2a498d7141e4935ca80af8c4ff0000d116885d

        
     ]


return(

      
        <Flex  className="flex justify-center   "        gap={"10px"} direction={"row"}  flexWrap="wrap" > 
          
            {sampledata.map((value)=>(


            <Card    style={cardLayout}  key={value.id}>
<<<<<<< HEAD
            <Center   height={"70%"} > < Text  style={cardFont} >  {value.text1}</Text></Center>
            <Center>  <Text  fontSize={"12"} fontWeight={"bold"}   > {value.text2} </Text> </Center> 
=======
            <Center   height={"70%"} > < Text  style={cardFont} className ={" text-9xl mb-1 "  }   > {value.text1}</Text></Center>
            <Center>  <Text  fontSize={"10px" } fontWeight={"bold"}   p={"2px"} > {value.text2}</Text> </Center> 
>>>>>>> bd2a498d7141e4935ca80af8c4ff0000d116885d
            </Card>


            ))}

          

         
         
  



            

        
        </Flex>





   

    


)



}