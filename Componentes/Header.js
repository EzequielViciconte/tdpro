import React from "react";
import { Text,View,StyleSheet} from "react-native";

const Header = (props) =>{
    return(
    <View style={styles.container}> 
        <Text style={styles.Texto}>{props.name}</Text>
    </View>
    )
    
}

const styles = StyleSheet.create({
    container:{
        marginLeft:15
    },
    Texto:{
        color:'white',
        fontSize:20
    }
})

export default Header;