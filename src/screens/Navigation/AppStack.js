import { View, Text } from "react-native";
import React from "react";
import { DrawerContent } from "../DrawerContent/DrawerContent";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState, useEffect, useMemo } from "react";
import SignInScreen from "../SingInScreen/SingInScreen";
import SignUpScreen from "../SignUpScreen/SingUpScreen";
import ResetPassword from "../ResetPassword/ResetPassword";
import { AuthContext } from "../../context/AuthContext";
import HomeScreen from "../HomeScreen/HomeScreen";
import ProfileScreen from "../Profile/ProfileScreen";
import AlertsScreen from "../Alerts/AlertsScreen";
import VehiclesScreen from "../Vehicles/VehiclesScreen";
import RecordsScreen from "../Records/RecordsScreen";
import RecommendationsScreen from "../Recommendations/RecommendationsScreen";

const stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <AuthContext.Provider value={AuthContext}>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Vehicles" component={VehiclesScreen} />
        <Drawer.Screen name="Alerts" component={AlertsScreen} />
        <Drawer.Screen name="Records" component={RecordsScreen} />
        <Drawer.Screen
          name="Recommendations"
          component={RecommendationsScreen}
        />
      </Drawer.Navigator>
    </AuthContext.Provider>
  );
};

export default AppStack;
