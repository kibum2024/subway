import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [loginStatus, setLoginStatus] = useState(false);

    const login = (status) => {
        setLoginStatus(status);
    };

    return (
        <AuthContext.Provider value={{ loginStatus, login }}>
            {children}
        </AuthContext.Provider>
    );
}
