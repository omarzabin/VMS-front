import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  TextInput
} from "react-native";
import SpatialInput from "../../Components/SpatialInput/SpatialInput";

import CustomButton from "../../Components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller, set } from "react-hook-form";
import { useState } from "react";
import { authApi, vehicleApi } from "../../../api/AxiosApi";

import { useAtom } from "jotai";
import {
  tokenAtom,
  isLoadingAtom,
  vehicleOwnerAtom,
  deviceIMEIAtom
} from "../../store/userStore";
import SpatialButton from "../../Components/SpatialButton/SpatialButton";

export default function SignInScreen({ navigation }) {
  const { height } = useWindowDimensions();
  const [unAuthMEssage, setUnAuthMessage] = useState();
  //using atom
  const [token, setToken] = useAtom(tokenAtom);
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);
  const [vehicleOwner, setVehicleOwner] = useAtom(vehicleOwnerAtom);
  const [deviceImEI, setDeviceIMEI] = useAtom(deviceIMEIAtom);

  const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const { control, handleSubmit, formState: { errors } } = useForm();

  const signIn = async data => {
    try {
      const owner = await authApi.auth({
        email: data.Email,
        password: data.Password
      });
      setVehicleOwner(owner.data);
      const deviceIMEI = await vehicleApi.getDeviseIMEI({
        ownerId: owner.data.ownerId
      });
      setDeviceIMEI(deviceIMEI.data);
      setToken("token");
      setIsLoading(true);
    } catch (error) {
      setToken(null);
      setIsLoading(true);
      setUnAuthMessage("Email or password is incorrect");
      console.log("error", JSON.stringify(error));
    }
  };

  return (
    <View style={styles.root}>
      <Image
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
        source={require("../../../assets/logo.png")}
      />

      <SpatialInput
        rules={{
          required: "Email is required",
          pattern: { value: EMAIL_REGEX, message: "Email invalid" }
        }}
        name={
          "Email" // setValue={setEmail}
        }
        placeholder="Email"
        control={control}
        secureTextEntry={false}
      />

      <SpatialInput
        rules={{ required: "Password is required" }}
        name={
          "Password" //setValue={setPassword}
        }
        placeholder="Password"
        control={control}
        secureTextEntry={true}
      />
      <Text style={{ color: "red", fontSize: 17 }}>
        {unAuthMEssage}
      </Text>

      <SpatialButton text="Sign In" onPress={handleSubmit(signIn)} />

      <SpatialButton
        text="Forget Password ?"
        onPress={() => navigation.push("ResetPassword")}
        type="Secondry"
      />

      <SpatialButton
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
  },
  text: {
    borderWidth: 1,
    width: 200,
    padding: 10
  }
});
