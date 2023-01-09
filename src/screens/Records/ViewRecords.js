import { StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function ViewRecords() {
  const route = useRoute();
  // console.log(route.params.RepairPart);
  return (
    <View style={styles.main}>
      <Text>
        The Repair Part is :{"as"}{" "}
      </Text>
      <Text>
        The Part is :{"Part"}{" "}
      </Text>
      <Text>
        Description :{"Description"}
      </Text>
      <Text>
        The Price is :{"price"}
      </Text>
      <Text>
        The Workshop is :{"ss"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "center",
    marginTop: 20
  }
});
