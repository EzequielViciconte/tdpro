import React from "react";
import { Text,View,StyleSheet} from "react-native";

import SliderRange from "../Componentes/Slider";

export default function EndScreen() {
    return(
        <View style={styles.cont}>
            <View>
                <View style={styles.head}>
                    <Text style={styles.Texto}>Range:</Text>
                    <Text style={styles.Texto}>Row:</Text>
                    <Text style={styles.Texto}>Plot:</Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.Texto}>1</Text>
                    <Text style={styles.Texto}>1</Text>
                    <Text style={styles.Texto}>101</Text>
                </View>
            </View>

            <View style={styles.Form2}>
                <View style={styles.head}>
                    <Text style={styles.Texto}>Hibrido</Text>
                    <Text style={styles.Texto}>Estadio</Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.Texto}>ADV5505CL</Text>
                    <Text style={styles.Texto}>V3</Text>
                </View>

            </View>

            <SliderRange/>
            <Text>fin</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    cont:{
        margin:10
    },
    head:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:0
    },
    body:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:0,
        margin:10,
        padding:5,
        backgroundColor:'#13a538'
    },
    Form2:{
    },
    Texto:{
        fontSize:25
    }
})