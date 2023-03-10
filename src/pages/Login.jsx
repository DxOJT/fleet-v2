import { useForm } from "react-hook-form";
import { Input, Button, Text } from "@chakra-ui/react";

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-800">
      <div className="flex bg-white  w-1/3 p-3 max-sm:w-1/4">        
        <form onSubmit={handleSubmit(onSubmit)} 
          className="m-4 flex flex-1 flex-col">
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
          <Button type="submit">Sign In</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
