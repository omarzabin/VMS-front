import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import CustomInput from '../Components/CustomInput';
import { useState } from 'react';
import CustomButton from '../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';


export default function SignUpScreen() {   
  const[Email,setEmail]=useState('');
  const[UserName,setUserName]=useState('');
  const[Password,setPassword]=useState('');
  const[ConfirmPassword,setConfirmPassword]=useState('');
  const navigation=useNavigation();


  function OnSignInPressed() {
   console.warn("Sign in") 
  };
 
  function OnSignInPressed() {
    console.warn("Sign In")
    navigation.navigate('SignInScreen')
   };
   function OnRegisterPressed() {
    navigation.navigate('SignInScreen')
   };
   function OnTermsOfUserPressed(){
    console.warn("Term of use")
   }
   function OnPrivacyPolicyPresses(){
    console.warn("Privacy & Policy")
   }
 
  return (
    <View style={styles.root}>
      
      <Text style={styles.title}>Create an Account</Text>

<CustomInput placeholder="UserName" 
      value={UserName} 
      setValue={setUserName}
      secureTextEntry={false}/>

<CustomInput placeholder="Email" 
      value={Email} 
      setValue={setEmail}
      secureTextEntry={false}/>



<CustomInput placeholder="Password" 
      value={Password} 
      setValue={setPassword} 
      secureTextEntry={true}/>

<CustomInput placeholder="Confirm Password" 
      value={ConfirmPassword} 
      setValue={setConfirmPassword} 
      secureTextEntry={true}/>

<CustomButton text="Register" 
      onPress={OnRegisterPressed}
       type=""/>

<CustomButton text="Have an Account? Sign-In" 
      onPress={OnSignInPressed}
       type="Secondry"/>

<Text style={styles.policytext}>By Registering,You confirm that you accept our <Text style={styles.link} onPress={OnTermsOfUserPressed}>Terms of Use</Text> and <Text style={styles.link} onPress={OnPrivacyPolicyPresses}>Privacy Policy</Text></Text>

    </View>
  

  ); 
}

const styles = StyleSheet.create({
    root:{
      
         alignItems:'center',
        padding:20, 
        flex:1,
         
    },
 

  title:{
    fontSize:24,
    fontWeight:'bold',
    color:'051C60',
    margin:10,
    paddingTop:40,
    

  },
  policytext:{
    color:'gray',
    marginVertical:10,
  },

  link:{
    color:'#f4a460',
  }



});
