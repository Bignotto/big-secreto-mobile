import React from "react";
import { NativeBaseProvider, Text, Center } from "native-base";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { RobotoMono_500Medium } from "@expo-google-fonts/roboto-mono";
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";

import { THEME } from "./src/styles/theme";

import AppLogo from "./assets/app-logo.svg";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    RobotoMono_500Medium,
    Pacifico_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeBaseProvider theme={THEME}>
      <Center flex={1} justifyContent={"center"} bgColor={"gray.900"}>
        <AppLogo />
        <Text fontFamily="logo" fontSize="7xl" color="white">
          Amigo Secreto
        </Text>
      </Center>
    </NativeBaseProvider>
  );
}
