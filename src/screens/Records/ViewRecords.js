import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import CustomInput from "../../Components/CustomInput/CustomInput";
import Record from "./Record";

export default function ViewRecords() {
  return (
    <ScrollView style={{ backgroundColor: "#a8cbe6" }}>
      <Record />
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
