import { useEffect ,useState } from "react";
import axios from "axios";

const RegisterHook = () => {
    const [userName ,setUserName] = useState(false)
    const [userEmail ,setUserEmail] = useState(false)
    const [userPassword ,setUserPassword] = useState(false)

    useEffect( () => {
        axios.post('https://logf01.herokuapp.com/usuario/cadastro/' , {
            user_name: 'camis',
            password: 'senha',
            email: 'email@email.com'
        }) .then((response) => response.data) 
            .then((data) => console.log(data) )
            .catch((error) => console.log(error.message))
     } , [] )
    
     return {
         userName,
         userEmail,
         userPassword
     }
}

export default RegisterHook