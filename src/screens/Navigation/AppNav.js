import { View, Text, ActivityIndicator } from "react-native";
import React, { useContext } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthStack from "./AuthStack";
import AppStack from "./AppStack";

import { useAtom } from "jotai";
import { tokenAtom, isLoadingAtom } from "../../store/userStore";

const AppNav = () => {
  const [token] = useAtom(tokenAtom);
  const [isLoading] = useAtom(isLoadingAtom);

  if (isLoading == true) {
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black"
      }}
    >
      <ActivityIndicator
        size={"large"}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black"
        }}
      />
    </View>;
  }

  return (
    <NavigationContainer>
      {token !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNav;
