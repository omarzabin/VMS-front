import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { useNavigation } from "@react-navigation/native";
import { useAtom } from "jotai";
import { alertLocationAtom } from "../../store/userStore";
import { alertsDecoder } from "../../AlertsKeyValue";
import { ScrollView } from "react-native-gesture-handler";
export default function Alert({
  time = "",
  temp,
  long,
  lat,
  speed,
  vehicleIGN,
  addressAr,
  pNumber,
  extProp,
  isScrollable = false,
  locationId,
  streetSpeed
}) {
  const navigation = useNavigation();
  const [markerLocation, setMarkerLocation] = useAtom(alertLocationAtom);
  const [extendedProperty, setExtendedProperty] = useState([]);
  const [alertTy, setAlertTy] = useState();
  const [vehiclePlateNumber, setVehiclePlateNumber] = useState("");

  useEffect(() => {
    const extendedPropertiesParsed = JSON.parse(extProp);
    if (extendedPropertiesParsed) {
      const keys = Object.keys(extendedPropertiesParsed);
      const tempArr = keys
        .map(key => {
          return {
            decoded: alertsDecoder(parseInt(key)), // battery level
            value: extendedPropertiesParsed[key] // 89
          };
        })
        .filter(item => item.decoded !== undefined);
      setExtendedProperty(tempArr);
      if (speed > streetSpeed)
        setAlertTy(`Over speed !!, street speed is ${streetSpeed}`);
      else setAlertTy(`No alert`);
    }
  }, []);

  return (
    <View
      style={
        speed > streetSpeed
          ? speed > streetSpeed + 1 && speed <= streetSpeed + 9
            ? styles.rootOrange
            : styles.rootRed
          : styles.root
      }
    >
      {isScrollable
        ? <ScrollView>
            <View style={styles.body}>
              <View style={{ alignItems: "flex-end" }}>
                <Text style={{ alignItems: "flex-end", color: "#BEBEBE" }}>
                  {time ? time : ""}
                </Text>
              </View>
              <View style={styles.dataContainer}>
                <Text style={styles.headerText}>Plate Number</Text>
                <Text style={styles.address}>
                  {pNumber ? pNumber : ""}
                </Text>
              </View>

              <View>
                <View style={styles.headerWrapper}>
                  <Text style={{ marginRight: 5, fontWeight: "700" }}>
                    Alert
                  </Text>
                  <Text>
                    {alertTy}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", marginBottom: 5 }}>
                  <Text style={{ marginRight: 5, fontWeight: "700" }}>
                    Temp:
                  </Text>
                  <Text>
                    {temp ? temp : ""}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", marginBottom: 5 }}>
                  <Text style={{ marginRight: 5, fontWeight: "700" }}>
                    Long:
                  </Text>
                  <Text>
                    {long ? long.toFixed(5) : ""}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", marginBottom: 5 }}>
                  <Text style={{ marginRight: 5, fontWeight: "700" }}>
                    Lat:
                  </Text>
                  <Text>
                    {lat ? lat.toFixed(5) : ""}
                  </Text>
                </View>

                <View style={{ flexDirection: "row", marginBottom: 5 }}>
                  <Text style={{ marginRight: 5, fontWeight: "700" }}>
                    Speed:
                  </Text>
                  <Text>
                    {speed ? speed : "0"}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", marginBottom: 5 }}>
                  <Text style={{ marginRight: 5, fontWeight: "700" }}>
                    Street Speed:
                  </Text>
                  <Text>
                    {streetSpeed ? streetSpeed : "0"}
                  </Text>
                </View>

                <View style={{ flexDirection: "column", marginBottom: 5 }}>
                  <Text style={{ marginRight: 5, fontWeight: "700" }}>
                    AddressAr:
                  </Text>
                  <Text>
                    {addressAr ? addressAr : ""}
                  </Text>
                </View>
                {extendedProperty.map(item =>
                  <View style={{ flexDirection: "column", marginBottom: 5 }}>
                    <Text
                      style={{
                        marginRight: 5,
                        fontWeight: "700"
                      }}
                    >
                      {item.decoded}
                    </Text>
                    <Text>
                      {valuesDecoder(item)}
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </ScrollView>
        : <TouchableOpacity
            onPress={() => {
              setMarkerLocation({ long: long, lat: lat });
              navigation.navigate("Home", {
                time,
                temp,
                long,
                lat,
                speed,
                streetSpeed,
                vehicleIGN,
                addressAr,
                pNumber,
                extProp,
                isScrollable,
                locationId
              });
            }}
          >
            <View style={styles.body}>
              <View style={{ alignItems: "flex-end" }}>
                <Text style={{ alignItems: "flex-end", color: "#BEBEBE" }}>
                  {time ? time : ""}
                </Text>
              </View>
              <View style={styles.dataContainer}>
                <Text style={styles.headerText}>Plate Number</Text>
                <Text style={styles.address}>
                  {pNumber ? pNumber : ""}
                </Text>
              </View>

              <View>
                <View style={styles.headerWrapper}>
                  <Text style={{ marginRight: 5, fontWeight: "700" }}>
                    Alert
                  </Text>
                  <Text>
                    {alertTy}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", marginBottom: 5 }}>
                  <Text style={{ marginRight: 5, fontWeight: "700" }}>
                    Temp:
                  </Text>
                  <Text>
                    {temp ? temp : ""}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", marginBottom: 5 }}>
                  <Text style={{ marginRight: 5, fontWeight: "700" }}>
                    Long:
                  </Text>
                  <Text>
                    {long ? long.toFixed(5) : ""}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", marginBottom: 5 }}>
                  <Text style={{ marginRight: 5, fontWeight: "700" }}>
                    Lat:
                  </Text>
                  <Text>
                    {lat ? lat.toFixed(5) : ""}
                  </Text>
                </View>

                <View style={{ flexDirection: "row", marginBottom: 5 }}>
                  <Text style={{ marginRight: 5, fontWeight: "700" }}>
                    Speed:
                  </Text>
                  <Text>
                    {speed ? speed : "0"}
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
                    {addressAr ? addressAr : ""}
                  </Text>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Alert Details", {
                        time,
                        temp,
                        long,
                        lat,
                        speed,
                        vehicleIGN,
                        addressAr,
                        pNumber,
                        extProp,
                        isScrollable,
                        locationId,
                        streetSpeed
                      })}
                  >
                    <Text
                      style={{
                        alignSelf: "flex-end",
                        paddingTop: 10,
                        textDecorationLine: "underline"
                      }}
                    >
                      more details
                    </Text>
                  </TouchableOpacity>
                </View>
                {/* {extendedProperty.map(item =>
                  <View style={{ flexDirection: "column", marginBottom: 5 }}>
                    <Text
                      style={{
                        marginRight: 5,
                        fontWeight: "700"
                      }}
                    >
                      {item.decoded}
                    </Text>
                    <Text>
                      {valuesDecoder(item)}
                    </Text>
                  </View>
                )} */}
              </View>
            </View>
          </TouchableOpacity>}
    </View>
  );
}

