import { Button, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";

export default () => {
  return (
    <VStack h="100vh" w="100%" justifyContent="center" spacing={3}>
      <Image src="/icon.svg" />
      <Heading fontSize="1rem" fontWeight="500">
        Welcome to ChatGPT
      </Heading>
      <Text>Log in with your OpenAI account to continue</Text>
      <HStack>
        <Button fontWeight="500" colorScheme="green">
          Log in
        </Button>
        <Button fontWeight="500" colorScheme="green">
          Sign up
        </Button>
      </HStack>
    </VStack>
  );
};
