import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Alert
} from "react-native";
import { useState } from "react";
import SpatialButton from "../../Components/SpatialButton/SpatialButton";

import { FontAwesome5 } from "@expo/vector-icons";
import SpatialInput from "../../Components/SpatialInput/SpatialInput";
import { useForm } from "react-hook-form";
import { vehicleOwnerAtom } from "../../store/userStore";
import { useAtom } from "jotai";
import CustomInput from "../../Components/CustomInput/CustomInput";
import { updateOwnerApi } from "../../../api/AxiosApi";

export default function ProfileScreen() {
  const { control, handleSubmit, watch } = useForm();
  const [vehicleOwner, setVehicleOwner] = useAtom(vehicleOwnerAtom);

  const [email, setEmail] = useState(vehicleOwner.email);
  const [firstName, setFirstName] = useState(vehicleOwner.firstName);
  const [lastName, setLastName] = useState(vehicleOwner.lastName);
  const [password, setPassword] = useState(vehicleOwner.password);
  const [newPassword, setNewPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState();

  function save() {
    updateVehicleOwnerInfo();
  }

  const updateVehicleOwnerInfo = async () => {
    try {
      const res = await updateOwnerApi.updateAll({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        ownerId: vehicleOwner.ownerId
      });
      console.warn("first name updated:", firstName);
      console.log("res: ", res.data);

      Alert.alert("Done");
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Text
          style={{
            alignSelf: "stretch",
            padding: 10,
            fontWeight: "500",
            paddingTop: 40
          }}
        >
          First Name :
        </Text>

        <CustomInput value={firstName} setValue={setFirstName} />

        <Text style={{ alignSelf: "stretch", padding: 10, fontWeight: "500" }}>
          Last Name :
        </Text>
        <CustomInput value={lastName} setValue={setLastName} />

        <Text style={{ alignSelf: "stretch", padding: 10, fontWeight: "500" }}>
          Email :
        </Text>

        <CustomInput value={email} setValue={setEmail} />

        <Text style={{ alignSelf: "stretch", padding: 10, fontWeight: "500" }}>
          Current password :
        </Text>
        <CustomInput setValue={setPassword} placeholder="" />

        <Text style={{ alignSelf: "stretch", padding: 10, fontWeight: "500" }}>
          New Password :
        </Text>
        <SpatialInput
          name={"New-Password"}
          control={control}
          placeholder=""
          secureTextEntry={true}
        />

        <Text style={{ alignSelf: "stretch", padding: 10, fontWeight: "500" }}>
          Confirm New Password :
        </Text>
        <SpatialInput
          name={"Confirm-New-Password"}
          control={control}
          placeholder=""
          secureTextEntry={true}
        />
        <View style={styles.button}>
          <SpatialButton text="Save Changes  " onPress={save} type="save" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: "#e8e8e8"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "051C60",
    margin: 10,
    paddingTop: 40
  },

  row: {
    alignContent: "flex-start",

    flexDirection: "row"
  },
  icon: {
    margin: 13,
    paddingTop: 40,
    alignSelf: "flex-end"
  },
  rowtitle: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingRight: 250,
    padding: 10
  },
  button: {
    padding: 25
  }
});
