import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import {
  AlertsApi,
  vehicleApi,
  VehicleRegistrationApi,
  insuranceApi,
  recordsApi
} from "../../../api/AxiosApi";
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
import Table from "../../Components/Table/Table";
import { and } from "react-native-reanimated";
export default function HomeScreen({ route, navigation }) {
  const [markerLocation, setMarkerLocation] = useAtom(alertLocationAtom);
  const [vehicleOwner, setVehicleOwner] = useAtom(vehicleOwnerAtom);
  const [deviceIMEI, setDeviceIMEI] = useAtom(deviceIMEIAtom);

  const [vehicle, setVehicle] = useState("");
  const [alertData, setAlertData] = useState([]);
  const [registration, setRegistration] = useState([{}]);
  const [insurance, setInsurance] = useState([{}]);
  const [recordData, setRecordData] = useState([]);

  const [selected, setSelected] = useState("");

  const data = [{ key: "1", value: vehicle.vehicleModel }];

  const fetchData = async () => {
    try {
      const { data } = await AlertsApi.getLatest(deviceIMEI);
      setAlertData(data);

      const res = await vehicleApi.getVehicle(vehicleOwner.vehicleId);
      setVehicle(res.data[0]);

      const reg = await VehicleRegistrationApi.getRegistration(
        res.data[0].regId
      );
      const ins = await insuranceApi.getInsurance(res.data[0].insId);
      setRegistration(reg.data);
      setInsurance(ins.data);

      const reco = await recordsApi.getLatestRecord(
        vehicleOwner.vehicleId,
        "oil"
      );
      setRecordData(reco.data);
    } catch (error) {
      console.log("error", JSON.stringify(error));
    }
  };

  const getLatestAlert = async () => {
    try {
      const { data } = await AlertsApi.getLatest(deviceIMEI);
      setAlertData(data);
      console.log(data);
    } catch (error) {
      console.log("error", JSON.stringify(error));
    }
  };

  const geVehicle = async () => {
    try {
      const res = await vehicleApi.getVehicle(vehicleOwner.vehicleId);
      setVehicle(res.data[0]);
    } catch (error) {
      console.log("error", JSON.stringify(error));
    }
  };
  useEffect(
    () => {
      if (
        vehicle !== undefined &&
        alertData !== undefined &&
        registration !== undefined &&
        insurance !== undefined
      ) {
        fetchData();
      } else {
        console.log("vehicle", vehicle);
        console.log("alert", alertData);
        console.log("reg: ", registration);
        console.log("ins: ", insurance);
        console.log("recourd", recordData);
      }
    },
    []
    // () => {
    //   getLatestAlert();
    // },
    // []
  );

  return (
    <ScrollView>
      <View style={styles.outerContainer}>
        <View style={styles.selectListContainer}>
          <SelectList
            setSelected={val => setSelected(val)}
            data={data}
            save="value"
            search={false}
            placeholder="Select Vehicle"
            defaultOption={selected}
          />
        </View>
        <View style={{ paddingHorizontal: 13 }}>
          <Table
            regExpDate={
              registration[0].expiryDate === undefined
                ? " soon "
                : registration[0].expiryDate.split("T")[0]
            }
            insExpDate={
              insurance[0].expiryDate === undefined
                ? " soon ins "
                : insurance[0].expiryDate.split("T")[0]
            }
            nextOilChang={
              recordData[0] !== undefined
                ? recordData[0].oilLife +
                  Number(alertData[0].odometer.toFixed(3)) +
                  " km"
                : 0
            }
            currentOdometer={
              alertData[0] !== undefined
                ? alertData[0].odometer.toFixed(3) + " km"
                : 0
            }
          />
        </View>

        <View style={{ maxHeight: 300 }}>
          {alertData !== undefined
            ? alertData.map(item =>
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
                  speed={item.speed}
                  vehicleIGN={item.vehicleIGN}
                  addressAr={item.addressAr}
                  pNumber={vehicle.vehiclePlateNumber}
                  extProp={item.extendedProperties}
                  isScrollable
                  //locationId={item.locationId}
                />
              )
            : <Text />}
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
              resetBoundsOnResize
            >
              {/* {markerLocation.long === 0 && markerLocation.lat === 0
              ? setMarkerLocation({
                  long: alertData.longitude,
                  lat: alertData.latitude
                })
              : <Marker
                  coordinate={{
                    latitude: markerLocation.lat,
                    longitude: markerLocation.long
                  }}
                />}
            <Marker
              coordinate={{
                latitude: markerLocation.lat,
                longitude: markerLocation.long
              }}
            /> */}
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
    </ScrollView>
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
