import React from "react";

import Home from "../pages/home/Home";
import nextScreen from "../screens/nextScreen";
import Header from "../Componentes/Header";
import EndScreen from "../screens/EndScreen";

import { createStackNavigator } from "@react-navigation/stack";


const RootStack = createStackNavigator();

export default  function AuthHome() {
    return(
        <RootStack.Navigator
        screenOptions={{
            headerTintColor:'white',
            headerStyle:{
                height:100,
                backgroundColor:'#112d69',
                elevation:25
            }
        }}
        >
            <RootStack.Screen
            name="Home"
            component={Home}  
            options={{ 
                headerTitle:() => <Header name="TD Pro"/>,
             }} 
            />
            <RootStack.Screen
                name="nextScreen"
                component={nextScreen}
                options={{ 
                    headerTitle:() => <Header name="Visita a campo"/>,
                 }}     
            />
            <RootStack.Screen
                name="EndScreen"
                component={EndScreen}
                options={{ 
                    headerTitle:() => <Header name="Visita a campo"/>,
                 }}     
            />
        </RootStack.Navigator>
    );
}