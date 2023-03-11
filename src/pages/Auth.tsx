import React from "react";
import { Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { BrandIcon } from "../chakra";

export default () => {
  const navigate = useNavigate();

  return (
    <VStack h="100vh" w="100%" justifyContent="center" spacing={3}>
      <BrandIcon boxSize={34} />
      <Heading fontSize="1rem" fontWeight="500">
        Welcome to ChatGPT
      </Heading>
      <Text>Log in with your OpenAI account to continue</Text>
      <HStack>
        <Button
          fontWeight="500"
          colorScheme="green"
          onClick={() => navigate("/auth/login")}
        >
          Log in
        </Button>
        <Button
          fontWeight="500"
          colorScheme="green"
          onClick={() => navigate("/auth/signup")}
        >
          Sign up
        </Button>
      </HStack>
    </VStack>
  );
};
