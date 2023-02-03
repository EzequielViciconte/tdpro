import React,{useState} from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';


export default function InputRadio(){
    const [Activo,setActivo] = useState('');
    return(
        <>
            <Text>Early Vigor</Text>
            <View style={styles.input}> 
              {['Si','No','No Aplica'].map(estado=>(
              <TouchableOpacity 
                  style={styles.outter}
                  onPress={() => setActivo(estado)}
              >
                  <Text style={{position:'absolute',left:30,width:50}}>{estado} </Text>
                  {Activo === estado && <View style={styles.inner}/>}
              </TouchableOpacity>
              ))}
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems:'stretch',
      marginLeft:10,
      marginRight:10,
      marginTop:50
    },
    Fila:{
      flexDirection:'row',
      width:122,
      justifyContent:'space-between',
      marginBottom:20
    },
    inner:{
      width:15,
      height:15,
      backgroundColor:'#13a538',
      borderRadius:10
    },
    outter:{
      width:25,
      height:25,
      borderWidth:1,
      borderRadius:15,
      borderColor:'#13a538',
      justifyContent:'center',
      alignItems:'center',
      marginRight:100
      
    },
    input:{
      flexDirection:'row',
      justifyContent:'flex-start',

    }
  });