import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import CustomButton from "../../Components/CustomButton/CustomButton";
import {
  vehicleApi,
  updateOwnerApi,
  VehicleRegistrationApi,
  insuranceApi
} from "../../../api/AxiosApi";
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
import { RadioButton } from "react-native-paper";
export default function AddNewVehiclesScreen() {
  const [checkedRs, setCheckedRs] = useState("Public");
  const [checkedIs, setCheckedIs] = useState("Comprehensive");

  const [vehicleOwner, setVehicleOwner] = useAtom(vehicleOwnerAtom);

  const [firstTime, setFirstTime] = useAtom(firstTimeAtom);
  const [selectedVehicleAutomaker, setSelectedVehicleAutomaker] = useState("");
  const [vehicleModel, selectVehicleModel] = useState("");
  const [modelOptions, setModelOptions] = useState([]);

  const [vehicleManufactureYear, setVehicleManufactureYear] = useState();
  const [vehiclePlateNumber, setVehiclePlateNumber] = useState();
  const [vehicleColor, setVehicleColor] = useState();
  // const [vClassification, setVClassification] = useState();
  // const [insuranceTy, setInsuranceTy] = useState();
  const [deviceIMEI, setDeviceIMEI] = useAtom(deviceIMEIAtom);
  const [expiryDateReg, setExpiryDateReg] = useState();
  const [expiryDateIns, setExpiryDateIns] = useState();

  const [selectedDate, setSelectedDate] = useState();

  function save() {
    addVehicleInfo();
  }

  const addVehicleInfo = async () => {
    try {
      const regId = await VehicleRegistrationApi.addRegistration({
        vehicleClassification: checkedRs,
        expiryDate: new Date(expiryDateReg)
      });
      const insId = await insuranceApi.addInsurance({
        insuranceTy: checkedIs,
        expiryDate: new Date(expiryDateIns)
      });
      const vId = await vehicleApi.addVehicle({
        vehicleModel:
          modelOptions[modelOptions.findIndex(obj => obj.key === vehicleModel)]
            .value,
        vehicleAutomaker:
          VehicleAutomakerOptions[
            VehicleAutomakerOptions.findIndex(
              obj => obj.key === selectedVehicleAutomaker
            )
          ].value,
        VehicleManufactureYear: Number(vehicleManufactureYear),
        vehiclePlateNumber: String(vehiclePlateNumber),
        vehicleColor: vehicleColor,
        regId: regId.data,
        insId: insId.data,
        deviceIMEI: String(deviceIMEI)
      });
      const res = await updateOwnerApi.updateVehicleId(
        vehicleOwner.ownerId,
        vId.data
      );
      const temp = { ...vehicleOwner, vehicleId: vId.data };
      setVehicleOwner(temp);
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

  return (
    <ScrollView
      style={{ backgroundColor: "#f0f9ff" }}
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
            <CustomInput
              placeholder={"xx-xxxxx"}
              value={vehiclePlateNumber}
              setValue={setVehiclePlateNumber}
            />
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.headerText}>Vehicle Color</Text>
            <CustomInput value={vehicleColor} setValue={setVehicleColor} />
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.headerText}>Device IMEI</Text>
            <CustomInput setValue={setDeviceIMEI} keyboardType="numeric" />
          </View>
        </View>
        <Text style={styles.mainText}>Vehicle Registration</Text>
        <View style={styles.outerContainer}>
          <View style={styles.innerContainer}>
            <Text style={styles.headerText}>Vehicle Classification</Text>
            <View
              style={[
                { flexDirection: "column", borderWidth: 0.5 },
                styles.innerContainer
              ]}
            >
              <View style={{ flexDirection: "row" }}>
                <RadioButton
                  value="Public"
                  status={checkedRs === "Public" ? "checked" : "unchecked"}
                  onPress={() => setCheckedRs("Public")}
                />
                <Text style={{ paddingTop: 9 }}>Public (عمومي)</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <RadioButton
                  value="Private"
                  status={checkedRs === "Private" ? "checked" : "unchecked"}
                  onPress={() => setCheckedRs("Private")}
                />
                <Text style={{ paddingTop: 9 }}>Private (خصوصي)</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <RadioButton
                  value="Diplomat"
                  status={checkedRs === "Diplomat" ? "checked" : "unchecked"}
                  onPress={() => setCheckedRs("Diplomat")}
                />
                <Text style={{ paddingTop: 9 }}>Diplomat (دبلوماسي)</Text>
              </View>
            </View>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.headerText}>Expiry Date</Text>
            <DatePicker
              mode="calendar"
              onSelectedChange={date => {
                setSelectedDate(date);
                setExpiryDateReg(date);
              }}
            />
          </View>
        </View>
        <Text style={styles.mainText}>Vehicle Insurance</Text>
        <View style={styles.outerContainer}>
          <View style={styles.innerContainer}>
            <Text style={styles.headerText}>Insurance Type</Text>
            <View
              style={[
                { flexDirection: "column", borderWidth: 0.5 },
                styles.innerContainer
              ]}
            >
              <View style={{ flexDirection: "row" }}>
                <RadioButton
                  value="Comprehensive"
                  status={
                    checkedIs === "Comprehensive" ? "checked" : "unchecked"
                  }
                  onPress={() => setCheckedIs("Comprehensive")}
                />
                <Text style={{ paddingTop: 9 }}>Comprehensive (شامل)</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <RadioButton
                  value="Mandatory"
                  status={checkedIs === "Mandatory" ? "checked" : "unchecked"}
                  onPress={() => setCheckedIs("Mandatory")}
                />
                <Text style={{ paddingTop: 9 }}>
                  Mandatory (إلزامي ضد الغير)
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <RadioButton
                  value="Complementary"
                  status={
                    checkedIs === "Complementary" ? "checked" : "unchecked"
                  }
                  onPress={() => setCheckedIs("Complementary")}
                />
                <Text style={{ paddingTop: 9 }}>Complementary (تكميلي)</Text>
              </View>
            </View>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.headerText}>Expiry Date</Text>
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
    backgroundColor: "#a8cbe6",
    marginTop: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#5a5e61",

    fontSize: 18,
    fontWeight: "bold"
  },
  outerContainer: {
    padding: 1
  },
  innerContainer: {
    margin: 10,
    paddingVertical: 10
  },
  headerText: {
    marginHorizontal: 5
  }
});
