import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function ResetPassword() {
  const [Email, setEmail] = useState("");
  const [NewPassword, setNewPassword] = useState("");
  const [ConfrimNewPassword, setConfrimNewPassword] = useState("");

  const navigation = useNavigation();

  function OnSignInPressed() {
    navigation.navigate("SignInScreen");
    //console.warn("Sign In");
  }
  function OnConfirmPressed() {
    //console.warn("Confirm");
  }

  const [ShouldShow, setshouldShow] = useState(false);

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Reset Your Password</Text>

      <CustomInput
        placeholder="Email"
        value={Email}
        setValue={setEmail}
        secureTextEntry={false}
      />

      <CustomButton
        text="Continue"
        onPress={() => setshouldShow(!ShouldShow)}
        type=""
      />

      {ShouldShow
        ? <CustomInput
            placeholder="New-Password"
            value={NewPassword}
            setValue={setNewPassword}
            secureTextEntry={true}
          />
        : null}
      {ShouldShow
        ? <CustomInput
            placeholder="Confrim-New-Password"
            value={ConfrimNewPassword}
            setValue={setConfrimNewPassword}
            secureTextEntry={true}
          />
        : null}
      {ShouldShow
        ? <CustomButton text="Confirm" onPress={OnSignInPressed} type="" />
        : null}

      <CustomButton
        text="Back To Sign in"
        onPress={OnSignInPressed}
        type="Third"
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

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "051C60",
    margin: 10,
    paddingTop: 40
  },
  policytext: {
    color: "gray",
    marginVertical: 10
  },

  link: {
    color: "#f4a460"
  }
});
