import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import Alert from "./Alert";
import { ScrollView } from "react-native-gesture-handler";
import { AlertsApi } from "../../../api/AxiosApi";
export default function AlertsScreen() {
  const [data] = useState([
    {
      vehicleID: 460,
      typeAr: "مركبة",
      subTypeAr: "مركبة",
      manufacturingYear: "000",
      locationID: 59775709,
      deviceIMEI: "866907055182116",
      gpsTime: "2022-12-23T00:11:03",
      longitude: 36.02496337890625,
      latitude: 32.033199310302734,
      speed: 0,
      vehicleIGN: false,
      odometer: 2710.97412109375,
      addressAr: "محافظة الزرقاء - ابو صياح - مخيم حطين - مسجد الشورى"
    },
    {
      vehicleID: 460,
      typeAr: "مركبة",
      subTypeAr: "مركبة",
      manufacturingYear: "000",
      locationID: 59776893,
      deviceIMEI: "866907055182116",
      gpsTime: "2022-12-23T01:11:09",
      longitude: 36.0250129699707,
      latitude: 32.033103942871094,
      speed: 0,
      vehicleIGN: false,
      odometer: 2711.010986328125,
      addressAr: "محافظة الزرقاء - ابو صياح - مخيم حطين - مسجد الشورى"
    },
    {
      vehicleID: 460,
      typeAr: "مركبة",
      subTypeAr: "مركبة",
      manufacturingYear: "000",
      locationID: 59777860,
      deviceIMEI: "866907055182116",
      gpsTime: "2022-12-23T02:11:15",
      longitude: 36.025001525878906,
      latitude: 32.03312683105469,
      speed: 0,
      vehicleIGN: false,
      odometer: 2711.02490234375,
      addressAr: "محافظة الزرقاء - ابو صياح - مخيم حطين - مسجد الشورى"
    },
    {
      vehicleID: 460,
      typeAr: "مركبة",
      subTypeAr: "مركبة",
      manufacturingYear: "000",
      locationID: 59778833,
      deviceIMEI: "866907055182116",
      gpsTime: "2022-12-23T03:11:22",
      longitude: 36.02500915527344,
      latitude: 32.0330810546875,
      speed: 0,
      vehicleIGN: false,
      odometer: 2711.02490234375,
      addressAr: "محافظة الزرقاء - ابو صياح - مخيم حطين - مسجد الشورى"
    },
    {
      vehicleID: 460,
      typeAr: "مركبة",
      subTypeAr: "مركبة",
      manufacturingYear: "000",
      locationID: 59779702,
      deviceIMEI: "866907055182116",
      gpsTime: "2022-12-23T04:11:28",
      longitude: 36.024993896484375,
      latitude: 32.03309631347656,
      speed: 0,
      vehicleIGN: false,
      odometer: 2711.02490234375,
      addressAr: "محافظة الزرقاء - ابو صياح - مخيم حطين - مسجد الشورى"
    },
    {
      vehicleID: 460,
      typeAr: "مركبة",
      subTypeAr: "مركبة",
      manufacturingYear: "000",
      locationID: 59780221,
      deviceIMEI: "866907055182116",
      gpsTime: "2022-12-23T05:11:35",
      longitude: 36.02489471435547,
      latitude: 32.033180236816406,
      speed: 0,
      vehicleIGN: false,
      odometer: 2711.051025390625,
      addressAr: "محافظة الزرقاء - ابو صياح - مخيم حطين - مسجد الشورى"
    },
    {
      vehicleID: 460,
      typeAr: "مركبة",
      subTypeAr: "مركبة",
      manufacturingYear: "000",
      locationID: 59781014,
      deviceIMEI: "866907055182116",
      gpsTime: "2022-12-23T06:11:41",
      longitude: 36.024871826171875,
      latitude: 32.03318786621094,
      speed: 0,
      vehicleIGN: false,
      odometer: 2711.073974609375,
      addressAr: "محافظة الزرقاء - ابو صياح - مخيم حطين - مسجد الشورى"
    },
    {
      vehicleID: 460,
      typeAr: "مركبة",
      subTypeAr: "مركبة",
      manufacturingYear: "000",
      locationID: 59781802,
      deviceIMEI: "866907055182116",
      gpsTime: "2022-12-23T07:11:47",
      longitude: 36.02509689331055,
      latitude: 32.03303527832031,
      speed: 0,
      vehicleIGN: false,
      odometer: 2711.087890625,
      addressAr: "محافظة الزرقاء - ابو صياح - مخيم حطين - مسجد الشورى"
    },
    {
      vehicleID: 460,
      typeAr: "مركبة",
      subTypeAr: "مركبة",
      manufacturingYear: "000",
      locationID: 59782169,
      deviceIMEI: "866907055182116",
      gpsTime: "2022-12-23T08:11:54",
      longitude: 36.02499771118164,
      latitude: 32.03311538696289,
      speed: 0,
      vehicleIGN: false,
      odometer: 2711.12890625,
      addressAr: "محافظة الزرقاء - ابو صياح - مخيم حطين - مسجد الشورى"
    },
    {
      vehicleID: 460,
      typeAr: "مركبة",
      subTypeAr: "مركبة",
      manufacturingYear: "000",
      locationID: 59782750,
      deviceIMEI: "866907055182116",
      gpsTime: "2022-12-23T09:12:02",
      longitude: 36.024940490722656,
      latitude: 32.033203125,
      speed: 0,
      vehicleIGN: false,
      odometer: 2711.30810546875,
      addressAr: "محافظة الزرقاء - ابو صياح - مخيم حطين - مسجد الشورى"
    },
    {
      vehicleID: 460,
      typeAr: "مركبة",
      subTypeAr: "مركبة",
      manufacturingYear: "000",
      locationID: 59783493,
      deviceIMEI: "866907055182116",
      gpsTime: "2022-12-23T10:12:09",
      longitude: 36.0251350402832,
      latitude: 32.03310012817383,
      speed: 0,
      vehicleIGN: false,
      odometer: 2711.363037109375,
      addressAr: "محافظة الزرقاء - ابو صياح - مخيم حطين - مسجد الشورى"
    },
    {
      vehicleID: 460,
      typeAr: "مركبة",
      subTypeAr: "مركبة",
      manufacturingYear: "000",
      locationID: 59784951,
      deviceIMEI: "866907055182116",
      gpsTime: "2022-12-23T11:12:15",
      longitude: 36.024845123291016,
      latitude: 32.03315353393555,
      speed: 0,
      vehicleIGN: false,
      odometer: 2711.443115234375,
      addressAr: "محافظة الزرقاء - ابو صياح - مخيم حطين - مسجد الشورى"
    }
  ]);
  return (
    <ScrollView style={styles.root}>
      {data.map(item => <Alert temp={100} long={item.longitude.toFixed(5)} />)}
    </ScrollView>
  );
}

const styles = EStyleSheet.create({});
