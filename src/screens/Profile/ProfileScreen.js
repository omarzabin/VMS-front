import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  PointerEvents,
  TouchableOpacity,
  Button,
  Pressable,
  ScrollView
} from "react-native";
import { useState } from "react";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default function ProfileScreen() {
  function OnchangePaspress() {
    console.warn("change pass");
  }
  function onIconPress() {
    console.warn("Icon pressed");
  }

  const [Name, SetName] = useState("");
  const [Email, setEmail] = useState("");

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <View style={styles.rowtitle}>
          <Text style={styles.title}>User Profile</Text>
          <Pressable onPress={onIconPress}>
            <FontAwesome5 name="user-edit" style={styles.icon} size={20} />
          </Pressable>
        </View>

        <View style={styles.row}>
          <Text style={styles.Text}>First Name :</Text>
          <TextInput style={styles.input} placeholder="First Name" />
        </View>
        <View style={styles.row}>
          <Text style={styles.Text}>Last Name :</Text>
          <TextInput style={styles.input} placeholder="Last NAme" />
        </View>

        <View style={styles.row}>
          <Text style={styles.Text}>Email :</Text>
          <TextInput style={styles.input} placeholder="Email" />
        </View>

        <View style={styles.passwordboxes}>
          <Text style={styles.passowrdtitle}>Password</Text>
          <TextInput
            style={styles.passwordIntput}
            placeholder="Current Password"
            secureTextEntry={true}
          />

          <TextInput
            style={styles.passwordIntput}
            placeholder="New password"
            secureTextEntry={true}
          />

          <TextInput
            style={styles.passwordIntput}
            placeholder="Confirm Password"
            secureTextEntry={true}
          />

          <CustomButton
            text="Change Password"
            onPress={OnchangePaspress}
            type="userChangepass"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#dcdcdc"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "051C60",
    margin: 10,
    paddingTop: 40,
    textAlign: "center",
    paddingHorizontal: 100,
    paddingBottom: 40
  },
  Text: {
    paddingLeft: 10,
    fontSize: 20,
    width: "22%"
  },
  input: {
    borderWidth: 1,
    fontSize: 17,
    padding: 1,
    paddingRight: 5,
    width: "65%",
    paddingLeft: 15,
    borderColor: "#dcdcdc",
    borderRadius: 30,
    backgroundColor: "white"
  },
  row: {
    paddingTop: 15,
    flexDirection: "row",
    alignContent: "space-between",
    paddingBottom: 10
  },
  icon: {
    margin: 10,
    paddingTop: 40
  },
  rowtitle: {
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: "center"
  },

  passowrdtitle: {
    alignItems: "center",
    fontSize: 17,
    fontWeight: "bold",
    color: "051C60",
    margin: 10,
    paddingTop: 40,

    marginTop: 15,
    paddingBottom: 50
  },

  passwordboxes: {
    justifyContent: "center",
    alignContent: "center",
    paddingVertical: 40,
    flex: 0.3,
    paddingLeft: 50,
    paddingTop: 50 /**this one added to the andriod to have some space*/
  },

  passwordIntput: {
    borderWidth: 1,
    fontSize: 17,
    padding: 1,
    width: "90%",
    borderColor: "#dcdcdc",
    borderRadius: 30,
    backgroundColor: "white",
    marginBottom: 20,
    textAlign: "center"
  }
});
