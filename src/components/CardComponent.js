const CardComponent = (value) => {
    <Card    style={cardLayout}  key={value.id}>
    <Center   height={"70%"} > < Text  style={cardFont} className ={" text-9xl mb-1 "  }   > {value.text1}</Text></Center>
    <Center>  <Text  fontSize={"10px" } fontWeight={"bold"}   p={"2px"} > {value.text2}</Text> </Center> 
    </Card>
}

export default CardComponent;