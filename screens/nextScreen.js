import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Lista from "../Componentes/List";
import InputRadio from "../Componentes/InputRadio";


export default function nextScreen ({navigation}){

    return (
        <View style={styles.container}>
          <View style={styles.Fila}>
            <Lista
            Nombre={'Range'}
            />
            <Lista
            Nombre={'Row'}
            />
            <Lista
            Nombre={'Plot'}
            />
          </View>
          <Text>Hibrido:ADV550CL</Text>
          <Lista
            Nombre={'Estadio'}
          />


        <InputRadio/>
        
  
        <View style={styles.divbtn}>
          <TouchableOpacity style={styles.btn} onPress={()=> navigation.push('EndScreen')}>
            <Text style={styles.textoBtn}>Siguiente</Text>
          </TouchableOpacity>
        </View>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems:'stretch',
      marginLeft:10,
      marginRight:10,
      marginTop:10
    },
    Fila:{
      flexDirection:'row',
      width:122,  
      justifyContent:'space-between',
      marginBottom:20
    },
    divbtn:{
      alignItems:'flex-end',
      margin:20
    },
    textoBtn:{
      fontSize:25,
      color:'white',
      textTransform:'uppercase'
    },
    btn:{
      backgroundColor:'#13a538',
      padding:10
    }
  });