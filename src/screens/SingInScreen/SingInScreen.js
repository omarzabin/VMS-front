import { StyleSheet, View, Image, useWindowDimensions } from "react-native";
import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { useState } from "react";
import { authApi } from "../../../api/AxiosApi";

import { useAtom } from "jotai";
import { tokenAtom, isLoadingAtom } from "../../store/userStore";

export default function SignInScreen({ navigation }) {
  const { height } = useWindowDimensions();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  //using atom
  const [token, setToken] = useAtom(tokenAtom);
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);

  const getUserData = async (Email, Password) => {
    try {
      const res = await authApi.auth({
        email: Email,
        password: Password
      });

      setToken("token");
      setIsLoading(false);

      console.log("---------1---------");

      console.log("token atom: ", token);
      console.log("is loading atom: ", isLoading);
      console.log("res:", res.data);
    } catch (error) {
      setToken(null);
      setIsLoading(true);
      console.log("---------2---------");
      console.warn("Email or Password are Unvalued");
      console.log("token atom: ", token);
      console.log("is loading atom: ", isLoading);
      console.log("error", JSON.stringify(error));
    }
  };

  function SignIn() {
    getUserData(Email, Password);
  }

  return (
    <View style={styles.root}>
      <Image
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
        source={require("../../../assets/logo.png")}
      />
      <View />

      <View>
        <View>
          <CustomInput
            placeholder="Email"
            value={Email}
            setValue={setEmail}
            secureTextEntry={false}
          />
        </View>

        <View>
          <CustomInput
            placeholder="Password"
            value={Password}
            setValue={setPassword}
            secureTextEntry={true}
          />
        </View>

        <View>
          <CustomButton text="Sign In" onPress={SignIn} />

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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 20,
    flex: 1
  },

  logo: {
    alignSelf: "center",
    width: "70%",
    maxHeight: 200,
    paddingBottom: 200,
    maxWidth: 300
  },
  textFailed: {
    alignSelf: "flex-end",
    color: "red"
  }
});
