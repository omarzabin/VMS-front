import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { useState, useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { authApi } from "../../../api/AxiosApi";
import axios from "axios";

import { AuthContext } from "../../context/AuthContext";
import { TextInput } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { useAtom } from "jotai";
import { testAtom, userAtom } from "../../store/userStore";

export default function SignInScreen({ navigation }) {
  //TESTING AXIOS
  /*const getDataUsingAsyncAwaitGetCall = async () => {
    try {
      const response = await axios.get(
        "http://1https://localhost:49159//api/authentication/test/"
      );
      alert(JSON.stringify(response.data));
    } catch (error) {
      // handle error
      alert(error.message);
    }
  };*/

  const { signIn } = useContext(AuthContext);

  const { height } = useWindowDimensions();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  //const navigationHome = useNavigation();

  //using atom
  const [user, setUser] = useAtom(userAtom);
  const [derived, set] = useAtom(testAtom);

  const handleCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  console.log("atom1: ", user);
  console.log("atom2: ", derived);
  set(1234);
  console.log("atom3: ", derived);

  // const getData = async () => {
  //   try {
  //     console.log("first");
  //     const res = await authApi.auth({
  //       email: Email,
  //       password: Password
  //     });

  //     console.log("res:", res.data.firsName);
  //     // if(res.request =="401" || res.request=="404")
  //     // {

  //     // }
  //   } catch (error) {
  //     console.log("error", JSON.stringify(error));
  //     console.log(error);
  //   }
  // };

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
            value={user}
            setValue={setEmail}
            secureTextEntry={false}
            // onChangeText={text => {
            //   handleCheckEmail(text);
            // }}
          />

          {checkValidEmail
            ? <Text style={styles.textFailed}>Wrong formatted email</Text>
            : <Text style={styles.textFailed}> </Text>}
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
          <CustomButton
            text="Sign In"
            onPress={() => {
              signIn(Email, Password);
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
      </View>

      {/* <TouchableOpacity
        style={styles.buttonStyle}
        onPress={getDataUsingAsyncAwaitGetCall}
      >
        <Text>Get Data Using Async Await GET</Text>
      </TouchableOpacity> */}
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
