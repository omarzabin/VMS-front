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

export default function AddRecordScreen() {
  const [RepairPart, setRepairPart] = useState("");
  const [Part, setPart] = useState("");
  const [Description, setDescription] = useState("");
  const [Workshop, setWorkshop] = useState("");
  const [price, setPrice] = useState("");

  function clear() {
    (Part = null), (Description = null), (price = null), (Workshop = null);
  }

  const navigation = useNavigation();

  function OnSubmit() {
    navigation.navigate("ViewRecords", {
      RepairPart: RepairPart,
      Part: Part,
      Description: Description,
      price: price,
      Workshop: Workshop
    });
  }

  const categories = [
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
    <View style={styles.root}>
      <ScrollView>
        <Text style={styles.title}>Maintenance Records</Text>
        <View style={styles.container}>
          <SelectList
            data={categories}
            search
            maxHeight={200}
            boxStyles={styles.box}
            labelField="label"
            valueField="value"
            searchPlaceholder="Search..."
            setSelected={setRepairPart}
            placeholder={"Vehicle Repair"}
            selected={e => setRepairPart(e)}
          />
          <TextInput
            style={styles.Part}
            placeholder={"Part"}
            placeholderTextColor={"black"}
            onChangeText={text => setPart(text)}
          />

          <TextInput
            style={styles.Description}
            placeholder="Description :"
            placeholderTextColor={"black"}
            onChangeText={text => setDescription(text)}
          />

          <TextInput
            style={styles.price}
            placeholder="Price"
            placeholderTextColor={"black"}
            onChangeText={text => setPrice(text)}
          />

          <TextInput
            style={styles.Workshop}
            placeholder="WorkShop"
            placeholderTextColor={"black"}
            onChangeText={text => setWorkshop(text)}
          />

          <CustomButton
            style={styles.button}
            text="Submit"
            type="submit"
            onPress={OnSubmit}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "lightblue",
    marginTop: 20
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
    flex: 0.79,
    borderRadius: 20,
    padding: 30,
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
