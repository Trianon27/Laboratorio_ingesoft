import React from 'react'
import "./SignedUp.css"
import Zoom from 'react-reveal/Zoom';


function SignedUp() {
    
    return (  
        <div className = "SignedUp__container ">      
            <Zoom>         
                <div className = "SignedUp">
                    
                    <h1 style = {{textAlign : "center"}}> Enhorabuena, te has registrado!!! </h1>              
                </div>
        </Zoom> 
        </div>  
    )
}

export default SignedUp
