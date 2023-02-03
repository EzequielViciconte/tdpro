import React,{useEffect} from "react"
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  import { useForm, Controller } from 'react-hook-form';
  import useUser from "../../../hooks/useUser.js";




export default function LoginForm(props){
    console.log(props);
    const {login,isLogged} = useUser();
    const { control, handleSubmit,formState: { errors },getValues,setValue } = useForm();

    const onSubmit =  data => {
        const Email = getValues('Email')
        const Password = getValues('Password')

        console.log(Email,Password)
        login({Email,Password});
      };

      useEffect(()=>{
        if(isLogged == true){
            props.nav.push('Home')
        }
      },[isLogged,props.nav])

      const EMAIL_REGEX =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    return(
        <View style={styles.containerLogin}>
            <Controller
            control={control}
            name='Email'
            render={({onChange,onBlur,value})=>(
                <TextInput
                placeholder="E-mail"
                style={styles.input}
                placeholderTextColor="white"
                onChangeText={(value)=>setValue('Email',value)}
                value={value}
                inputContainerStyle={{
                    borderBottomWidth: 10,
                    borderBottomColor: 'white',
                  }}
                />
            )}
            rules={{
                required:{ value: true, message: 'El E-mail es requerido' },

            }}
            defaultValue=''
            >
            </Controller>
            {errors.Email && (
                <Text style={{color:'white'}}>{errors.Email.message}</Text>
            )}

            <Controller
            control={control}
            name='Password'
            render={({onChange,onBlur,value})=>(
                <TextInput
                placeholder="Password"
                style={styles.input}
                placeholderTextColor="white"
                onChangeText={(value) => setValue('Password', value)}
                secureTextEntry
                value={value}
                inputContainerStyle={{
                    borderBottomWidth: 1,
                    borderBottomColor: 'white',
                  }}
                />
            )}
            rules={{
                required:{ value: true, message: 'La Contraseña es requerida' }
            }}
            defaultValue=''
            >
            </Controller>
            {errors.Password && (
                <Text style={{color:'white'}}>{errors.Password.message}</Text>
            )}

            <View style={styles.button}>
                <TouchableOpacity
                style={styles.Btn}
                onPress={handleSubmit(onSubmit)}
                >
                    <Text style={styles.textBtn}>Ingresar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
    
}

const styles = StyleSheet.create({
    containerLogin:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        margin:10
    },
    input:{
        color:'#fff',
        fontSize:25,
        borderBottomWidth:.5,
        borderBottomColor:'white',
        width:'100%',
        margin:10,
        padding:3,
        textAlign:'center'
    },
    Btn:{
        backgroundColor:'#13a538',
        padding:10,
        margin:20
    },
    textBtn:{
        color:'white',
        textTransform:'uppercase',
        fontSize:30
    }
})