const valuesDecoder = item => {
  if (item.decoded === "Ignition") return item.value ? "On" : "Off";
  else if (item.decoded === "Movement") {
    return item.value === 0 ? "Idle" : "Moving";
  } else if (item.decoded === "Towing")
    return item.value === 0 ? "Not being towed" : "Being towed";
  else if (item.decoded === "Unplug")
    return item.value === 0 ? "Device is connected" : "Device is not connected";
  else if (item.decoded === "Sleep Mode")
    return item.value === 0 ? "Vehicle is moving" : "Vehicle is not moving";
  else if (item.decoded === "Engine Oil Temperature") {
    return (temp = item.value);
  } else if (item.decoded === "Total Odometer") return item.value + " km";
  else if (item.decoded === "Battery Level") return item.value + " %";
  else return item.value;
};

const styles = EStyleSheet.create({
  root: {
    backgroundColor: "white",
    borderTopColor: "#38A169",
    borderTopWidth: 5,
    marginHorizontal: "1rem",
    marginVertical: "0.5rem",
    borderRadius: 8,
    padding: "0.7rem"
  },

  rootRed: {
    backgroundColor: "white",
    borderTopColor: "#E53E3E",
    borderTopWidth: 5,
    marginHorizontal: "1rem",
    marginVertical: "0.5rem",
    borderRadius: 8,
    padding: "0.7rem"
  },
  rootOrange: {
    backgroundColor: "white",
    borderTopColor: "#ff9a40",
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
