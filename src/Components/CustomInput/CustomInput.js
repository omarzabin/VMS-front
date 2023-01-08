import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function CustomInput({
  value,
  setValue,
  placeholder,
  secureTextEntry,
  onFocus
}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={text => setValue(text)}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onFocus={onFocus}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    borderColor: "#e8e8e8",
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 7,
    padding: 10
  },
  input: {}
});
