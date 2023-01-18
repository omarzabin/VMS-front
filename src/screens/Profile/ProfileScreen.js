import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Alert
} from "react-native";
import { useState, useEffect } from "react";
import SpatialButton from "../../Components/SpatialButton/SpatialButton";

import { FontAwesome5 } from "@expo/vector-icons";
import SpatialInput from "../../Components/SpatialInput/SpatialInput";
import { set, useForm } from "react-hook-form";
import { vehicleOwnerAtom } from "../../store/userStore";
import { useAtom } from "jotai";
import CustomInput from "../../Components/CustomInput/CustomInput";
import { updateOwnerApi } from "../../../api/AxiosApi";

export default function ProfileScreen() {
  const { control, handleSubmit, watch } = useForm();
  const passwd_confirm = watch("NewPassword");
  const [showChangePass, setShowChangePass] = useState(false);

  const [vehicleOwner, setVehicleOwner] = useAtom(vehicleOwnerAtom);

  const [email, setEmail] = useState(vehicleOwner.email);
  const [firstName, setFirstName] = useState(vehicleOwner.firstName);
  const [lastName, setLastName] = useState(vehicleOwner.lastName);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState();

  useEffect(() => {
    setShowChangePass(false);
  }, []);

  function save(data) {
    if (currentPassword === "") updateVehicleOwnerInfo();
    else {
      if (currentPassword != vehicleOwner.password)
        Alert.alert("Current password is incorrect");
      else updateVehicleOwnerPass(data);
    }
  }

  const updateVehicleOwnerInfo = async () => {
    try {
      const res = await updateOwnerApi.updateAll({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: vehicleOwner.password,
        ownerId: vehicleOwner.ownerId
      });
      console.warn("first name updated:", firstName);
      console.log("res: ", res.data);

      Alert.alert("Done");
    } catch (error) {
      console.log("error: ", error);
    }
  };
  const updateVehicleOwnerPass = async data => {
    try {
      const res = await updateOwnerApi.updateAll({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: data.NewPassword,
        ownerId: vehicleOwner.ownerId
      });
      setShowChangePass(false);
      setVehicleOwner({ password: data.NewPassword });
      console.log("new pass for atom:", vehicleOwner);
      console.warn("first name updated:", firstName);
      console.log("res: ", res.data);

      Alert.alert("Done");
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {console.log("owner: ", vehicleOwner)}
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
        <CustomInput value={vehicleOwner.lastName} setValue={setLastName} />

        <Text style={{ alignSelf: "stretch", padding: 10, fontWeight: "500" }}>
          Email :
        </Text>

        <CustomInput value={email} setValue={setEmail} />

        <Text style={{ alignSelf: "stretch", padding: 10, fontWeight: "500" }}>
          Current password :
        </Text>
        <CustomInput
          setValue={setCurrentPassword}
          placeholder=""
          onEndEditing={() => {
            currentPassword === vehicleOwner.password
              ? setShowChangePass(true)
              : setShowChangePass(false);
          }}
          secureTextEntry
        />

        {showChangePass
          ? <SpatialInput
              rules={{
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password should be Minimum 8 characters Long"
                }
              }}
              name={"NewPassword"}
              control={control}
              placeholder="New Password"
              secureTextEntry={true}
            />
          : null}
        {showChangePass
          ? <SpatialInput
              rules={{
                required: "Confirm Pass is required",
                validate: value =>
                  value === passwd_confirm || "password not match"
              }}
              name={"ConfirmPassword"}
              control={control}
              placeholder="Confirm Password"
              secureTextEntry={true}
            />
          : null}
        {!showChangePass
          ? <View style={styles.button}>
              <SpatialButton text="Save Changes" onPress={save} type="save" />
            </View>
          : <View style={styles.button}>
              <SpatialButton
                text="Change Password "
                onPress={handleSubmit(save)}
                type="save"
              />
            </View>}
      </View>
      <View>
        <Text style={{ paddingLeft: 10, color: "#ff9966" }}>
          * to change password enter current password
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: "#a8cbe6"
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
