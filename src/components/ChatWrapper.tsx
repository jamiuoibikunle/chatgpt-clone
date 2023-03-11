import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Spacer,
  Text,
  useDisclosure,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiLogOut, FiMenu } from "react-icons/fi";
import { BsBoxArrowUpRight, BsMoon, BsPerson, BsPlus } from "react-icons/bs";
import { useRef } from "react";

export default ({ children }: Children) => {
  const [desktop] = useMediaQuery("(min-width: 600px)");

  const { isOpen, onOpen, onClose } = useDisclosure();

  return desktop ? (
    <Flex>
      <VStack h="100vh" w="18rem" bg="brand.dark" spacing={3} p={3}>
        <Button
          w="100%"
          leftIcon={<BsPlus />}
          variant="outline"
          size="lg"
          colorScheme="none"
          color="white"
          borderColor="whiteAlpha.400"
        >
          <Text w="100%" fontSize="1rem" fontWeight="500" textAlign="left">
            New chat
          </Text>
        </Button>
        <Spacer />
        <Divider />
        <ChatButton
          action={() => null}
          icon={<RiDeleteBinLine size={20} />}
          title="Clear conversations"
        />
        <ChatButton
          action={() => null}
          icon={<BsPerson size={20} />}
          right={
            <Box
              bg="yellow.400"
              color="black"
              fontSize="0.9rem"
              fontWeight="500"
              px={2}
              borderRadius={5}
            >
              NEW
            </Box>
          }
          title="Upgrade to Plus"
        />
        <ChatButton action={() => null} icon={<BsMoon />} title="Dark mode" />
        <ChatButton
          action={() => null}
          icon={<BsBoxArrowUpRight size={20} />}
          title="Updates & FAQ"
        />
        <ChatButton
          action={() => null}
          icon={<FiLogOut size={20} />}
          title="Log out"
        />
      </VStack>
      <Box>{children}</Box>
    </Flex>
  ) : (
    <Box h="100vh">
      <HStack
        h="3rem"
        w="100%"
        bg="brand.dark"
        justifyContent="space-between"
        color="whiteAlpha.800"
      >
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent bg="brand.dark" pos="relative">
            <DrawerCloseButton
              color="white"
              pos="absolute"
              right="-2.5rem"
              top="1rem"
            />
            <DrawerBody>
              <VStack h="100%">
                <Button
                  w="100%"
                  leftIcon={<BsPlus />}
                  variant="outline"
                  size="lg"
                  colorScheme="none"
                  color="white"
                  borderColor="whiteAlpha.400"
                >
                  <Text
                    w="100%"
                    fontSize="1rem"
                    fontWeight="500"
                    textAlign="left"
                  >
                    New chat
                  </Text>
                </Button>
                <Spacer />
                <Divider />
                <ChatButton
                  action={() => null}
                  icon={<RiDeleteBinLine size={20} />}
                  title="Clear conversations"
                />
                <ChatButton
                  action={() => null}
                  icon={<BsPerson size={20} />}
                  right={
                    <Box
                      bg="yellow.400"
                      color="black"
                      fontSize="0.9rem"
                      fontWeight="500"
                      px={2}
                      borderRadius={5}
                    >
                      NEW
                    </Box>
                  }
                  title="Upgrade to Plus"
                />
                <ChatButton
                  action={() => null}
                  icon={<BsMoon />}
                  title="Dark mode"
                />
                <ChatButton
                  action={() => null}
                  icon={<BsBoxArrowUpRight size={20} />}
                  title="Updates & FAQ"
                />
                <ChatButton
                  action={() => null}
                  icon={<FiLogOut size={20} />}
                  title="Log out"
                />
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <IconButton
          colorScheme="none"
          color="whiteAlpha.800"
          aria-label="Menu button"
          icon={<FiMenu size={20} />}
          onClick={onOpen}
        />
        <Text>New chat</Text>
        <IconButton
          colorScheme="none"
          color="whiteAlpha.800"
          aria-label="New chat"
          icon={<BsPlus size={20} />}
        />
      </HStack>
      <Box h="calc(100% - 3rem)">{children}</Box>
    </Box>
  );
};

const ChatButton = ({ action, icon, right, title }: ChatButton) => {
  return (
    <Button
      w="100%"
      leftIcon={icon}
      onClick={action}
      colorScheme="none"
      color="white"
    >
      <HStack w="100%">
        <Text w="100%" textAlign="left" fontWeight="500" color="whiteAlpha.800">
          {title}
        </Text>
        {right}
      </HStack>
    </Button>
  );
};
