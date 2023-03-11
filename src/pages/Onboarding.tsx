import { Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BrandIcon } from "../chakra";
import { motion } from "framer-motion";

export default () => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setStep(2);
    }, 2500);

    setTimeout(() => {
      window.location.replace("/auth");
    }, 4000);
  }, []);

  return (
    <VStack h="100vh" w="100%" justifyContent="center" spacing={8} color="gray">
      <BrandIcon boxSize={34} />
      {step === 1 ? (
        <motion.div>
          <Text>Please stand by, while we are checking your browser...</Text>
        </motion.div>
      ) : null}
    </VStack>
  );
};
