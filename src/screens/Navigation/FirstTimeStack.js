import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddNewVehiclesScreen from "../Vehicles/AddNewVehicleScreen";
import SignInScreen from "../SingInScreen/SingInScreen";
import AppStack from "./AppStack";
import HomeScreen from "../HomeScreen/HomeScreen";

const Stack = createNativeStackNavigator();

const FirstTimeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AddNewVehiclesScreen"
        component={AddNewVehiclesScreen}
        options={{
          title: "Add New Vehicle"
        }}
      />
      <Stack.Screen
        name="AppStack"
        component={AppStack}
        options={{ title: "Home" }}
      />
    </Stack.Navigator>
  );
};

export default FirstTimeStack;
