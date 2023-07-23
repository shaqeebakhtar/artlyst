"use client";
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  ViewIcon,
  ViewOffIcon,
  Button,
  Icon,
  FormControl,
  FormLabel,
  Text,
  Link,
} from "@/app/lib/chakraui";
// import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div className="grid place-items-center h-screen">
      <Box
        bg="white"
        p={{ base: "6", md: "8" }}
        borderRadius={12}
        shadow="sm"
        width="100%"
        maxWidth="25rem"
        m="0 1.5em"
      >
        <h1 className="font-black text-xl md:text-2xl text-center mb-8">
          Login to your Artlyst account
        </h1>
        <FormControl mt="4">
          <FormLabel fontSize="12" color="gray.500">
            Email
          </FormLabel>
          <Input placeholder="example@domain.com" type="email" />
        </FormControl>
        <FormControl mt="4">
          <FormLabel fontSize="12" color="gray.500">
            Password
          </FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5em"
              type={show ? "text" : "password"}
              placeholder="Enter password"
            />
            <InputRightElement width="3.5rem">
              <Button h="1.75rem" w="1.5rem" onClick={handleClick}>
                {show ? <Icon as={ViewOffIcon} /> : <Icon as={ViewIcon} />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Link
          href="/"
          fontSize="14"
          className="inline-block text-[#4567E0] mt-2 text-right w-full font-semibold"
        >
          Forgot Password?
        </Link>
        <button className="bg-[#4567E0] hover:bg-[#2f50cb] text-white font-bold p-3 w-full rounded-[0.5rem] mt-4 shadow-sm">
          Login
        </button>
        <Text fontSize="14" mt={4} textAlign="center">
          {"Don't"} have an account?{" "}
          <Link href="/auth/signup" className="text-[#4567E0] font-semibold">
            Register Here
          </Link>
        </Text>
      </Box>
    </div>
  );
};

export default Login;
