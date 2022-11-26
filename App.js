import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import SignInScreen from "./src/SingInScreen/SingInScreen";
import SignUpScreen from "./src/SignUpScreen";
import ResetPassword from "./src/ResetPassword/ResetPassword";
import Navigation from "./src/Navigation/Navigation";

export default function App() {
  return (
    <View style={styles.main}>
      <Navigation />
    </View>
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
