import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { Button, TextInput } from "react-native-paper";
import CustomInput from "../../Components/CustomInput/CustomInput";
import { ScrollView } from "react-native-gesture-handler";
import { SelectList } from "react-native-dropdown-select-list";

export default function AddNewVehiclesScreen() {
  //   if (true) {
  //     return (
  //       <View>
  //         <CustomButton text="Add Vehicle" onPress={() => {}} />
  //       </View>
  //     );
  //   }
  const [VehicleAutomaker, selectVehicleAutomaker] = useState("mer");
  const [VehicleModel, selectVehicleModel] = useState("");

  const automakers = [
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
  ];

  // const models = {
  //   mer: [
  //     { key: "cClass", value: "Mercedes Benz C-Class" },
  //     { key: "eClass", value: "Mercedes Benz E-Class" },
  //     { key: "sClass", value: "Mercedes Benz S-Class" },
  //     { key: "gClass", value: "Mercedes Benz G-Class" }
  //   ],
  //   bmw: [
  //     { key: "3Ser", value: "BMW 3-Series" },
  //     { key: "4Ser", value: "BMW 4-Series" },
  //     { key: "5Ser", value: "BMW 5-Series" }
  //   ]
  // };

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
    ]
  };

  if (true)
    return (
      <ScrollView style={{ backgroundColor: "white" }}>
        <View>
          <Text style={styles.mainText}>Vehicle Information</Text>
          <View style={styles.outerContends}>
            <View style={styles.innerContends}>
              <Text>Vehicle Automaker</Text>
              <SelectList
                setSelected={selectVehicleAutomaker}
                data={automakers}
                placeholder={"Select Automaker"}
                defaultOption={{ key: "mer", value: "Mercedes Benz" }}
              />
            </View>
            <View style={styles.innerContends}>
              <Text>Vehicle Model</Text>
              <SelectList
                setSelected={selectVehicleModel}
                data={models[automakers]}
                placeholder={"Select Model"}
                defaultOption={models[automakers[0]]}
              />
            </View>
            <View style={styles.innerContends}>
              <Text>Vehicle Manufacture Year</Text>
              <CustomInput />
            </View>
            <View style={styles.innerContends}>
              <Text>Vehicle Plate Number</Text>
              <CustomInput />
            </View>
            <View style={styles.innerContends}>
              <Text>Vehicle Color</Text>
              <CustomInput />
            </View>
          </View>
          <Text style={styles.mainText}>Registration Information</Text>
          <View style={styles.outerContends}>
            <View>
              <Text>Vehicle Classification</Text>
              <CustomInput />
            </View>
            <View>
              <Text>Expiry Date</Text>
              <CustomInput />
            </View>
          </View>
          <Text style={styles.mainText}>Insurance Information</Text>
          <View style={styles.outerContends}>
            <View>
              <Text>Insurance Type</Text>
              <CustomInput />
            </View>
            <View>
              <Text>Expiry Date</Text>
              <CustomInput />
            </View>
          </View>
          <View>
            <CustomButton text="Add Vehicle" />
          </View>
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  mainText: {
    textAlign: "center",
    backgroundColor: "#F9FBFC",
    marginTop: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "snow",
    borderStyle: "dashed",
    fontSize: 18,
    fontWeight: "bold"
  },
  outerContends: { margin: 6, padding: 6 },
  innerContends: { paddingVertical: 10 }
});
