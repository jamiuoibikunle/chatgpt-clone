import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./chakra";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Onboarding from "./pages/Onboarding";
import Auth from "./pages/Auth";

export default () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};
