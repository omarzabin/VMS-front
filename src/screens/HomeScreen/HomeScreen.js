import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import Icon from "react-native-vector-icons/FontAwesome";

export default function HomeScreen() {
  const [selected, setSelected] = useState("");
  const [iconColor, setIconColor] = useState("red");

  const data = [{ key: "1", value: "Camry" }, { key: "2", value: "Accord" }];
  return (
    <View style={styles.outerContainer}>
      <View style={styles.selectListContainer}>
        <SelectList
          setSelected={val => setSelected(val)}
          data={data}
          save="value"
          search={false}
          placeholder="Select Vehicle"
        />
      </View>
      <View style={styles.informationContainer}>
        <View style={styles.leftContainer}>
          <Text style={{ fontSize: 19 }}>Engine status</Text>
        </View>
        <View style={styles.rightContainer}>
          <Icon name="circle" color={"red"} size={35} l />
        </View>
        <View>
          <Text>kk</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1
  },
  selectListContainer: { padding: 3 },
  informationContainer: {
    flexDirection: "row",
    paddingHorizontal: 6,
    justifyContent: "space-between",
    borderWidth: 1
  },
  leftContainer: { paddingTop: 6 },
  rightContainer: { paddingRight: 10 }
});
