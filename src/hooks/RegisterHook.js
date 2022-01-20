import { useState, useContext } from "react";
import { client } from "../auth/api";
import  CONSTANTS  from "../constants/index";


import { Context } from "../context/AuthProvider";


const RegisterHook = () => {
  const [userName, setUserName] = useState(false);
  const [userEmail, setUserEmail] = useState(false);
  const [userPassword, setUserPassword] = useState(false);

  const { handleLogin : handleLoginProvider } = useContext(Context)

  const handleUserName = event => {
      event.preventDefault(); // travo o comportamento padrao do dom
      setUserName(event.target.value)
  }
  const handleEmail = event => {
      event.preventDefault(); // travo o comportamento padrao do dom
      setUserEmail(event.target.value)
  }
  
  const handlePassword = event => {
      event.preventDefault(); // travo o comportamento padrao do dom
      setUserPassword(event.target.value)
  }

  const RegisterProvider = async (body) => {
    try {
      await client.post(CONSTANTS.API.REGISTRO, body) 
      handleLoginProvider(userEmail, userPassword)
    } catch (error) {
      alert("Tivemos um problema ao solicitar sua requisição\ndetalhes do error: " + error.message)
    }
  }
  
  const handleRegister = event => {
    event.preventDefault(); // travo o comportamento padra

    RegisterProvider({
       "user_name" : userName,
       "password" : userPassword,
       "email" : userEmail
    })

  }

  return {
      handleUserName,
      handlePassword,
      handleEmail,
      handleRegister,
  };
};

export default RegisterHook;
