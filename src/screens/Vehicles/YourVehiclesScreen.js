import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { vehicleOwnerAtom } from "../../store/userStore";
import CustomInput from "../../Components/CustomInput/CustomInput";
import { ScrollView } from "react-native-gesture-handler";
import {
  vehicleApi,
  VehicleRegistrationApi,
  insuranceApi
} from "../../../api/AxiosApi";

export default function YourVehiclesScreen() {
  // testing readio button
  //
  const [vehicleOwner] = useAtom(vehicleOwnerAtom);

  const [vehicle, setVehicle] = useState([{}]);
  const [registration, setRegistration] = useState([{}]);
  const [insurance, setInsurance] = useState([{}]);

  const fetchData = async () => {
    try {
      const res = await vehicleApi.getVehicle(vehicleOwner.vehicleId);
      setVehicle(res.data);

      const reg = await VehicleRegistrationApi.getRegistration(
        res.data[0].regId
      );
      const ins = await insuranceApi.getInsurance(res.data[0].insId);
      setRegistration(reg.data);
      setInsurance(ins.data);
    } catch (error) {
      console.log("error", JSON.stringify(error));
    }
  };

  useEffect(
    () => {
      if (vehicle[0].vehicleId === undefined) {
        fetchData();
      } else {
        console.log("first");
      }
    },
    [insurance]
  );

  return (
    <ScrollView
      style={{ backgroundColor: "#f0f9ff" }}
      showsVerticalScrollIndicator={false}
    >
      <TouchableOpacity onPress={() => fetchData()}>
        <View style={{ paddingHorizontal: 15 }}>
          <Text style={{ textDecorationLine: "underline" }}>refresh</Text>
        </View>
      </TouchableOpacity>
      <View>
        <Text style={styles.mainText}>Vehicle Information</Text>
        <View style={styles.outerContends}>
          <View style={styles.innerContends}>
            <Text
              style={{ alignSelf: "stretch", padding: 10, fontWeight: "500" }}
            >
              Vehicle Automaker
            </Text>
            <CustomInput value={vehicle[0].vehicleAutomaker} editable={false} />
          </View>
          <View style={styles.innerContends}>
            <Text
              style={{ alignSelf: "stretch", padding: 10, fontWeight: "500" }}
            >
              Vehicle Model
            </Text>
            <CustomInput value={vehicle[0].vehicleModel} editable={false} />
          </View>
          <View style={styles.innerContends}>
            <Text
              style={{ alignSelf: "stretch", padding: 10, fontWeight: "500" }}
            >
              Vehicle Manufacture Year
            </Text>
            <CustomInput
              value={String(vehicle[0].vehicleManufactureYear)}
              editable={false}
            />
          </View>
          <View style={styles.innerContends}>
            <Text
              style={{ alignSelf: "stretch", padding: 10, fontWeight: "500" }}
            >
              Vehicle Plate Number
            </Text>
            <CustomInput
              value={vehicle[0].vehiclePlateNumber}
              editable={false}
            />
          </View>
          <View style={styles.innerContends}>
            <Text
              style={{ alignSelf: "stretch", padding: 10, fontWeight: "500" }}
            >
              Vehicle Color
            </Text>
            <CustomInput value={vehicle[0].vehicleColor} editable={false} />
          </View>
          <View style={styles.innerContends}>
            <Text
              style={{ alignSelf: "stretch", padding: 10, fontWeight: "500" }}
            >
              Device IMEI
            </Text>
            <CustomInput value={vehicle[0].deviceIMEI} editable={false} />
          </View>
        </View>
        <Text style={styles.mainText}>Registration Information</Text>
        <View style={styles.outerContends}>
          <View>
            <Text
              style={{ alignSelf: "stretch", padding: 10, fontWeight: "500" }}
            >
              Vehicle Classification
            </Text>
            <CustomInput
              value={registration[0].vehicleClassification}
              editable={false}
            />
          </View>
          <View>
            <Text
              style={{ alignSelf: "stretch", padding: 10, fontWeight: "500" }}
            >
              Expiry Date
            </Text>
            {}
            <CustomInput
              value={
                registration[0].expiryDate === undefined
                  ? " "
                  : registration[0].expiryDate.split("T")[0]
              }
              editable={false}
            />
          </View>
        </View>
        <Text style={styles.mainText}>Insurance Information</Text>
        <View style={styles.outerContends}>
          <View>
            <Text
              style={{ alignSelf: "stretch", padding: 10, fontWeight: "500" }}
            >
              Insurance Type
            </Text>

            <CustomInput value={insurance[0].insuranceTy} editable={false} />
          </View>
          <View>
            <Text
              style={{ alignSelf: "stretch", padding: 10, fontWeight: "500" }}
            >
              Expiry Date
            </Text>
            <CustomInput
              value={
                insurance[0].expiryDate === undefined
                  ? " "
                  : insurance[0].expiryDate.split("T")[0]
              }
              editable={false}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  mainText: {
    textAlign: "center",
    backgroundColor: "#a8cbe6",
    marginTop: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#5a5e61",

    fontSize: 18,
    fontWeight: "bold"
  },
  outerBox: { borderWidth: 0.5, margin: 6 },
  innerBox: {}
});
