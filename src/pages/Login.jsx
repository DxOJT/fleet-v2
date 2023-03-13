import { useForm } from "react-hook-form";
import { Input, Button, Text,Image, Box} from "@chakra-ui/react";

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-800 p-5">
      <div className="flex bg-white w-full lg:w-1/3 p-3 justify-center border-orange-400 border-2">        
        <form onSubmit={handleSubmit(onSubmit)} 
          className="m-4 flex flex-col w-full lg:w-2/3">
          <Box className="flex flex-col items-center">
            <Image src="/fleet.png" boxSize={"150px"}/>
            <Text className="text-3xl font-bold mb-5">Fleet Management</Text>
          </Box>
          <Text>Username</Text>
          <Input 
            className="my-3" 
            type="email" 
            isInvalid={errors.Username} 
            color={errors.Username&&'tomato'}  
            errorBorderColor='crimson' 
            placeholder="Usernmae" 
            {...register("Username", {required: "This is required." })}/>
            <div className="h-10">
              {errors.Username && 
                <Text className=" text-red-500">
                {errors.Username.message}</Text>}
            </div>
          <Text>Username</Text>
          <Input
            className="my-3" 
            type="password" 
            isInvalid={errors.Password} 
            color={errors.Password&&'tomato'}  
            errorBorderColor='crimson' 
            placeholder="Password" 
            {...register("Password", {required: "This is required."})}/>
            <div className="h-10">
              {errors.Password && 
              <Text className=" text-red-500">
                {errors.Password.message}</Text>}
            </div>
          <button type="submit"className=" text-white bg-orange-500 hover:bg-orange-400 p-2 rounded-md">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
