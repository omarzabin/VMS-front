import { StatusBar } from "expo-status-bar";
import { View, Text, ActivityIndicator } from "react-native";
import React, { useContext } from "react";

import { NavigationContainer } from "@react-navigation/native";

import EStyleSheet from "react-native-extended-stylesheet";
import { useAtom } from "jotai";
import {
  tokenAtom,
  isLoadingAtom,
  firstTimeAtom} from "./src/store/userStore";
import AuthStack from "./src/screens/Navigation/AuthStack";
import AppStack from "./src/screens/Navigation/AppStack";
import FirstTimeStack from "./src/screens/Navigation/FirstTimeStack";


export default function App() {
  
  const [token] = useAtom(tokenAtom);
  const [firstTime] = useAtom(firstTimeAtom);
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <ActivityIndicator
          size={"large"}
          style={{
            flex: 1
          }}
        />
        {setIsLoading(false)}
      </View>
    );
  } else {
  }
  return (
    
    <NavigationContainer>
      {token !== null && firstTime
        ? <FirstTimeStack />
        : token !== null && !firstTime ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

EStyleSheet.build(
  {
    // always call EStyleSheet.build() even if you don't use global variables!
  }
);
