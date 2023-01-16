import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AlertsScreen from "../Alerts/AlertsScreen";
import AlertDetails from "../Alerts/AlertDetails";
const stack = createNativeStackNavigator();

export const AlertsStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="Alerts"
        component={AlertsScreen}
        options={{ title: "Alerts" }}
      />
      <stack.Screen
        name="Alert Details"
        component={AlertDetails}
        options={{ title: "Create Account" }}
      />
    </stack.Navigator>
  );
};

export default AlertsStack;
