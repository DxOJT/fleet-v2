import { Box, Card,  Center, Text } from "@chakra-ui/react"
const CardComponent = ({value}) => { 
    return(
    <Box className=" p-4 flex flex-col items-center text-center rounded-2xl bg-white drop-shadow-md"  >
        <Text className=" font-bold text-4xl md:text-5xl mb-1">{value.text1}</Text>
        <Text className=" font-medium text-md md:text-xl text-gray-600">{value.text2}</Text> 
    </Box>
    )
}

export default CardComponent;