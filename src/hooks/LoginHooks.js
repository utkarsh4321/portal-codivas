import AuthProvider from "./AuthProvider"
import { useContext, useState } from "react"

import { Context } from "../context/AuthProvider"

const LoginHooks = () => {
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ error, setError] = useState(null)
    //        from         to
    const { handleLogin : handleLoginProvider } = useContext(Context)

    const handleLogin = (event) => {
        event.preventDefault()
        handleLoginProvider(email, password)
    }

    const handleEmail = (event) => {
        event.preventDefault()
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        event.preventDefault()
        setPassword(event.target.value)
    }

    return {
        handleLogin,
        handleEmail,
        handlePassword,
        error
    }
}

export default LoginHooks