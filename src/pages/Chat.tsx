import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Center,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import ChatWrapper from "../components/ChatWrapper";
import { AnimatePresence, motion } from "framer-motion";
import { BsSend } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { handleNewInput } from "../features/chatSlice";
import { BrandIcon } from "../chakra";

export default () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const chatAnchor = useRef<HTMLDivElement>(null);

  const { chats } = useSelector((state: RootState) => state.chat);

  const handleNewRequest = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text) return;
    else dispatch(handleNewInput({ sender: "User", text }));

    setText("");

    setTimeout(() => {
      dispatch(
        handleNewInput({
          sender: "Bot",
          text: "The capital of Nigeria is Abuja, a planned city located in the central region of the country. It was officially declared as the capital of Nigeria on December 12, 1991, replacing Lagos which had been the capital since Nigeria gained independence in 1960. The decision to move the capital to Abuja was made in response to the need for a more central location that would be less susceptible to political and ethnic tensions, as well as to provide a fresh start for Nigeria after years of military rule. Abuja is home to many government offices, including the Presidential Villa, the National Assembly, and the Supreme Court of Nigeria. It is also a major business hub, with many multinational corporations having their headquarters in the city. One of the defining features of Abuja is its modern and well-planned layout, with wide roads, green spaces, and modern architecture. The city is divided into several districts, including the Central Business District, Wuse, Garki, Maitama, and Asokoro. Some of the notable landmarks in Abuja include the Aso Rock, which is a large rock formation that is a symbol of the city and the Presidential Villa, which is the official residence of the President of Nigeria. Abuja is also home to several museums and cultural centers, including the National Mosque, the National Christian Centre, and the Nigerian National Museum. These institutions showcase the rich history and diverse cultures of Nigeria. Overall, Abuja is an important political, economic, and cultural center in Nigeria and is a fascinating place to visit for those interested in the country's history and development.",
        })
      );
    }, 1000);
  };

  useEffect(() => {
    chatAnchor.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats]);

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
              h={{ base: "calc(100vh - 7.5rem)", md: "calc(100vh - 7rem)" }}
              overflow="auto"
              w="100%"
            >
              {[
                chats.map(
                  (
                    { sender, text }: ChatCard,
                    index: React.Key | null | undefined
                  ) => {
                    return <ChatCard key={index} sender={sender} text={text} />;
                  }
                ),
              ]}
              <Box ref={chatAnchor} />
            </Box>
            <VStack
              borderTopWidth={1}
              borderColor="blackAlpha.300"
              h={{ base: "7.5rem", md: "6rem" }}
              w="100%"
              px={3}
              pt={1}
              spacing={2}
              bg={{ base: "brand.light", md: "transparent" }}
            >
              <form style={{ width: "100%" }} onSubmit={handleNewRequest}>
                <InputGroup
                  w={{ base: "100%", md: "75%" }}
                  size="lg"
                  mx="auto"
                  borderColor="blackAlpha.500"
                >
                  <Input
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                  />
                  <InputRightElement color="blackAlpha.500">
                    <IconButton
                      colorScheme="none"
                      color="inherit"
                      aria-label="Submit button"
                      type="submit"
                    >
                      <BsSend />
                    </IconButton>
                  </InputRightElement>
                </InputGroup>
              </form>
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

const ChatCard = ({ sender, text }: { sender: string; text: string }) => {
  return (
    <Box
      w="100%"
      py={6}
      bg={sender === "Bot" ? "brand.light" : "transparent"}
      px={3}
    >
      <HStack
        w={{ base: "100%", md: "40rem" }}
        mx="auto"
        alignItems="flex-start"
        spacing={{ base: 2, md: 5 }}
      >
        {sender === "Bot" ? (
          <Center p={2} bg="green.500">
            <BrandIcon color="white" />
          </Center>
        ) : (
          <Image w="2rem" h="2rem" src="https://bit.ly/code-beast" />
        )}
        <Text>{text}</Text>
      </HStack>
    </Box>
  );
};
