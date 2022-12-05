import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions
} from "react-native";
import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { useState, useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { authApi } from "../../../api/AxiosApi";
import axios from "axios";

import { AuthContext } from "../../context/AuthContext";

export default function SignInScreen({ navigation }) {
  const { signIn } = useContext(AuthContext);

  const { height } = useWindowDimensions();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigationHome = useNavigation();

  function OnSignInPressed() {
    navigationHome.navigate("HomeScreen", { screen: "HomeScreen" });
  }

  const getData = async () => {
    try {
      console.log("first");
      const res = await authApi.auth({
        email: "omar@gmail.com",
        password: "123"
      });

      //const res = await authApi.auth();
      console.log("res:", res);
      //await axios.get("https://192.168.1.4:7212/api/Authentication/test");
    } catch (error) {
      console.log("error", JSON.stringify(error));
    }
  };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <View style={styles.root}>
      <Image
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
        source={require("../../../assets/logo.png")}
      />

      <CustomInput
        placeholder="Email"
        value={Email}
        setValue={setEmail}
        secureTextEntry={false}
      />

      <CustomInput
        placeholder="Password"
        value={Password}
        setValue={setPassword}
        secureTextEntry={true}
      />

      <CustomButton
        text="Sign In"
        onPress={() => {
          signIn();
        }}
      />

      <CustomButton
        text="Forget Password ?"
        onPress={() => navigation.push("ResetPassword")}
        type="Secondry"
      />

      <CustomButton
        text="Don't have an Account? Create one"
        onPress={() => navigation.push("SignUpScreen")}
        type="Secondry"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
    flex: 1
  },

  logo: {
    width: "70%",
    maxHeight: 200,
    paddingBottom: 200,
    maxWidth: 300
  }
});
