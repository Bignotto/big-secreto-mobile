import React from "react";
import { NativeBaseProvider, Box, Center } from "native-base";

import AppLogo from "./assets/app-logo.svg";

export default function App() {
  return (
    <NativeBaseProvider>
      <Center flex={1} justifyContent={"center"} bgColor={"gray.800"}>
        <AppLogo />
      </Center>
    </NativeBaseProvider>
  );
}
