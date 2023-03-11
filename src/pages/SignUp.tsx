import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  Spacer,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { BrandIcon } from "../chakra";
import { FcGoogle } from "react-icons/fc";
import { BsMicrosoft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default () => {
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  const navigate = useNavigate();

  return (
    <VStack
      h="100vh"
      w={{ base: "100%", md: "sm" }}
      mx="auto"
      spacing={20}
      pt={{ base: 12, md: 8 }}
      px={5}
    >
      {!isMobile ? <BrandIcon boxSize={34} /> : null}
      <VStack w="100%" spacing={{ base: 5, md: 3 }}>
        <Heading fontSize="2rem" fontWeight="600">
          Create your account
        </Heading>
        <Text textAlign="center" py={2}>
          Please note that phone verification is required for signup. Your
          number will only be used to verify your identity for security
          purposes.
        </Text>
        <FormControl>
          <Input placeholder="Email address" size="lg" />
        </FormControl>
        <Button
          variant="brand-green"
          w="100%"
          borderRadius={2}
          size="lg"
          fontWeight="500"
        >
          Continue
        </Button>
        <Box>
          Already have an account?{" "}
          <Button
            color="brand.green"
            variant="link"
            fontWeight="500"
            onClick={() => navigate("/auth/login")}
          >
            Log in
          </Button>
        </Box>
        <Box pos="relative" w="100%">
          <Box
            pos="absolute"
            h="1px"
            bg="blackAlpha.500"
            w="100%"
            top={0}
            bottom={0}
            m="auto"
          />
          <Text
            mx="auto"
            px={4}
            bg="white"
            zIndex={5}
            pos="relative"
            w="fit-content"
          >
            OR
          </Text>
        </Box>
        <Button
          w="100%"
          size="lg"
          variant="outline"
          fontWeight="500"
          leftIcon={<FcGoogle />}
        >
          <Text px={3} fontSize="1rem" w="100%" textAlign="left">
            Continue with Google
          </Text>
        </Button>
        <Button
          w="100%"
          size="lg"
          variant="outline"
          fontWeight="500"
          leftIcon={<BsMicrosoft />}
        >
          <Text px={3} fontSize="1rem" w="100%" textAlign="left">
            Continue with Microsoft Account
          </Text>
        </Button>
      </VStack>
    </VStack>
  );
};
