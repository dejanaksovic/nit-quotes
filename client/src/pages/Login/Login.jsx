import { useRef } from "react";
import "./Login.css"
import { useLogin } from "../../hooks/useLogin";
const Login = () => {
    const passRef = useRef()
    const usernameRef = useRef()
    const { loading, error, login } = useLogin()

    return ( 
        <div className="bg-clr-primary wrapper">
            <div className="form-container bg-clr-neutral-900">
                <div className="form-control">
                    <p className="fs-body fw-bold align-center ff-wix">Sign in</p>
                    <p className="fs-subtitle2 align-center ff-spline">Sign in with username and password</p>
                </div>
                <div className="form-control">
                    <label htmlFor="username" className="fs-subtitle1">Username:</label>
                    <input onChange = { e => {
                        usernameRef.current = e.target.value
                    } }
                    placeholder="username"
                    type="text" />
                </div>
                <div className="form-control">
                    <label htmlFor="password" className="fs-subtitle1">Password:</label>
                    <input type="password"
                    placeholder="password"
                    onChange={ e => {
                        passRef.current = e.target.value
                    } }/>
                </div>
                <div className="form-control">
                    <button disabled = {loading} 
                            className="bg-clr-primary-muted fs-body fw-bold clr-primary"
                            onClick={ () => {
                                login(usernameRef.current, passRef.current)
                            } }>Log in!</button>
                </div>
                <div className="form-control">
                    <p className="clr-error fs-body">{error}</p>
                </div>
            </div>
        </div>
     );
}
 
export default Login;