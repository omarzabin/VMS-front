import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import Icon from "react-native-vector-icons/FontAwesome";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { ScrollView } from "react-native-gesture-handler";
import { useAtom } from "jotai";
import { alertLocationAtom } from "../../store/userStore";
export default function HomeScreen() {
  const [markerLocation, setMarkerLocation] = useAtom(alertLocationAtom);

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
      <ScrollView style={{ maxHeight: 250 }}>
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
        <View style={styles.informationContainer}>
          <View style={styles.leftContainer}>
            <Text style={{ fontSize: 19 }}>Last Alert</Text>
          </View>

          <View style={styles.rightContainer}>
            <Text style={{ fontSize: 19 }}> Alert</Text>
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
        <View style={styles.informationContainer}>
          <View style={styles.leftContainer}>
            <Text style={{ fontSize: 19 }}>Last Alert</Text>
          </View>

          <View style={styles.rightContainer}>
            <Text style={{ fontSize: 19 }}> Alert</Text>
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
        <View style={styles.informationContainer}>
          <View style={styles.leftContainer}>
            <Text style={{ fontSize: 19 }}>Last Alert</Text>
          </View>

          <View style={styles.rightContainer}>
            <Text style={{ fontSize: 19 }}> Alert</Text>
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
        <View style={styles.informationContainer}>
          <View style={styles.leftContainer}>
            <Text style={{ fontSize: 19 }}>Last Alert</Text>
          </View>

          <View style={styles.rightContainer}>
            <Text style={{ fontSize: 19 }}> Alert</Text>
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
      </ScrollView>
      <View style={styles.LocationContainer}>
        <View style={styles.mapContainer}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={
              styles.map // remove if not using Google Maps
            }
            region={{
              latitude: 31.963158,
              longitude: 35.930359,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.421
            }}
            zoomControlEnabled
          >
            <Marker
              coordinate={{
                latitude: markerLocation.lat,
                longitude: markerLocation.long
              }}
            />
          </MapView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 8,
    backgroundColor: "#f1f3f5"
  },
  selectListContainer: { padding: 3, marginBottom: 15 },
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
    height: 400,
    shadowColor: "black",
    shadowOffset: { width: 1, hight: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2
  },
  map: {
    width: "100%",
    height: "100%"
  }
});
