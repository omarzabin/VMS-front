import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Alert from "./Alert";
import Icon from "react-native-vector-icons/Ionicons";
import { useAtom } from "jotai";
import { vehicleOwnerAtom } from "../../store/userStore";
import { ScrollView } from "react-native-gesture-handler";

const AlertDetails = ({ route, navigation }) => {
  const {
    time,
    temp,
    long,
    lat,
    speed,
    vehicleIGN,
    addressAr,
    pNumber,
    extProp,
    isScrollable = false,
    locationId,
    streetSpeed
  } = route.params;
  return (
    <ScrollView>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack("Alerts")}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              paddingStart: 10
            }}
          >
            <Icon name="md-return-up-back-outline" color="black" size={30} />
          </View>
        </TouchableOpacity>

        <Alert
          streetSpeed={JSON.stringify(streetSpeed)}
          time={time}
          temp={JSON.stringify(temp)}
          long={long}
          lat={lat}
          speed={JSON.stringify(speed)}
          vehicleIGN={JSON.stringify(vehicleIGN)}
          addressAr={JSON.stringify(addressAr)}
          pNumber={JSON.stringify(pNumber)}
          extProp={extProp}
          isScrollable
        />
      </View>
    </ScrollView>
  );
};

export default AlertDetails;
