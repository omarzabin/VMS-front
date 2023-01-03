import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { useNavigation } from "@react-navigation/native";
import { useAtom } from "jotai";
import { alertLocationAtom } from "../../store/userStore";
export default function Alert({
  time,
  temp,
  long,
  lat,
  speed,
  vehicleIGN,
  addressAr,
  pNumber
}) {
  const navigation = useNavigation();
  const [markerLocation, setMarkerLocation] = useAtom(alertLocationAtom);
  return (
    <View style={styles.root}>
      <TouchableOpacity
        onPress={() => {
          setMarkerLocation({ long: long, lat: lat });
          navigation.navigate("Home");
        }}
      >
        <View style={styles.body}>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={{ alignItems: "flex-end", color: "#BEBEBE" }}>
              {time}
            </Text>
          </View>
          <View style={styles.dataContainer}>
            <Text style={styles.headerText}>Plate Number</Text>
            <Text style={styles.address}>
              {pNumber}
            </Text>
          </View>

          <View>
            <View style={styles.headerWrapper}>
              <Text style={{ marginRight: 5, fontWeight: "700" }}>Alert</Text>
              <Text>high temp</Text>
            </View>
            <View style={{ flexDirection: "row", marginBottom: 5 }}>
              <Text style={{ marginRight: 5, fontWeight: "700" }}>Temp:</Text>
              <Text>
                {temp}
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginBottom: 5 }}>
              <Text style={{ marginRight: 5, fontWeight: "700" }}>Long:</Text>
              <Text>
                {long.toFixed(5)}
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginBottom: 5 }}>
              <Text style={{ marginRight: 5, fontWeight: "700" }}>Lat:</Text>
              <Text>
                {lat.toFixed(5)}
              </Text>
            </View>

            <View style={{ flexDirection: "row", marginBottom: 5 }}>
              <Text style={{ marginRight: 5, fontWeight: "700" }}>Speed:</Text>
              <Text>
                {speed}
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginBottom: 5 }}>
              <Text style={{ marginRight: 5, fontWeight: "700" }}>
                VehicleIGN:
              </Text>
              {vehicleIGN ? <Text> On </Text> : <Text> Off</Text>}
            </View>
            <View style={{ flexDirection: "column", marginBottom: 5 }}>
              <Text style={{ marginRight: 5, fontWeight: "700" }}>
                AddressAr:
              </Text>
              <Text>
                {addressAr}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
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
