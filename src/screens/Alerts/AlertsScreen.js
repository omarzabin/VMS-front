import { View, Text, StyleSheet, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import Alert from "./Alert";
import { ScrollView } from "react-native-gesture-handler";
import { AlertsApi } from "../../../api/AxiosApi";
import { useAtom } from "jotai";
import { deviceIMEIAtom } from "../../store/userStore";
import { useNavigation } from "@react-navigation/native";
export default function AlertsScreen() {
  const [deviceImEI, setDeviceIMEI] = useAtom(deviceIMEIAtom);

  const [refresh, setRefresh] = useState(false);
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  const getAlerts = async () => {
    try {
      const { data } = await AlertsApi.get(deviceImEI);
      setData(data);
    } catch (error) {
      console.log("error", JSON.stringify(error));
    }
  };
  const pull = () => {
    setRefresh(true);
    setTimeout(() => {
      getAlerts();
      setRefresh(false);
    }, 2000);
  };
  useEffect(() => {
    getAlerts();
  }, []);

  return (
    <ScrollView
      style={styles.root}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          refreshing={refresh}
          onRefresh={() => {
            pull();
          }}
        />
      }
    >
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
          pNumber="37-26283"
          extProp={item.extendedProperties}
          //locationId={item.locationId}
        />
      )}
    </ScrollView>
  );
}

const styles = EStyleSheet.create({});
// map, filtring function
