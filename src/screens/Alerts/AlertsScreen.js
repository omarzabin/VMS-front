import { View, Text, StyleSheet, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import Alert from "./Alert";
import { ScrollView } from "react-native-gesture-handler";
import { AlertsApi } from "../../../api/AxiosApi";

import { useNavigation } from "@react-navigation/native";
export default function AlertsScreen() {
  const [refresh, setRefresh] = useState(false);

  const pull = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 4000);
  };

  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const getAlerts = async () => {
    try {
      const { data } = await AlertsApi.get();
      setData(data);
      //console.log("data:", data);
    } catch (error) {
      console.log("error", JSON.stringify(error));
    }
  };

  useEffect(() => {
    getAlerts();

    //console.log("time:", data.map(item => (item = item.gpsTime.split("T")[1])));
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
            getAlerts();
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
            "Alert Date: " +
            item.gpsTime.split("T")[0] +
            " At: " +
            item.gpsTime.split("T")[1]
          }
          speed={item.speed}
          vehicleIGN={item.vehicleIGN}
          addressAr={item.addressAr}
          pNumber="37-26283"
        />
      )}
    </ScrollView>
  );
}

const styles = EStyleSheet.create({});
// map, filtring function
