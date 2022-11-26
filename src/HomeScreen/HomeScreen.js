import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.main}>
      <Text style={styles.Hometxt}>Home screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
 main:{
  flex:1,
  backgroundColor:'#F9FBFC',
  marginBottom:200,
  marginTop:20,
 },
 Hometxt:{
    fontSize:24,
    color:'red',
    textAlign:'center',
 }
});