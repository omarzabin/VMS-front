import { View, Text, StyleSheet } from "react-native";
import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";

export default function Alert({ temp, long }) {
  return (
    <View style={styles.root}>
      <View style={styles.body}>
        <View style={styles.headerWrapper}>
          <Text style={styles.headerText}>Vehicle Number</Text>
          <Text style={styles.address}>37-26283</Text>
        </View>
        <View style={styles.dataContainer}>
          <View style={{ flexDirection: "row", marginBottom: 5 }}>
            <Text style={{ marginRight: 5, fontWeight: "700" }}>Temp:</Text>
            <Text>
              {temp}
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 5 }}>
            <Text style={{ marginRight: 5, fontWeight: "700" }}>Long:</Text>
            <Text>
              {long}
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 5 }}>
            <Text style={{ marginRight: 5, fontWeight: "700" }}>lat:</Text>
            <Text>12343</Text>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 5 }}>
            <Text style={{ marginRight: 5, fontWeight: "700" }}>Alert:</Text>
            <Text>high temp</Text>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 5 }}>
            <Text style={{ marginRight: 5, fontWeight: "700" }}>Temp:</Text>
            <Text>100</Text>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 5 }}>
            <Text style={{ marginRight: 5, fontWeight: "700" }}>Temp:</Text>
            <Text>100</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = EStyleSheet.create({
  root: {
    backgroundColor: "white",
    marginHorizontal: "1rem",
    marginVertical: "0.5rem",
    borderWidth: 0.5,
    borderColor: "black",
    borderRadius: 8,
    padding: "0.7rem"
  },
  body: {},
  headerText: {
    fontWeight: "900",
    fontSize: 22,
    color: "black"
  },
  address: {
    color: "#525252",
    fontSize: 16
  },
  dataContainer: {
    flexDirection: "column"
  },

  headerWrapper: {
    marginBottom: 10
  }
});
