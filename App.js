import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import SignInScreen from "./src/screens/SingInScreen/SingInScreen";
import SignUpScreen from "./src/screens/SignUpScreen/SingUpScreen";
import ResetPassword from "./src/screens/ResetPassword/ResetPassword";
import Navigation from "./src/screens/Navigation/Navigation";
import { DrawerContent } from "./src/screens/DrawerContent/DrawerContent";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#F9FBFC",
    marginBottom: 200,
    marginTop: 20
  }
});
