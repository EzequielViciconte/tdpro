import React, { Component, useEffect, useState } from 'react';
import { Text, View, StyleSheet,Modal,TouchableOpacity} from 'react-native';
import VectorIcon from 'react-native-vector-icons/FontAwesome';

import CalendarPicker from 'react-native-calendar-picker';

const Calendario = () => {
    const [show,setShow] = useState(false);
    const Fecha = new Date().toLocaleDateString();
    const fechaSeparada = Fecha.split('/');
    const fechaVuelta = fechaSeparada.reverse();
    const fechaFormateada = fechaVuelta.join('-');
    const [SelectDate,setSelectDate] = useState(fechaFormateada);
    return(
        <View style={styles.Calendario}>
            <Text style={{fontSize:20}}>Fecha:{SelectDate}</Text>

            <TouchableOpacity
             title='Abrir' 
             onPress={()=> setShow(true)}
             >
                <VectorIcon name='calendar' style={{color:'black',fontSize:50}}/>
             </TouchableOpacity>
            <Modal visible={show} animationType='slide'>
                <CalendarPicker
                width={300}
                height={300}
                onDateChange={date =>{
                    const fechaSeleccionString = date._d;
                    const fechaSeleccion = fechaSeleccionString.toLocaleDateString();
                    setSelectDate(fechaSeleccion);
                    setShow(false)
                }}
                initialDate={fechaFormateada}
                minDate={fechaFormateada}
                />
            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    Calendario:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    }
})

export default Calendario;