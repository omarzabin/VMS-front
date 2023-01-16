import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { addVehicle, updateOwnerApi } from "../../../api/AxiosApi";
import CustomInput from "../../Components/CustomInput/CustomInput";
import { ScrollView } from "react-native-gesture-handler";
import { SelectList } from "react-native-dropdown-select-list";
import {
  firstTimeAtom,
  vehicleOwnerAtom,
  deviceIMEIAtom
} from "../../store/userStore";
import { useAtom } from "jotai";
import CustomDatePicker from "../../Components/CustomDatePicker/CustomDatePicker";
import DatePicker from "react-native-modern-datepicker";

export default function AddNewVehiclesScreen() {
  const [vehicleOwner, setVehicleOwner] = useAtom(vehicleOwnerAtom);

  const [firstTime, setFirstTime] = useAtom(firstTimeAtom);
  const [selectedVehicleAutomaker, setSelectedVehicleAutomaker] = useState("");
  const [vehicleModel, selectVehicleModel] = useState("");
  const [modelOptions, setModelOptions] = useState([]);

  const [vehicleManufactureYear, setVehicleManufactureYear] = useState();
  const [plateNumber, setPlateNumber] = useState();
  const [vehicleColor, setVehicleColor] = useState();
  const [vClassification, setVClassification] = useState();
  const [insuranceTy, setInsuranceTy] = useState();
  const [deviceIMEI, setDeviceIMEI] = useAtom(deviceIMEIAtom);
  const [expiryDateReg, setExpiryDateReg] = useState();
  const [expiryDateIns, setExpiryDateIns] = useState();

  const [selectedDate, setSelectedDate] = useState();

  function save() {
    console.log(`first`);
    addVehicleInfo();
  }

  const addVehicleInfo = async () => {
    try {
      const regId = await addVehicle.addRegistration({
        vehicleClassification: vClassification,
        expiryDate: new Date(expiryDateReg)
      });
      console.log(regId.data);
      const insId = await addVehicle.addInsurance({
        insuranceTy: vClassification,
        expiryDate: new Date(expiryDateIns)
      });
      console.log(insId.data);
      const vId = await addVehicle.addVehicle({
        vehicleModel: modelOptions[vehicleModel.indexOf(vehicleModel)].value,
        vehicleAutomaker:
          VehicleAutomakerOptions[
            selectedVehicleAutomaker.indexOf(selectedVehicleAutomaker)
          ].value,
        VehicleManufactureYear: Number(vehicleManufactureYear),
        plateNumber: plateNumber,
        vehicleColor: vehicleColor,
        regId: regId.data,
        insId: insId.data,
        deviceIMEI: String(deviceIMEI)
      });
      console.log(vId.data);
      console.log(vehicleOwner);
      const res = await updateOwnerApi.updateVehicleId(
        vehicleOwner.ownerId,
        vId.data
      );
      setFirstTime(false);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };

  const [VehicleAutomakerOptions] = useState([
    { key: "mer", value: "Mercedes Benz" },
    { key: "bmw", value: "BMW" },
    { key: "vol", value: "Volkswagen" },
    { key: "toy", value: "Toyota" },
    { key: "hon", value: "Honda" },
    { key: "mis", value: "Mitsubishi" },
    { key: "che", value: "Chevrolet" },
    { key: "for", value: "Ford" },
    { key: "hyu", value: "Hyundai" },
    { key: "kia", value: "Kia" }
  ]);

  useEffect(
    () => {
      const filteredModels = models[selectedVehicleAutomaker];
      setModelOptions(filteredModels);
    },
    [selectedVehicleAutomaker]
  );

  const models = {
    mer: [
      { key: "1", value: "Mercedes Benz C-Class" },
      { key: "2", value: "Mercedes Benz E-Class" },
      { key: "3", value: "Mercedes Benz S-Class" },
      { key: "4", value: "Mercedes Benz G-Class" }
    ],
    bmw: [
      { key: "5", value: "BMW 3-Series" },
      { key: "6", value: "BMW 4-Series" },
      { key: "7", value: "BMW 5-Series" }
    ],
    toy: [{ key: "8", value: "Camry" }]
  };

  if (true)
    return (
      <ScrollView
        style={{ backgroundColor: "white" }}
        showsVerticalScrollIndicator={false}
      >
        <Text
          style={{
            fontSize: 18,
            color: "#808080",
            alignSelf: "center",
            margin: 7
          }}
        >
          Fill All needed information's below
        </Text>
        <View>
          <Text style={styles.mainText}>Vehicle</Text>
          <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
              <Text style={styles.headerText}>Vehicle Automaker</Text>
              <SelectList
                setSelected={setSelectedVehicleAutomaker}
                data={VehicleAutomakerOptions}
                placeholder={"Select Automaker"}
              />
            </View>
            <View style={styles.innerContainer}>
              <Text style={styles.headerText}>Vehicle Model</Text>
              <SelectList
                setSelected={selectVehicleModel}
                data={modelOptions || []}
                placeholder={"Select Model"}
                defaultOption={[]}
              />
            </View>
            <View style={styles.innerContainer}>
              <Text style={styles.headerText}>Vehicle Manufacture Year</Text>
              <CustomInput
                value={vehicleManufactureYear}
                setValue={setVehicleManufactureYear}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.innerContainer}>
              <Text style={styles.headerText}>Vehicle Plate Number</Text>
              <CustomInput value={plateNumber} setValue={setPlateNumber} />
            </View>
            <View style={styles.innerContainer}>
              <Text style={styles.headerText}>Vehicle Color</Text>
              <CustomInput value={vehicleColor} setValue={setVehicleColor} />
            </View>
            <View style={styles.innerContainer}>
              <Text style={styles.headerText}>Device IMEI</Text>
              <CustomInput
                value={deviceIMEI}
                setValue={setDeviceIMEI}
                keyboardType="numeric"
              />
              {console.log("device: ", JSON.stringify(deviceIMEI))}
              {console.log("owner", vehicleOwner)}
            </View>
          </View>
          <Text style={styles.mainText}>Vehicle Registration</Text>
          <View style={styles.outerContainer}>
            <View>
              <Text style={styles.headerText}>Vehicle Classification</Text>
              <CustomInput
                value={vClassification}
                setValue={setVClassification}
              />
            </View>
            <View>
              <Text>Expiry Date</Text>
              <DatePicker
                mode="calendar"
                onSelectedChange={date => {
                  setSelectedDate(date);
                  setExpiryDateReg(date);
                }}
              />
              {console.log("exp: ", expiryDateReg)}
              {console.log("owner Id", vehicleOwner.ownerId)}
            </View>
          </View>
          <Text style={styles.mainText}>Vehicle Insurance</Text>
          <View style={styles.outerContainer}>
            <View>
              <Text style={styles.headerText}>Insurance Type</Text>
              <CustomInput value={insuranceTy} setValue={setInsuranceTy} />
            </View>
            <View>
              <Text>Expiry Date</Text>
              <DatePicker
                mode="calendar"
                onSelectedChange={date => {
                  setSelectedDate(date);
                  setExpiryDateIns(date);
                }}
              />
            </View>
          </View>
          <View style={{ justifyContent: "center", paddingHorizontal: 60 }}>
            <CustomButton text="Add Vehicle" onPress={save} />
          </View>
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  mainText: {
    textAlign: "center",
    marginTop: 0.5,
    paddingVertical: 3,
    borderWidth: 1,

    backgroundColor: "#E0E0E0",

    fontSize: 18,
    fontWeight: "bold"
  },
  outerContainer: {
    margin: 6,
    padding: 1,
    borderWidth: 2,
    borderColor: "#F8F8F8"
  },
  innerContainer: {
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    borderColor: "black",
    borderRadius: 10
  },
  headerText: {
    color: "red",
    marginHorizontal: 5
  }
});
