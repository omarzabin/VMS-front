import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { useState } from "react";
import SpatialButton from "../../Components/SpatialButton/SpatialButton";
import { FontAwesome5 } from "@expo/vector-icons";
import SpatialInput from "../../Components/SpatialInput/SpatialInput";
import { useForm } from "react-hook-form";

export default function ProfileScreen() {
  const { control, handleSubmit, watch } = useForm();
  const [iseditable, setiseditable] = useState("false");

  function OnchangePaspress() {
    console.warn("change pass");
  }
  function onIconPress() {
    console.warn("Icon pressed");
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <View style={styles.rowtitle}>
          <Text style={styles.title}>User Profile</Text>
          <Pressable onPress={onIconPress}>
            <FontAwesome5 name="user-edit" style={styles.icon} size={20} />
          </Pressable>
        </View>
        <Text style={{ alignSelf: "stretch", padding: 10, fontWeight: "500" }}>
          First Name :
        </Text>

        <SpatialInput
          name={"First-Name"}
          control={control}
          placeholder=""
          secureTextEntry={false}
          editable={false}
        />

        <Text style={{ alignSelf: "stretch", padding: 10, fontWeight: "500" }}>
          Last Name :
        </Text>
        <SpatialInput
          name={"Last-Name"}
          control={control}
          placeholder=""
          secureTextEntry={false}
          editable={false}
        />

        <Text style={{ alignSelf: "stretch", padding: 10, fontWeight: "500" }}>
          Email :
        </Text>
        <SpatialInput
          name={"Email"}
          control={control}
          placeholder=""
          secureTextEntry={false}
        />

        <Text style={styles.title}>Password</Text>

        <Text style={{ alignSelf: "stretch", padding: 10, fontWeight: "500" }}>
          Current password :
        </Text>
        <SpatialInput
          name={"Current-password"}
          control={control}
          placeholder=""
          secureTextEntry={false}
        />

        <Text style={{ alignSelf: "stretch", padding: 10, fontWeight: "500" }}>
          New Password :
        </Text>
        <SpatialInput
          name={"New-Password"}
          control={control}
          placeholder=""
          secureTextEntry={false}
        />

        <Text style={{ alignSelf: "stretch", padding: 10, fontWeight: "500" }}>
          Confirm New Password :
        </Text>
        <SpatialInput
          name={"Confirm-New-Password"}
          control={control}
          placeholder=""
          secureTextEntry={false}
        />

        <SpatialButton
          text="Change Password "
          onPress={OnchangePaspress}
          type="userChangepass"
        />
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
    alignContent: "space-between",
    paddingBottom: 10,
    flexDirection: "row"
  },
  icon: {
    margin: 13,
    paddingTop: 40,
    alignSelf: "flex-end"
  },
  rowtitle: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10
  }
});
