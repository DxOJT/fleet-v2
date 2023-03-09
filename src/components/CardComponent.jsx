import { Card,  Center, Text } from "@chakra-ui/react"
const CardComponent = ({value}) => { 
    const  cardFont= {
        fontWeight:"bold",
        fontSize:"30px",
     }
    
    
     const  cardLayout  = {
        width: "200px",
        height: "80px",
        bgColor: "White",
        borderRadius: "10px",
        color: "black",
        flexWrap :"nowrap",
        padding : "10px"
    
        
    
    }
    return(
    <Card   style={cardLayout} className="w-full"  key= {value.id}>
    <Center   height={"70%"} > < Text  style={cardFont} className ={" text-9xl mb-1 "  }   > {value.text1}</Text></Center>
    <Center>  <Text  fontSize={"10px" } fontWeight={"bold"}   p={"2px"} > {value.text2}</Text> </Center> 
    </Card>
    )
}

export default CardComponent;