import React from "react";
import { Box } from "@chakra-ui/react";
import ChatWrapper from "../components/ChatWrapper";
import { AnimatePresence, motion } from "framer-motion";

export default () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ChatWrapper>
          <Box>Hi</Box>
        </ChatWrapper>
      </motion.div>
    </AnimatePresence>
  );
};
