import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { useNavigation } from "@react-navigation/native";
import { useAtom } from "jotai";
import { alertLocationAtom } from "../../store/userStore";
import { alertsDecoder } from "../../AlertsKeyValue";
import { ScrollView } from "react-native-gesture-handler";
export default function Record() {
  return (
    <View style={styles.root}>
      <View style={styles.body}>
        <View style={{ alignItems: "flex-end" }}>
          <Text style={{ alignItems: "flex-end", color: "#BEBEBE" }} />
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.headerText}>Plate Number</Text>
          <Text style={styles.address} />
        </View>

        <View>
          <View style={styles.headerWrapper}>
            <Text style={{ marginRight: 5, fontWeight: "700" }}>Alert</Text>
            <Text>high temp</Text>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 5 }}>
            <Text style={{ marginRight: 5, fontWeight: "700" }}>Temp:</Text>
            <Text />
          </View>
          <View style={{ flexDirection: "row", marginBottom: 5 }}>
            <Text style={{ marginRight: 5, fontWeight: "700" }}>Long:</Text>
            <Text />
          </View>
          <View style={{ flexDirection: "row", marginBottom: 5 }}>
            <Text style={{ marginRight: 5, fontWeight: "700" }}>Lat:</Text>
            <Text />
          </View>

          <View style={{ flexDirection: "row", marginBottom: 5 }}>
            <Text style={{ marginRight: 5, fontWeight: "700" }}>Speed:</Text>
            <Text />
          </View>
          <View style={{ flexDirection: "row", marginBottom: 5 }}>
            <Text style={{ marginRight: 5, fontWeight: "700" }}>
              VehicleIGN:
            </Text>
          </View>
          <View style={{ flexDirection: "column", marginBottom: 5 }}>
            <Text style={{ marginRight: 5, fontWeight: "700" }}>
              AddressAr:
            </Text>
            <Text />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = EStyleSheet.create({
  root: {
    backgroundColor: "white",
    borderTopColor: "#2E8BC0",
    borderTopWidth: 5,
    marginHorizontal: "1rem",
    marginVertical: "0.5rem",
    borderRadius: 8,
    padding: "0.7rem"
  },

  body: {},
  headerText: {
    fontWeight: "700",
    fontSize: 20.5,
    color: "black",
    marginRight: 10
  },
  address: {
    color: "#525252",
    fontSize: 17,
    marginTop: 3
  },
  dataContainer: {
    flexDirection: "column"
  },

  headerWrapper: {
    marginTop: 10,
    flexDirection: "row"
  }
});
