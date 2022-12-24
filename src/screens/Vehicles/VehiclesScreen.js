import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import YourVehiclesScreen from "./YourVehiclesScreen";
import AddNewVehiclesScreen from "./AddNewVehicleScreen";

export default function VehiclesScreen() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Your Vehicles" component={YourVehiclesScreen} />
      <Tab.Screen name="Add New Vehicles" component={AddNewVehiclesScreen} />
    </Tab.Navigator>
  );
}
