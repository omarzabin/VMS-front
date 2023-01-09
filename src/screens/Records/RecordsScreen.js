import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ViewRecords from "./AddRecordsScreen";
import AddRecordsScreen from "./ViewRecords";

export default function RecordsScreen() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Your Vehicles" component={AddRecordsScreen} />
      <Tab.Screen name="Add New Vehicles" component={ViewRecords} />
    </Tab.Navigator>
  );
}
