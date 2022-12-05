import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState, useEffect, useMemo } from "react";
import SignInScreen from "../SingInScreen/SingInScreen";
import SignUpScreen from "../SignUpScreen/SingUpScreen";
import ResetPassword from "../ResetPassword/ResetPassword";

const stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{ title: "Sign In" }}
      />
      <stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ title: "Create Account" }}
      />
      <stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{ title: "Reset Password" }}
      />
      {/* <stack.Screen name="HomeScreen" component={DrawerScreen} /> */}
    </stack.Navigator>
  );
};

export default AuthStack;
