import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { vehicleOwnerAtom } from "../../store/userStore";
import CustomInput from "../../Components/CustomInput/CustomInput";
import { ScrollView } from "react-native-gesture-handler";
import { vehicleApi } from "../../../api/AxiosApi";

export default function YourVehiclesScreen() {
  // testing readio button

  const [vehicleOwner] = useAtom(vehicleOwnerAtom);

  const [vehicle, setVehicle] = useState([{}]);
  const [registration, setRegistration] = useState([{}]);

  const geVehicle = async () => {
    try {
      const res = await vehicleApi.getVehicle(vehicleOwner.vehicleId);
      setVehicle(res.data);
      getRegistration();
      // console.log("vehicle: ", vehicle);
    } catch (error) {
      console.log("error", JSON.stringify(error));
    }
  };

  const getRegistration = async () => {
    try {
      const reg = await vehicleApi.getRegistration(vehicle[0].regId);
      setRegistration(reg.data);
      // console.log("reg info:", reg.data);
    } catch (error) {
      //console.log("error", JSON.stringify(error));
    }
  };
  useEffect(() => {
    geVehicle();
  }, []);

  return (
    <ScrollView
      style={{ backgroundColor: "#f0f9ff" }}
      showsVerticalScrollIndicator={false}
    >
      <View>
        <Text style={styles.mainText}>Vehicle Information</Text>
        <View style={styles.outerContends}>
          <View style={styles.innerContends}>
            <Text
              style={{ alignSelf: "stretch", padding: 10, fontWeight: "500" }}
            >
              Vehicle Automaker
            </Text>
            <CustomInput value={vehicle[0].vehicleAutomaker} />
          </View>
          <View style={styles.innerContends}>
            <Text
              style={{ alignSelf: "stretch", padding: 10, fontWeight: "500" }}
            >
              Vehicle Model
            </Text>
            <CustomInput value={vehicle[0].vehicleModel} />
          </View>
          <View style={styles.innerContends}>
            <Text
              style={{ alignSelf: "stretch", padding: 10, fontWeight: "500" }}
            >
              Vehicle Manufacture Year
            </Text>
            <CustomInput value={String(vehicle[0].vehicleManufactureYear)} />
          </View>
          <View style={styles.innerContends}>
            <Text
              style={{ alignSelf: "stretch", padding: 10, fontWeight: "500" }}
            >
              Vehicle Plate Number
            </Text>
            <CustomInput value={vehicle[0].vehiclePlateNumber} />
          </View>
          <View style={styles.innerContends}>
            <Text
              style={{ alignSelf: "stretch", padding: 10, fontWeight: "500" }}
            >
              Vehicle Color
            </Text>
            <CustomInput value={vehicle[0].vehicleColor} />
          </View>
          <View style={styles.innerContends}>
            <Text
              style={{ alignSelf: "stretch", padding: 10, fontWeight: "500" }}
            >
              Device IMEI
            </Text>
            <CustomInput value={vehicle[0].deviceIMEI} />
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
            <CustomInput value={registration[0].vehicleClassification} />
          </View>
          <View>
            <Text
              style={{ alignSelf: "stretch", padding: 10, fontWeight: "500" }}
            >
              Expiry Date
            </Text>

            <CustomInput
              value={
                registration[0].expiryDate === undefined
                  ? " "
                  : registration[0].expiryDate.split("T")[0]
              }
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
            <CustomInput />
          </View>
          <View>
            <Text
              style={{ alignSelf: "stretch", padding: 10, fontWeight: "500" }}
            >
              Expiry Date
            </Text>
            <CustomInput />
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
