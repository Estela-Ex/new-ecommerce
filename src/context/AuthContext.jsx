import { useContext, useState, createContext } from 'react';

const AuthContext = createContext({
    login: () => { },
    logout: () => { },
    user: null,
    errorMessage: "",
});

export default function AuthContextProvider({children}) {
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState(null);
    
    function login(){
    }
    function logout() {
    }
    const value = {
        user,
        login,
        logout,
       
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
    return useContext(AuthContext)
}