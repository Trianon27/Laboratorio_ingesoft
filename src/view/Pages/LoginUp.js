import React from 'react'
import './LoginUp.css'
import Zoom from 'react-reveal/Zoom';
import Button from '@material-ui/core/Button';
import {Link, useHistory} from "react-router-dom";

function Login_com() {
        return (  
            <div className = "LoginUp__container ">      
                <Zoom>         
                    <div className = "LoginUp">
                        
                        <h1 style = {{textAlign : "center"}}> Enhorabuena, te has Logeado!!! </h1>   

                        <Link to ={"/Home"}>            
                            <Button variant="contained" color="secondary" style = {{background : "#03031b"}}>Cerrar sesión</Button>
                        </Link>

                    </div>
            </Zoom> 
            </div>  
        )
    
}

export default Login_com
