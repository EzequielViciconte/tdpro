import React, { Component, useEffect, useState } from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';


import Calendario from './components/Calendario';
import Formulario from './components/Formulario';

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Calendario/>
      <Formulario/>
      <View style={styles.divbtn}>
        <TouchableOpacity
        style={styles.btn}
        onPress={()=>navigation.push('nextScreen')}
        >
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
})


