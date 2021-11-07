import { useState, useEffect } from "react";
import { client } from "../auth/api";
import CONSTANTS from "../constants";
import history from '../routes/history'

const AuthProvider = () => {
    const [auth, setAuth] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const handleLogin = async () => {
        try {
            const { data: { token, user: { user, email } } } = await client.post("/login")
            localStorage.setItem('token', JSON.stringify(token))
            client.defaults.headers.authorization = `Bearer ${token}`;
            setAuth(true)
            history.push(CONSTANTS.APP.HOME_PAGE)

        } catch (error) {
            console.log('falha ao obter dados do servidor')
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
        loading
    }
}

export default AuthProvider