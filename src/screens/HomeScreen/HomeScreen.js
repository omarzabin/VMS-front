import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import Icon from "react-native-vector-icons/FontAwesome";
import MapView, { Circle, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Linking, Platform } from "react-native";

export default function HomeScreen() {
  const [selected, setSelected] = useState("");
  const [iconColor, setIconColor] = useState("red");

  const data = [{ key: "1", value: "Camry" }, { key: "2", value: "Accord" }];
  /* 
  const { width, hight } = Dimensions.get("window");
  const Aspect_RATIO = width / hight;
  const LATITUDE_DELTA = 0.02;
  const LONGITUDE_DELTA = LATITUDE_DELTA * Aspect_RATIO;
  const INITIAL_POSITION = {
    latitude: 40.76711,
    longitude: -73.979704,
    latDelta: LATITUDE_DELTA,
    longDelta: LONGITUDE_DELTA
  };*/

  /* const openMap = async (latitude, longitude, label = "MyLabel") => {
    const tag = `${Platform.OS === "ios" ? "maps" : "geo"}:0,0?q=`;
    const link = Platform.select({
      ios: `${scheme}${label}@${latitude},${longitude}`,
      android: `${scheme}${latitude},${longitude}(${label})`
    });

    try {
      const supported = await Linking.canOpenURL(link);

      if (supported) Linking.openURL(link);
    } catch (error) {
      console.log(error);
    }
  };*/

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
      </View>
      <View style={styles.informationContainer}>
        <View style={styles.leftContainer}>
          <Text style={{ fontSize: 19 }}>Last Alert</Text>
        </View>

        <View style={styles.rightContainer}>
          <Text style={{ fontSize: 19 }}> Alert</Text>
        </View>
      </View>
      <View style={styles.LocationContainer}>
        <View>
          <Text style={{ fontSize: 19 }}>Last Location for vehicle</Text>
        </View>

        <View style={styles.mapContainer}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={
              styles.map // remove if not using Google Maps
            }
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121
            }}
          >
            <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
          </MapView>
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
    marginBottom: 10,
    justifyContent: "space-between"
  },
  LocationContainer: {
    flexDirection: "column",
    paddingHorizontal: 6,
    marginBottom: 10,
    justifyContent: "space-between"
  },
  leftContainer: { paddingTop: 6 },
  rightContainer: { paddingRight: 10 },
  mapContainer: {
    paddingTop: 10,
    shadowColor: "black",
    shadowOffset: { width: 5, hight: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    alignItems: "center"
  },
  map: {
    width: "100%",
    height: "100%"
  }
});
