import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useAtom } from "jotai";
import { tokenAtom, isLoadingAtom, firstTimeAtom } from "../../store/userStore";
import { registerApi } from "../../../api/AxiosApi";

export default function SignUpScreen() {
  const navigation = useNavigation();

  const [Email, setEmail] = useState();
  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();
  const [Password, setPassword] = useState();
  const [ConfirmPassword, setConfirmPassword] = useState();

  const [token, setToken] = useAtom(tokenAtom);
  const [firstTime, setFirstTime] = useAtom(firstTimeAtom);
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);

  const setUserData = async () => {
    try {
      const res = await registerApi.register({
        firstName: FirstName,
        lastName: LastName,
        email: Email,
        password: Password
      });
      setToken("token");
      setIsLoading(true);
      setFirstTime(true);

      console.log("---------1---------");

      console.log("token atom: ", token);
      console.log("FirstTime atom: ", firstTime);
      console.log("is loading atom: ", isLoading);
      console.log("res:", res.data);
    } catch (error) {
      setToken(null);
      setIsLoading(true);
      setFirstTime(false);
      console.log("---------2---------");
      console.log("token atom: ", token);
      console.log("FirstTime atom: ", firstTime);
      console.log("is loading atom: ", isLoading);
      console.log("error", JSON.stringify(error));
    }
  };

  function SignUp() {
    setUserData();
  }

  function SignIn() {
    navigation.navigate("SignInScreen");
  }
  function OnTermsOfUserPressed() {
    //console.warn("Term of use");
  }
  function OnPrivacyPolicyPresses() {
    //console.warn("Privacy & Policy");
  }

  return (
    <View style={styles.root}>
      <CustomInput
        placeholder="FirstName"
        value={FirstName}
        setValue={setFirstName}
        secureTextEntry={false}
      />
      <CustomInput
        placeholder="LastName"
        value={LastName}
        setValue={setLastName}
        secureTextEntry={false}
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
      <CustomInput
        placeholder="Confirm Password"
        value={ConfirmPassword}
        setValue={setConfirmPassword}
        secureTextEntry={true}
      />
      <CustomButton text="Register" onPress={SignUp} type="" />
      <CustomButton
        text="Have an Account? Sign-In"
        onPress={SignIn}
        type="Secondry"
      />
      <Text style={styles.policytext}>
        By Registering,You confirm that you accept our{" "}
        <Text style={styles.link} onPress={OnTermsOfUserPressed}>
          Terms of Use
        </Text>{" "}
        and{" "}
        <Text style={styles.link} onPress={OnPrivacyPolicyPresses}>
          Privacy Policy
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
    flex: 1
  },

  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "051C60",
    margin: 5,
    paddingTop: 20
  },
  policytext: {
    color: "gray",
    marginVertical: 10
  },

  link: {
    color: "#f4a460"
  }
});
