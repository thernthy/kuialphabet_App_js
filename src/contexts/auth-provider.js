import { useState, createContext } from "react";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
    const [login, setLogin] = useState(false)
    const [register, setRegister] = useState(false)
    const [token, _setToken] = useState(localStorage.getItem('access_token'));
    const [logged, setLogged] = useState(token?true:false)
    const handleModalLogin = () => {
            setLogin(true)
    }

    const handleModalRegister = () => {
        setRegister(true)
    }

    const handleModalClose = () => {
        setLogin(false)
        setRegister(false)
    }

    return (
        <authContext.Provider
            value={{
                login,
                token,
                setLogin,
                setRegister,
                register,
                logged,
                setLogged,
                handleModalLogin,
                handleModalRegister,
                handleModalClose
            }}
        >
            {children}
        </authContext.Provider>
    );
}

export default AuthProvider