import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem
} from "@react-navigation/drawer";
import EStyleSheet from "react-native-extended-stylesheet";
import AppNav from "./src/screens/Navigation/AppNav";

export default function App() {
  return <AppNav style={{ backgroundColor: "#f1f3f5" }} />;
}

EStyleSheet.build(
  {
    // always call EStyleSheet.build() even if you don't use global variables!
  }
);
