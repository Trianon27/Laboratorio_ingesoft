import {auth} from "./Firebase_IngSoft/config"
import {db}  from "./Firebase_IngSoft/config"
import {Link, useHistory} from "react-router-dom";


class User{
    constructor(nombre, apellido, correo, password){
        this._nombre = nombre;
        this._apellido = apellido;
        this._correo = correo;
        this._password = password;        
    }
    
        get nombre(){
            return this._nombre;
        }
    
        get apellido(){
            return this._apellido;
        }
    
        get correo(){
            return this._correo;
        }
    
        get password(){
            return this._password;
        }

        createFireBaseUser(user){
            var tokenID = user.uid
            db.collection("User").doc(tokenID).set({
                nombre: this._nombre,
                apellido: this._apellido,
                correo: this._correo,
                rol: "Genral"
            }).then(() => {
                console.log("Document successfully written in firestore!");   
                                              
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            })
        }

        sign_in(){
            auth.signInWithEmailAndPassword(this._correo, this._password)
                .then((userCredential) => {
                    // Signed in
                    var user = userCredential.user;
                    console.log("Ingresó");
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ..
                    alert(errorMessage)
                });
        }
        
        create_user_db(){
            console.log("Success")
            auth.createUserWithEmailAndPassword(this._correo, this._password)
                .then((userCredential) => {
                    // Signed in
                    var user = userCredential.user;
                    this.createFireBaseUser(user);
                   
                    // ...


                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ..
                    alert(errorMessage)
                });
    }
}

export default User;