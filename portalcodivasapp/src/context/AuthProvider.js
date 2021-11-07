import React, { createContext } from 'react';

import AuthProviderHook from '../hooks/AuthProvider';


export const Context = createContext();

export const AuthProvider = ({ children }) => {
    const  {
        handleLogin,
        handleLogout,
        auth,
        loading
    } = AuthProviderHook();

    return (
        <Context.Provider
            value={{
                isAuth: auth,
                handleLogin,
                handleLogout,
            }}
        >
            {children}
        </Context.Provider>
    )
}

