import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { BsBoxArrowUpRight, BsMoon, BsPerson, BsPlus } from "react-icons/bs";

export default ({ children }: Children) => {
  return (
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
