import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import Icon from "react-native-vector-icons/FontAwesome";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default function HomeScreen() {
  const [selected, setSelected] = useState("");
  const [iconColor, setIconColor] = useState("red");

  const data = [{ key: "1", value: "Camry" }, { key: "2", value: "Accord" }];

  const { width, hight } = Dimensions.get("window");
  const Aspect_RATIO = width / hight;
  const LATITUDE_DELTA = 0.02;
  const LONGITUDE_DELTA = LATITUDE_DELTA * Aspect_RATIO;
  const INITIAL_POSITION = {
    latitude: 40.76711,
    longitude: -73.979704,
    latDelta: LATITUDE_DELTA,
    longDelta: LONGITUDE_DELTA
  };

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

        <View style={styles.bottomContainer}>
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            initialRegion={INITIAL_POSITION}
          />
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
  bottomContainer: { paddingTop: 10 },
  map: {
    width: "100%",
    height: "100%"
  }
});
