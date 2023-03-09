import { Image, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

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
      <Image src="/icon.svg" />
      {step === 1 ? (
        <Text>Please stand by, while we are checking your browser...</Text>
      ) : null}
    </VStack>
  );
};
