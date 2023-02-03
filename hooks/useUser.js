import React,{useState,useCallback,useContext} from "react";
import loginService from "../services/LoginService";

import AsyncStorage from "@react-native-async-storage/async-storage";
import * as CONSTANTS from '../App.js';



export default function  useUser(){
    const {setUsuario} = useContext(CONSTANTS.ContextLogin);

    const [state,setState] = useState({
        error:false,
        logged:true
    });


    const login = useCallback(
        ({Email,Password})=>{
            loginService({Email,Password})
                .then(async (jwt) => {
                    try {
                        await AsyncStorage.setItem('jwt',jwt);
                        console.log(jwt + 'Salio bien');
                        setUsuario(jwt);
                        setState({error:false,logged:true})
                    } catch (e) {
                        alert('error');
                    }
                })
                .catch((err)=>{
                    setState({error:true,logged:false});
                    alert(err,'error');
                });
        },
        [setUsuario,setState]
    );

    return{
        islogged:state.logged,
        login
    };
    
}
