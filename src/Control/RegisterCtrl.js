import User from "../Model/User"

const RegisterCtrl = {

    registrarUsuario : (nombre, apellido, correo, password) =>{
        let newUser = new User(nombre, apellido, correo, password)
        newUser.create_user_db()
    },

    signUpUser : (correo, password) =>{
        let registeredUser = new User(" ", " ", correo, password)
        registeredUser.sign_in()
    }

    
}

export default RegisterCtrl;