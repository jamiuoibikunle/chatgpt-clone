import React from "react";
import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BrandIcon } from "../chakra";
import { FcGoogle } from "react-icons/fc";
import { BsMicrosoft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export default () => {
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <VStack
          h="100vh"
          w={{ base: "100%", md: "sm" }}
          mx="auto"
          spacing={20}
          pt={16}
          px={5}
        >
          <BrandIcon display={{ base: "none", md: "block" }} boxSize={34} />
          <VStack w="100%" spacing={{ base: 5, md: 3 }}>
            <Heading fontSize="1.5rem" fontWeight="600" py={5}>
              Welcome back
            </Heading>
            <FormControl>
              <Input placeholder="Email address" size="lg" />
            </FormControl>
            <Button
              variant="brand-green"
              w="100%"
              borderRadius={2}
              size="lg"
              fontWeight="500"
              onClick={() => navigate("/chat")}
            >
              Continue
            </Button>
            <Box>
              Don't have an account?{" "}
              <Button
                color="brand.green"
                variant="link"
                fontWeight="500"
                onClick={() => navigate("/auth/signup")}
              >
                Sign up
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
              <Text
                px={3}
                fontSize="1rem"
                w="100%"
                textAlign="left"
                onClick={() => navigate("/chat")}
              >
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
              <Text
                px={3}
                fontSize="1rem"
                w="100%"
                textAlign="left"
                onClick={() => navigate("/chat")}
              >
                Continue with Microsoft Account
              </Text>
            </Button>
          </VStack>
        </VStack>
      </motion.div>
    </AnimatePresence>
  );
};
