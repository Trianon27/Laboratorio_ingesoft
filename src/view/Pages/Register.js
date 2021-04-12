import React, { useState } from 'react';
//import Background from '../Components/Background';
import Button from '@material-ui/core/Button';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import "./Register.css"
import {Link, useHistory} from "react-router-dom";
import RegisterCtrl from "../../Control/RegisterCtrl"
import Zoom from 'react-reveal/Zoom';


function Register() {
    

    const [nombre, setNombre] = useState("")
    

    const [apellido, setApellido] = useState("")

    const [correo, setCorreo] = useState("")
    const [password, setPassword] = useState("")
    


    const submmit = ()=>{
        RegisterCtrl.registrarUsuario(nombre, apellido, correo, password)              
        if (password.length >= 6) {
                window.open ("/SignedUp")
                //reset()
        }
    }

    const reset = ()=>{
        setNombre("")
        setApellido("")
        setCorreo("")
        setPassword("")

    }

    const updateNombre = e =>{
        setNombre(e.target.value)
    }

    const updateApellido = a =>{
        setApellido(a.target.value)
    }

    const updateCorreo = o =>{
        setCorreo(o.target.value)
    }

    const updatePassword = u =>{
        setPassword(u.target.value)
    }

    let styles = {
        button1 : {
            background: "#2cdcd9",
        },


    }
    return (
        
       // <Background background_img = "..\Components\Pictures\Background_reg.png" >
       <div className = "Register_container">
            <Zoom>
            <div className = "Register">
                <form >
                    <h1 align="center">Registro</h1>
                    <label htmlFor="name">Nombre</label><br/>
                    <input type="name" placeholder = "Nombre" id="name" value = {nombre} onChange = {updateNombre}/><p/>
                    <label htmlFor="lastname"> Apellido </label><br/>
                    <input type="lastname" placeholder = "Apellido" id="lastname" value = {apellido} onChange = {updateApellido}/><p/>
                    <label htmlFor="correo"> Correo </label><br/>
                    <input type="email" placeholder = "Correo electrónico" id="correo" value = {correo} onChange = {updateCorreo}/><p/>
                    <label htmlFor="password"> Contraseña  </label><br/>
                    <input type="password" placeholder = "Contraseña" id="password" value = {password} onChange = {updatePassword}/><p/>
                   
                    </form>
                    <Button variant="contained" color="primary" onClick = {submmit} style = { {background : "#e43166"}} >
                            Registrar
                        <Brightness5Icon/>
                    </Button>
                    <Link to ={"/Home"}>            
                        <Button variant="contained" color="secondary" style = {styles.button1}>Ya tengo cuenta</Button>
                    </Link>
                </div>
                </Zoom>
            </div>
        //</Background>
        
    )
}

export default Register
