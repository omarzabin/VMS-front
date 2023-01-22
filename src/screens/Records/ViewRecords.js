import { StyleSheet, Text, View, ScrollView } from "react-native";

import Record from "./Record";
import { useAtom } from "jotai";
import { vehicleOwnerAtom } from "../../store/userStore";
import { recordsApi } from "../../../api/AxiosApi";
import { useEffect, useState } from "react";

export default function ViewRecords() {
  const [vehicleOwner] = useAtom(vehicleOwnerAtom);

  const [data, setData] = useState([]);

  const getRepair = async () => {
    try {
      const { data } = await recordsApi.getRecord(vehicleOwner.vehicleId);
      setData(data);
    } catch (error) {
      console.log("error", JSON.stringify(error));
    }
  };

  useEffect(() => {
    getRepair();
  }, []);

  return (
    <ScrollView>
      {data.map(item =>
        <Record
          part={item.partName}
          description={item.description}
          price={item.price}
          workshop={item.workShop}
          oilLife={item.oilLife}
          // repairDate
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: "#e8e8e8"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "051C60",
    margin: 10,
    paddingTop: 40
  },

  row: {
    alignContent: "flex-start",

    flexDirection: "row"
  },
  rowtitle: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingRight: 250,
    padding: 10
  },
  button: {
    padding: 25
  }
});
