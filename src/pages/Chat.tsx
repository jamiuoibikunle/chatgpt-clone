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
          text: "Lorem ipsum dolor sit amet, ancillae perpetua eum et, nominavi hendrerit assentior cu nec, quo percipit dissentias in. Nam civibus consequat ut, alia invidunt molestiae mei no, vix congue verterem eu. Est melius aliquam ex, his eu case luptatum interpretaris. Luptatum laboramus usu id, ut vel alii omnis. Pri ne graece iudicabit, cu vidit laoreet ius. Eum eu quis fugit, offendit voluptua ad sit, ei illum soleat eos. Sint soleat bonorum mei at, his ad ocurreret accusamus dissentiet. Ne vix putent aliquid denique, te ubique conclusionemque quo. Nobis consul vituperatoribus ius ne, nec dicam euismod voluptua ea. Viris eleifend suscipiantur eam cu. Aperiam eloquentiam mel eu. Cu pro maiestatis cotidieque, ne elit expetenda erroribus eam. Cu mei alia officiis, agam verear oblique in sea. At utamur minimum scriptorem pri. Ad pri alii interesset suscipiantur, ut mel erat viderer persius. Ei eum graeco convenire molestiae, veniam virtute iuvaret no mel. Qui quando admodum perfecto in, qui malis albucius democritum ei. Cum ex tempor ridens tamquam, case deseruisse accommodare cu cum. Nulla mazim deseruisse sea no, eros sale oportere sed ea, utamur necessitatibus et duo. Ne vim invenire vituperatoribus, inani accusata mel eu. Vis cetero mandamus vulputate ne, labore omittam singulis ea nec, at mollis volutpat tincidunt qui. Ea inermis molestie iracundia usu, adipisci platonem pri no. Id has labitur constituto, ullum legendos elaboraret in vim. Sed essent docendi id, facer saepe commodo sea ad. Ius eu audiam vidisse, mei discere qualisque moderatius id, ne vel nusquam maiestatis. Id quo ridens omittantur referrentur, ad pri reque congue sapientem. Ut illum mazim sea. Ut sed civibus ocurreret, te maluisset efficiantur eum.",
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
