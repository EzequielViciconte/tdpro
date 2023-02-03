import React from "react";
import { View, StyleSheet,Text,Image} from 'react-native';

import LoginForm from "./components/LoginForm";

export default function LoginPage({navigation}){
    return(
        <View style={styles.background}> 
            <View style={styles.logo}>
                <Image
                style={{width:250,height:250}}
                source={require('../../assets/logotd.png')}
                />
            </View>

            <View>
                <LoginForm nav={navigation}/>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor:'#112d69',
        height:'100%',
        width:'100%',
        position:'absolute',
        flexDirection: 'column',
    },
    logo:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:50
    }

})