import { StyleSheet, Text, TextInput, View } from 'react-native';
import {useForm,Controller} from 'react-hook-form';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function SpatialInput({control,name,placeholder,rules={},secureTextEntry,editable,}) {
  return (
    <Controller

      name={name}
      control={control}
      rules={rules}
      render={({field:{value,onChange,onBlur},fieldState:{error}})=>(
      <><View style={[styles.container, { borderColor: error ? 'red' : '#e8e8e8' }]}>
         <TextInput 
           value={value}
           onChangeText={onChange}
           onBlur={onBlur}
           style={styles.input}
           placeholder={placeholder}
           secureTextEntry={secureTextEntry}
           editable={editable}>
         </TextInput>

       </View>
       {error &&(<Text style={{color:'red',alignSelf:'stretch'}}>{error.message ||'Error'}</Text>)}
       </>
     )}/>
     
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    width:'100%',
    borderColor:'#e8e8e8',
    borderWidth:1,
    borderRadius:5,
    paddingHorizontal:10,
    marginVertical:7,
    padding:12,
  },
  input:{

  },
});

