import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Pressable,
  TextInput
} from "react-native";
import { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import DatePicker from "react-native-modern-datepicker";
import { recordsApi } from "../../../api/AxiosApi";
import { useAtom } from "jotai";
import { vehicleOwnerAtom } from "../../store/userStore";

export default function AddRecordScreen() {
  const [repairPart, setRepairPart] = useState("");
  const [part, setPart] = useState("");
  const [oilLife, setOilLife] = useState(" ");
  const [description, setDescription] = useState("");
  const [workshop, setWorkshop] = useState("");
  const [price, setPrice] = useState("");
  const [selectedDate, setSelectedDate] = useState();
  const [repairDate, setRepairDate] = useState();

  const [vehicleOwner] = useAtom(vehicleOwnerAtom);

  const addRecord = async () => {
    try {
      const repId = await recordsApi.addRecord({
        PartName: part,
        Description: description,
        Price: Number(price),
        Workshop: workshop,
        OilLife: oilLife !== " " ? Number(oilLife) : 0,
        VehicleId: vehicleOwner.vehicleId,
        RepairDate: new Date(repairDate)
      });
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };

  const categories = [
    { key: "Oil", value: "Oil change" },
    { key: "Battery Service", value: "Battery Service" },
    { key: "AC Cooling & Heating", value: "AC Cooling & Heating" },
    { key: "Security locking and keys", value: "Security locking and keys" },
    { key: "Brake Services", value: "Brake Services" },
    { key: "Windows and  mirrors", value: "Windows and  mirrors" },
    { key: "Clutch and GearBox", value: "Clutch and GearBox" },
    { key: "Steering And Suspension", value: " Steering And Suspension" },
    { key: "Engine", value: "Engine" },
    { key: "Tyres", value: "Tyres" },
    { key: "Body Repair", value: "Body Repair" }
  ];
  return (
    <ScrollView>
      <View style={styles.root}>
        {/* <Text style={styles.title}>Maintenance Records</Text> */}

        <View style={styles.container}>
          <SelectList
            data={categories}
            search
            maxHeight={200}
            boxStyles={styles.box}
            searchPlaceholder="Search..."
            setSelected={setRepairPart}
            placeholder={"Select spare part "}
            selected={e => setRepairPart(e)}
          />

          {repairPart !== "Oil"
            ? <TextInput
                style={styles.Part}
                placeholder={"Part"}
                onChangeText={text => setPart(text)}
              />
            : <TextInput
                style={styles.Part}
                placeholder={"Oil life in km"}
                onChangeText={text => {
                  setOilLife(Number(text));
                  setPart("oil");
                }}
                keyboardType={"numeric"}
              />}
          <TextInput
            style={styles.Description}
            placeholder="Description :"
            onChangeText={text => setDescription(text)}
          />

          <TextInput
            style={styles.price}
            placeholder="Price"
            onChangeText={text => setPrice(text)}
            keyboardType={"numeric"}
          />

          <TextInput
            style={styles.Workshop}
            placeholder="WorkShop"
            onChangeText={text => setWorkshop(text)}
          />
          <Text style={{ paddingTop: 15 }}>Repair Date</Text>
          <DatePicker
            mode="calendar"
            onSelectedChange={date => {
              setSelectedDate(date);
              setRepairDate(date);
            }}
          />

          <CustomButton
            style={styles.button}
            text="Submit"
            type="submit"
            onPress={() => {
              addRecord();
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#a8cbe6",
    paddingTop: 15
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "051C60",
    margin: 10,
    paddingTop: 40,
    textAlign: "center",
    paddingHorizontal: 100,
    paddingBottom: 40
  },
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 30,
    textAlign: "center"
  },
  box: {
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8
  },
  Part: {
    borderWidth: 1,
    marginTop: 20,
    padding: 12
  },
  Description: {
    borderWidth: 1,
    marginTop: 20,
    paddingBottom: 60,
    padding: 12
  },
  price: {
    borderWidth: 1,
    marginTop: 20,
    padding: 12
  },
  Workshop: {
    borderWidth: 1,
    marginTop: 20,
    padding: 12
  }
});
