import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function SpatialButton({ onPress, text, type }) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`]]}
    >
      <Text style={[styles.text, styles[`text_${type}`]]}>
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3B71F3",
    width: "100%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 5
  },

  text: {
    fontWeight: "bold",
    color: "white"
  },

  container_Primary: {
    backgroundColor: "#3B71F3" /**For the primry button main buttons */
  },
  container_Secondry: {
    backgroundColor: "white" /**for the secondry button */
  },
  text_Secondry: {
    color: "gray"
  },
  container_Third: {
    backgroundColor: "white"
  },
  text_Third: {
    color: "gray"
  },

  container_userChangepass: {
    backgroundColor: "white",
    width: 150,
    height: 50,
    borderRadius: 50,
    marginHorizontal: "15%",
    width:250,
  },
  text_userChangepass: {
    color: "black",
    fontSize: 12,
    fontWeight: "600",
  },

  container_submit: {
    color: "red",
    fontSize: 12,
    marginTop: 50
  },
  text_submit: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold"
  },
  container_clear: {
    color: "red",
    fontSize: 12,
    marginTop: 50
  },
  text_clear: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold"
  }
});
