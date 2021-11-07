import { useState, useEffect } from "react";
import { client } from "../auth/api";
import CONSTANTS from "../constants";
import history from '../routes/helper/history'

const AuthProvider = () => {
    const [auth, setAuth] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const handleLogin = async (email, password) => {
        try {
            const { data: { access : token } } = await client.post(CONSTANTS.API.LOGIN, { 
                email,
                password
            })

            localStorage.setItem('token', JSON.stringify(token))
            client.defaults.headers.authorization = `Bearer ${token}`;

            setAuth(true)

           /* redirect default */ history.push(CONSTANTS.APP.HOME_PAGE)
       

        } catch (error) {
            console.log('falha ao obter dados do servidor')
            alert("Tivemos um problema ao solicitar sua requisição\ndetalhes do error: " + error.message)
            setError(error.message)
        }
    }

    const handleLogout = () => {
        localStorage.removeItem("token")
        client.defaults.headers.authorization = undefined;
        setAuth(false)
        history.push("/")
    }

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            client.defaults.authorization = `Bearer ${JSON.parse(token)}`
            setAuth(true)
        }
        setLoading(false)
    }, [])
    return {
        handleLogin,
        handleLogout,
        auth,
        loading,
        error
    }
}

export default AuthProvider