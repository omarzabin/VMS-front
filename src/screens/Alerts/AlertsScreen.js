import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import Alert from "./Alert";
import { ScrollView } from "react-native-gesture-handler";
import { AlertsApi, vehicleApi } from "../../../api/AxiosApi";
import { useAtom } from "jotai";
import { deviceIMEIAtom, vehicleOwnerAtom } from "../../store/userStore";
import { useNavigation } from "@react-navigation/native";
import Table from "../../Components/Table/Table";
export default function AlertsScreen() {
  const [deviceImEI, setDeviceIMEI] = useAtom(deviceIMEIAtom);

  const [vehicleOwner] = useAtom(vehicleOwnerAtom);

  const [refresh, setRefresh] = useState(false);
  const [data, setData] = useState([]);
  const [vehiclePlateNumber, setVehiclePlateNumber] = useState("");
  const navigation = useNavigation();

  const getAlerts = async () => {
    try {
      const { data } = await AlertsApi.get(deviceImEI);
      setData(data);
    } catch (error) {
      console.log("error", JSON.stringify(error));
    }
  };
  const geVehicle = async () => {
    try {
      const res = await vehicleApi.getVehicle(vehicleOwner.vehicleId);

      setVehiclePlateNumber(res.data[0].vehiclePlateNumber);
    } catch (error) {
      console.log("error", JSON.stringify(error));
    }
  };

  useEffect(
    () => {
      geVehicle();
      getAlerts();
    },
    [vehiclePlateNumber]
  );

  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      <TouchableOpacity
        onPress={() => {
          geVehicle();
          getAlerts();
        }}
      >
        <View style={{ paddingHorizontal: 15 }}>
          <Text style={{ textDecorationLine: "underline" }}>refresh</Text>
        </View>
      </TouchableOpacity>
      {data.map(item =>
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
          pNumber={vehiclePlateNumber}
          extProp={item.extendedProperties}
          streetSpeed={item.streetSpeed}

          //locationId={item.locationId}
        />
      )}
    </ScrollView>
  );
}

const styles = EStyleSheet.create({});
