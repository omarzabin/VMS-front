import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import SpatialInput from "../../Components/SpatialInput/SpatialInput";
import SpatialButton from "../../Components/CustomButton/CustomButton";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useAtom } from "jotai";
import {
  tokenAtom,
  isLoadingAtom,
  firstTimeAtom,
  vehicleOwnerAtom
} from "../../store/userStore";
import { registerApi } from "../../../api/AxiosApi";
import { useForm } from "react-hook-form";
import { ScrollView } from "react-native-gesture-handler";

export default function SignUpScreen() {
  const { control, handleSubmit, watch } = useForm();
  const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const Name_valid = /^[a-zA-Z]+(([',][a-zA-Z ])?[a-zA-Z]*)*$/;
  const passwd_confirm = watch("Password");

  const navigation = useNavigation();

  // const [Email, setEmail] = useState();
  // const [FirstName, setFirstName] = useState();
  // const [LastName, setLastName] = useState();
  // const [Password, setPassword] = useState();
  // const [ConfirmPassword, setConfirmPassword] = useState();

  const [token, setToken] = useAtom(tokenAtom);
  const [firstTime, setFirstTime] = useAtom(firstTimeAtom);
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);

  const [emailError, setEmailError] = useState("");
  const [vehicleOwner, setVehicleOwner] = useAtom(vehicleOwnerAtom);

  const signUp = async data => {
    try {
      const res = await registerApi.register({
        firstName: data.FirstName,
        lastName: data.LastName,
        email: data.Email,
        password: data.Password
      });
      setToken("token");
      setIsLoading(true);
      setFirstTime(true);

      setVehicleOwner({
        ownerId: res.data,
        firstName: data.FirstName,
        lastName: data.LastName,
        email: data.Email,
        password: data.Password,
        vehicleId: 0
      });
    } catch (error) {
      setToken(null);
      setIsLoading(true);
      setFirstTime(false);
      setEmailError("Email is already registered !");
      console.log("error", JSON.stringify(error));
    }
  };

  function SignIn() {
    navigation.navigate("SignInScreen");
  }
  function OnTermsOfUserPressed() {
    console.warn("The password must be at least 8 characters ");
  }
  function OnPrivacyPolicyPresses() {
    console.warn("Privacy & Policy");
  }

  return (
    <ScrollView>
      <View style={styles.root}>
        <SpatialInput
          rules={{
            required: "First Name is required",
            minLength: {
              value: 3,
              message: "First Name should be Minimum 3 characters Long"
            },
            maxLength: {
              value: 20,
              message: "First Name should be Max 12 characters long"
            },
            pattern: {
              value: Name_valid,
              message:
                "First Name should not have special characters or numbers"
            }
          }}
          name={"FirstName"}
          control={control}
          placeholder="First Name"
          secureTextEntry={false}
        />

        <SpatialInput
          rules={{
            required: "Last Name is required",
            minLength: {
              value: 3,
              message: "last name should be Minimum 3 characters Long"
            },
            maxLength: {
              value: 20,
              message: "last name should be Max 12 characters long"
            },
            pattern: {
              value: Name_valid,
              message: "last name should not have special characters or numbers"
            }
          }}
          name={"LastName"}
          control={control}
          placeholder={"LastName"}
          secureTextEntry={false}
        />

        <SpatialInput
          rules={{
            required: "Email is required",
            pattern: { value: EMAIL_REGEX, message: "Email invalid" }
          }}
          name={"Email"}
          control={control}
          placeholder="Email"
          secureTextEntry={false}
        />

        <SpatialInput
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be Minimum 8 characters Long"
            }
          }}
          name={"Password"}
          control={control}
          placeholder="Password"
          secureTextEntry={true}
        />

        <SpatialInput
          rules={{
            required: "Confirm Pass is required",
            validate: value => value === passwd_confirm || "password not match"
          }}
          name={"ConfirmPassword"}
          control={control}
          placeholder="Confirm Password"
          secureTextEntry={true}
        />
        <Text style={{ color: "red", fontSize: 17 }}>
          {emailError}
        </Text>
        <SpatialButton text="Register" onPress={handleSubmit(signUp)} type="" />

        <SpatialButton
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    paddingHorizontal: 5,
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
