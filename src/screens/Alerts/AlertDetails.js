import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Alert from "./Alert";
import Icon from "react-native-vector-icons/Ionicons";

const AlertDetails = () => {
  const navigation = useNavigation();
  return (
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
        temp={100}
        long={100}
        lat={100}
        speed={"1111"}
        vehicleIGN={0}
        addressAr={"address"}
        pNumber="37-26283"
        extProp={
          '{"239":0,"240":0,"200":0,"69":1,"1":0,"179":0,"2":0,"113":89,"246":0,"252":0,"66":12769,"24":0,"67":3999,"9":43,"16":3934778}'
        }
        isScrollable
      />
    </View>
  );
};

export default AlertDetails;
