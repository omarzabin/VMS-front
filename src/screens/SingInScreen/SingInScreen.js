import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions
} from "react-native";
import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { authApi } from "../../../api/AxiosApi";
import axios from "axios";

export default function SignInScreen() {
  const { height } = useWindowDimensions();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigation = useNavigation();

  function OnSignInPressed() {
    navigation.navigate("HomeScreen");
  }
  function OnForgetPassword() {
    navigation.navigate("ResetPassword");
  }
  function OnSignUpPressed() {
    navigation.navigate("SignUpScreen");
  }

  const getData = async () => {
    try {
      /*console.log("first");
      const res = await authApi.auth({
        email: "omar@gmail.com",
        password: "123"
      });*/

      const res = await authApi.auth();
      console.log("res:", res);
      //await axios.get("https://192.168.1.4:7212/api/Authentication/test");
    } catch (error) {
      console.log("error", JSON.stringify(error));
    }
  };

  useEffect(() => {
    getData();
  }, []);

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

      <CustomButton text="Sign In" onPress={OnSignInPressed} />

      <CustomButton
        text="Forget Password ?"
        onPress={OnForgetPassword}
        type="Secondry"
      />

      <CustomButton
        text="Don't have an Account? Create one"
        onPress={OnSignUpPressed}
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
