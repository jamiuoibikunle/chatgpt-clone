import React from "react";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import ChatWrapper from "../components/ChatWrapper";
import { AnimatePresence, motion } from "framer-motion";
import { BsSend } from "react-icons/bs";

export default () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ChatWrapper>
          <VStack h="100%">
            <Box
              h={{ base: "calc(100% - 7.5rem)", md: "calc(100% - 6rem)" }}
            ></Box>
            <VStack
              w="100%"
              h={{ base: "7.5rem", md: "6rem" }}
              spacing={2}
              px={3}
            >
              <InputGroup
                w={{ base: "100%", md: "75%" }}
                size="lg"
                borderColor="blackAlpha.500"
              >
                <Input />
                <InputRightElement color="blackAlpha.500">
                  <BsSend />
                </InputRightElement>
              </InputGroup>
              <Text textAlign="center" fontSize=".8rem" color="blackAlpha.700">
                <Button
                  variant="link"
                  fontSize="inherit"
                  fontWeight="inherit"
                  color="inherit"
                  textDecor="underline"
                >
                  ChatGPT Feb 13 Version.
                </Button>{" "}
                Free Research Preview. Our goal is to make AI systems more
                natural and safe to interact with. Your feedback will help us
                improve.
              </Text>
            </VStack>
          </VStack>
        </ChatWrapper>
      </motion.div>
    </AnimatePresence>
  );
};
