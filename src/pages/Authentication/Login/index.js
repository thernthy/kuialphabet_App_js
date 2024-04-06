import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../../contexts/auth-provider";
import { httpClient } from "../../../services/Http";
import { Api_header_key, LOGIN } from "../../../config/api-endpoints";
import { set } from "../../../services/CreateStorage";
import "./style.css";
import AuthenticationHttp from "../../../services/Http/auth";
import { dataTagSymbol } from "@tanstack/react-query";

const Login = () => {
    const { setLogged, setLogin, logged, login, token } = useContext(authContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [invalid, setInvalid] = useState(false)
    const navigate = useNavigate()

    const getHandler = (setter) => {
        return function handler(e) {
            setter(e.target.value)
        }
    }
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            // const formData = new URLSearchParams();
            // // formData.append("grant_type", "password");
            // // formData.append("email", email);
            // // formData.append("password", password);
            // // formData.append("_token", "base64:8LiE4ybINYX2HjOzL9j9QhW8vM0+ejOkBaxUNBmyxRk=");
            // // console.log(formData)
            const response = await httpClient.get(LOGIN+`?t="base64:8LiE4ybINYX2HjOzL9j9QhW8vM0+ejOkBaxUNBmyxRk="&email=${email}&password=${password}`,{
                headers:{
                    'X-API-Key' : process.env.REACT_APP_API_KEY
                }
            })
            if (response.status === 200) {
                setLogged(true)
                setLogin(false)
                setInvalid(false)
                setTimeout(() => {
                    localStorage.setItem('refresh_token', response.data.token);
                    localStorage.setItem('access_token', response.data.token);
                }, 100);
            } else {
                setInvalid(true)
            }
        } catch (error) {
            const response = error.response;
            setInvalid(true)
                if(response && response.status == 422){
                    if(response.data.errors.password){
                        setErrorMessage(response.data.errors.password)
                    }else{
                        setErrorMessage(response.data.errors.email)
                    }
                }
                if(response && response.status == 401){
                    setErrorMessage(response.data.message)
                }
                if(response && response.status == 504 || response.status == 500){
                    setEmailError("server oops check your network angain!")
                }
        }
        

        if (!email) {
            setEmailError('Please enter your email address')
        } else {
            setEmailError('');
        }

        if (!password) {
            setPasswordError('Please enter a password')
        } else {
            setPasswordError('')
        }

        if (email.length !== 0 && password.length !== 0) {
            setInvalid(true)
            setTimeout(() => {
                setInvalid(false)
            }, 3000);
        }

        if (logged) {
            return navigate('/')
        }

    };


    return (
        <form className="p-md-5" onSubmit={handleFormSubmit}>
            {invalid && <p className="alert alert-danger text-center alert-message">{errorMessage}</p>}
            <h3 className="display-4 fw-bold lh-1 text-body-emphasis mb-5 text-center fs-2">Login</h3>
            <div className="form-floating mb-3">
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={getHandler(setEmail)}
                />
                <label htmlFor="email">Email address</label>
                {emailError && <p className="text-danger messages">{emailError}</p>}
            </div>
            <div className="form-floating mb-3">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={getHandler(setPassword)}
                />
                <label htmlFor="password">Password</label>
                {passwordError && <p className="text-danger messages">{passwordError}</p>}
            </div>
            <div className="checkbox mb-3 d-flex justify-content-between">
                <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
            <hr className="mb-3 mt-4" />
            <p className="text-body-secondary">
                Don't have an account?
                <Link
                    className="text-decoration-none text-primary"
                    to="/register"
                    onClick={() => setLogin(!login)}
                >
                    Register
                </Link>
            </p>
        </form>
    )
}

export default Login