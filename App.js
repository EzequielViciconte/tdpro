import React,{createContext,useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';


import AuthLogin from './Navegacion/AuthLogin.js';
import AuthHome from './Navegacion/AuthHome.js';



import { NavigationContainer } from '@react-navigation/native';


export const ContextLogin = createContext();

export default function App() {
  const [Usuario,setUsuario] = useState('');
  
  return (
      <NavigationContainer> 
        <ContextLogin.Provider value={{setUsuario:setUsuario,Usuario}}>
          {Usuario ? <AuthHome/> : <AuthLogin/> }
        </ContextLogin.Provider>
      </NavigationContainer>
  );
}

