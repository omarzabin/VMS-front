import { View, Text, ActivityIndicator } from "react-native";
import React, { useContext } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { AuthContext } from "../../context/AuthContext";

const AppNav = () => {
  const { signUp, signOut, isLoading, userToken } = useContext(AuthContext);
  if (isLoading) {
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size={"large"} />
    </View>;
  }
  return (
    <NavigationContainer>
      {userToken !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNav;
