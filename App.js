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
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import ProfileScreen from "./src/screens/Profile/ProfileScreen";
import AlertsScreen from "./src/screens/Alerts/AlertsScreen";
import VehiclesScreen from "./src/screens/Vehicles/VehiclesScreen";
import RecordsScreen from "./src/screens/Records/RecordsScreen";
import RecommendationsScreen from "./src/screens/Recommendations/RecommendationsScreen";
import { DrawerContent } from "./src/screens/DrawerContent/DrawerContent";

const Drawer = createDrawerNavigator();

export default function App() {
  if (false) return <Navigation />;
  else {
    return (
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
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
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#F9FBFC",
    marginBottom: 200,
    marginTop: 20
  }
});
