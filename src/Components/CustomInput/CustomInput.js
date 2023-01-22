import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function CustomInput({
  value,
  setValue,
  placeholder,
  secureTextEntry,
  onFocus,
  keyboardType,
  onEndEditing,
  onSubmitEditing,
  editable
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
        keyboardType={keyboardType}
        onEndEditing={onEndEditing}
        onSubmitEditing={onSubmitEditing}
        editable={editable}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#edf5fa",
    width: "100%",
    borderColor: "#e8e8e8",
    borderWidth: 1.5,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 7,
    padding: 10
  },
  input: {}
});
