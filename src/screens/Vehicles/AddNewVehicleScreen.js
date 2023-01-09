import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { Button, TextInput } from "react-native-paper";
import CustomInput from "../../Components/CustomInput/CustomInput";
import { ScrollView } from "react-native-gesture-handler";
import { SelectList } from "react-native-dropdown-select-list";
import { useNavigation } from "@react-navigation/native";
import { firstTimeAtom, vehicleOwnerId } from "../../store/userStore";
import { useAtom } from "jotai";
import CustomDatePicker from "../../Components/CustomDatePicker/CustomDatePicker";

export default function AddNewVehiclesScreen() {
  const navigation = useNavigation("");
  const [firstTime, setFirstTime] = useAtom(firstTimeAtom);
  const [id, setId] = useAtom(vehicleOwnerId);

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
  const [selectedVehicleAutomaker, setSelectedVehicleAutomaker] = useState("");
  const [VehicleModel, selectVehicleModel] = useState("");
  const [modelOptions, setModelOptions] = useState([]);

  useEffect(
    () => {
      console.log(id);
      const filteredModels = models[selectedVehicleAutomaker];
      setModelOptions(filteredModels);
    },
    [selectedVehicleAutomaker]
  );
  const setVehicle = async () => {
    try {
    } catch (error) {}
  };

  function nav() {
    // setVehicle();
    setFirstTime(false);
  }

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
      <ScrollView style={{ backgroundColor: "white" }}>
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
              <CustomInput />
            </View>
            <View style={styles.innerContainer}>
              <Text style={styles.headerText}>Vehicle Plate Number</Text>
              <CustomInput />
            </View>
            <View style={styles.innerContainer}>
              <Text style={styles.headerText}>Vehicle Color</Text>
              <CustomInput />
            </View>
          </View>
          <Text style={styles.mainText}>Vehicle Registration</Text>
          <View style={styles.outerContainer}>
            <View>
              <Text style={styles.headerText}>Vehicle Classification</Text>
              <CustomInput />
            </View>
            <View>
              <Text>Expiry Date</Text>
              <CustomDatePicker />
            </View>
          </View>
          <Text style={styles.mainText}>Vehicle Insurance</Text>
          <View style={styles.outerContainer}>
            <View>
              <Text style={styles.headerText}>Insurance Type</Text>
              <CustomInput />
            </View>
            <View>
              <Text style={styles.headerText}>Expiry Date</Text>
              <CustomDatePicker />
            </View>
          </View>
          <View style={{ justifyContent: "center", paddingHorizontal: 60 }}>
            <CustomButton text="Add Vehicle" onPress={nav} />
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
    borderRadius: 800,
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
