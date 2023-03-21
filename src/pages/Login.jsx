import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input, Text, Image, Box, useToast } from "@chakra-ui/react";
import { post } from "../lib/axios.cjs";
import { useAuth } from "../hooks/useAuth";

const LoginPage = () => {
  const [sample, setSample] = useState(false);

  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const toast = useToast();

  const onSubmit = async (data) => {
    setSample(false);
    try {
      const response = await post("/auth/login", {
        email: data.Username,
        password: data.Password,
      });
      if (response.data.token) {
        toast({
          title: `Valid Credentials`,
          status: "success",
          position: "bottom-right",
          isClosable: true,
        });
        login(response.data.token);
      }
    } catch (error) {
      setSample(true);
      toast({
        title: `Invalid Username or Password`,
        status: "error",
        position: "bottom-right",
        isClosable: true,
      });
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-200 p-5">
      <div className="flex bg-white w-full md:w-1/4 p-3 justify-center border-2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="m-2 flex flex-col w-full"
        >
          <Box className="flex flex-col items-center">
            <Image src="/fleet.png" boxSize={"200px"} />
          </Box>
          <Text>Username</Text>
          <Input
            className="my-3"
            type="email"
            isInvalid={errors.Username || sample}
            color={(errors.Username || sample) && "tomato"}
            errorBorderColor="crimson"
            placeholder="Username"
            {...register("Username", {
              required: "User not found.",
              onChange: () => setSample(false),
            })}
          />
          <div className="h-10">
            {errors.Username && (
              <Text className=" text-red-500">{errors.Username.message}</Text>
            )}
          </div>
          <Text>Password</Text>
          <Input
            className="my-3"
            type="password"
            isInvalid={errors.Password || sample}
            color={(errors.Password || sample) && "tomato"}
            errorBorderColor="crimson"
            placeholder="Password"
            onChange={() => setSample(false)}
            {...register("Password", {
              required: "Password incorrect!.",
              onChange: () => setSample(false),
            })}
          />
          <div className="h-10">
            {errors.Password && (
              <Text className=" text-red-500">{errors.Password.message}</Text>
            )}
          </div>
          <button
            type="submit"
            className=" text-white bg-orange-500 hover:bg-orange-400 p-2 rounded-md"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
