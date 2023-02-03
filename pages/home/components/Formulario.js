import React,{useState} from "react";
import Lista from "../../../Componentes/List.js";

export default function Formulario(){
    return (
        <>
        <Lista 
        Nombre={'Campaña'}
        />
        <Lista
        Nombre={'Cultivo'}
        />
        <Lista
        Nombre={'Tipo Ensayo'}
        />
        <Lista
        Nombre={'Localidad'}
        />
        </>
    );
}

