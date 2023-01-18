import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { AlertsApi, vehicleApi } from "../../../api/AxiosApi";
import Icon from "react-native-vector-icons/FontAwesome";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { ScrollView } from "react-native-gesture-handler";
import { useAtom } from "jotai";
import {
  alertLocationAtom,
  vehicleOwnerAtom,
  deviceIMEIAtom
} from "../../store/userStore";
import Alert from "../Alerts/Alert";
export default function HomeScreen({ route, navigation }) {
  const [markerLocation, setMarkerLocation] = useAtom(alertLocationAtom);
  const [vehicleOwner, setVehicleOwner] = useAtom(vehicleOwnerAtom);
  const [deviceImEI, setDeviceIMEI] = useAtom(deviceIMEIAtom);

  const [vehicle, setVehicle] = useState("");

  //const [date, setDate] = useState(new Date());
  const [alertData, setAlertData] = useState([]);

  const [selected, setSelected] = useState("");

  const data = [{ key: "1", value: vehicle.vehicleModel }];

  const getLatestAlert = async () => {
    try {
      const { data } = await AlertsApi.getLatest(deviceImEI);
      setAlertData(data);
    } catch (error) {
      console.log("error", JSON.stringify(error));
    }
  };

  const geVehicle = async () => {
    try {
      const res = await vehicleApi.getVehicle(vehicleOwner.vehicleId);
      setVehicle(res.data[0]);
      console.log("vehicle: ", vehicle);
    } catch (error) {
      console.log("error", JSON.stringify(error));
    }
  };
  useEffect(
    () => {
      {
        vehicle.vehicleId === vehicleOwner.vehicleId
          ? getLatestAlert()
          : geVehicle();
      }
    },
    [vehicle]
  );

  return (
    <View style={styles.outerContainer}>
      {console.log("plate", vehicle.vehiclePlateNumber)}
      <View style={styles.selectListContainer}>
        <SelectList
          setSelected={val => setSelected(val)}
          data={data}
          save="value"
          search={false}
          placeholder="Select Vehicle"
        />
      </View>
      <View style={{ maxHeight: 300 }}>
        {alertData.map(item =>
          <Alert
            temp={100}
            long={item.longitude}
            lat={item.latitude}
            time={
              "In: " +
              item.gpsTime.split("T")[0] +
              " At: " +
              item.gpsTime.split("T")[1]
            }
            speed={item.speed === 0 ? "0" : item.speed}
            vehicleIGN={item.vehicleIGN}
            addressAr={item.addressAr}
            pNumber={vehicle.vehiclePlateNumber}
            extProp={item.extendedProperties}
            isScrollable
            //locationId={item.locationId}
          />
        )}
      </View>

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
            {/* {markerLocation.long === 0 && markerLocation.lat === 0
              ? setMarkerLocation({
                  long: alertData[0].longitude,
                  lat: alertData[0].latitude
                })
              : <Marker
                  coordinate={{
                    latitude: markerLocation.lat,
                    longitude: markerLocation.long
                  }}
                />} */}
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
  selectListContainer: { padding: 3, marginBottom: 15, marginHorizontal: 8 },
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
    height: 350,

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
