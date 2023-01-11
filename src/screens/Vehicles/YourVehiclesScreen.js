import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { Button, TextInput } from "react-native-paper";
import CustomInput from "../../Components/CustomInput/CustomInput";
import { ScrollView } from "react-native-gesture-handler";

export default function YourVehiclesScreen() {
  //   if (true) {
  //     return (
  //       <View>
  //         <CustomButton text="Add Vehicle" onPress={() => {}} />
  //       </View>
  //     );
  //   }

  if (true)
    return (
      <ScrollView style={{ backgroundColor: "#F9FBFC" }} showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.mainText}>Vehicle Information</Text>
          <View style={styles.outerContends}>
            <View style={styles.innerContends}>
              <Text style={{alignSelf:'stretch',padding:10,fontWeight:'500'}}>Vehicle Automaker</Text>
              <CustomInput />
            </View>
            <View style={styles.innerContends}>
              <Text style={{alignSelf:'stretch',padding:10,fontWeight:'500'}}>Vehicle Model</Text>
              <CustomInput />
            </View>
            <View style={styles.innerContends}>
              <Text style={{alignSelf:'stretch',padding:10,fontWeight:'500'}}>Vehicle Manufacture Year</Text>
              <CustomInput />
            </View>
            <View style={styles.innerContends}>
              <Text style={{alignSelf:'stretch',padding:10,fontWeight:'500'}}>Vehicle Plate Number</Text>
              <CustomInput />
            </View>
            <View style={styles.innerContends}>
              <Text style={{alignSelf:'stretch',padding:10,fontWeight:'500'}}>Vehicle Color</Text>
              <CustomInput />
            </View>
            <View style={styles.innerContends}>
              <Text style={{alignSelf:'stretch',padding:10,fontWeight:'500'}}>Device IMEI</Text>
              <CustomInput />
            </View>
          </View>
          <Text style={styles.mainText}>Registration Information</Text>
          <View style={styles.outerContends}>
            <View>
              <Text style={{alignSelf:'stretch',padding:10,fontWeight:'500'}}>Vehicle Classification</Text>
              <CustomInput />
            </View>
            <View>
              <Text style={{alignSelf:'stretch',padding:10,fontWeight:'500'}}>Expiry Date</Text>
              <CustomInput />
            </View>
          </View>
          <Text style={styles.mainText}>Insurance Information</Text>
          <View style={styles.outerContends}>
            <View>
              <Text style={{alignSelf:'stretch',padding:10,fontWeight:'500'}}>Insurance Type</Text>
              <CustomInput />
            </View>
            <View>
              <Text style={{alignSelf:'stretch',padding:10,fontWeight:'500'}}>Expiry Date</Text>
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
    backgroundColor: "red",
    marginTop: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "snow",
    borderStyle: "dashed",
    fontSize: 18,
    fontWeight: "bold",
    
  },
  outerBox: { borderWidth: 0.5, margin: 6 },
  innerBox: {}
});
