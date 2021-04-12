import React, { useState } from 'react';
import './Login.css';
import Button from '@material-ui/core/Button';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {Link, Redirect} from "react-router-dom";
import RegisterCtrl from "../../Control/RegisterCtrl"
import Zoom from 'react-reveal/Zoom';


function Login(){
    let styles = {
        button : {
            background: "#041644",
        }
    }
    
    const [correo, setCorreo] = useState("")
    const [password, setPassword] = useState("")
    
    const updateCorreo = o =>{
        setCorreo(o.target.value)
    }

    const updatePassword = u =>{
        setPassword(u.target.value)
    }

    const submmit = ()=>{
        RegisterCtrl.signUpUser(correo, password); 
       if (password.length >= 6 ) {
            return (<Link to = "/LoginUp"/>)
    }  

    }

    return(
        <Zoom>
            <div className = "Login">
                <form >
                    <h1>Inicio de sesión</h1>
                    <label htmlFor="correo"> Correo </label><br/>
                    <input type="email" placeholder = "Correo electrónico" id="correo" onChange = {updateCorreo}/><p/>
                    <label htmlFor="password"> Contraseña  </label><br/>
                    <input type="password" placeholder = "Contraseña" id="password" onChange = {updatePassword}/><p/>
                </form>
                <p></p>   
                
                    <Button variant="contained" color="primary" onClick = {submmit} >
                        Ingresar
                        <InsertEmoticonIcon/>
                    </Button>
                <p></p>
                <Link to ={"/Register"}>            
                    <Button variant="contained" color="secondary" style = {styles.button}>Registrar</Button>
                </Link>
            </div>
        </Zoom>
 
    );

}

export default Login;