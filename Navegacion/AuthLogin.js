import React from "react";

import Login from '../pages/login/Login.js'
import Header from "../Componentes/Header";
import { createStackNavigator } from "@react-navigation/stack";


const RootStack = createStackNavigator();

export default  function AuthLogin() {
    return(
        <RootStack.Navigator>
            <RootStack.Screen
            name="Login"
            component={Login}  
            options={{ 
                headerTitle:() => <Header name="TD Pro Inicio de Sesion"/>,
                headerStyle:{
                    height:70,
                    backgroundColor:'#13a538',
                }
             }} 
            />
        </RootStack.Navigator>
    );
}