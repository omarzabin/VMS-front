import React from "react";
import { Text } from "react-native-paper";
import { DrawerContent } from "../DrawerContent/DrawerContent";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../SingInScreen/SingInScreen";
import HomeScreen from "../HomeScreen/HomeScreen";
import ProfileScreen from "../Profile/ProfileScreen";
import AlertsScreen from "../Alerts/AlertsScreen";
import VehiclesScreen from "../Vehicles/VehiclesScreen";
import RecordsScreen from "../Records/RecordsScreen";
import RecommendationsScreen from "../Recommendations/RecommendationsScreen";
import AddNewVehiclesScreen from "../Vehicles/AddNewVehicleScreen";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Vehicles" component={VehiclesScreen} />
      <Drawer.Screen name="Alerts" component={AlertsScreen} />
      <Drawer.Screen name="Records" component={RecordsScreen} />
      <Drawer.Screen name="Recommendations" component={RecommendationsScreen} />
      <Drawer.Screen name="SignInScreen" component={SignInScreen} />
    </Drawer.Navigator>
  );
};

export default AppStack;
