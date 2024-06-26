import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/loginstyles.css";

export const Login = () => {
    // const {store,actions}=useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <div className="imagenfondo">
            <div className="box">
                <div className="loginbox">
                    <form>
                        <div>
                            <h1 className="text-center">Login</h1>
                            <h5 className="text-center">Don't have an account? <Link to="/register">Sign Up</Link></h5>
                            <div className="row">
                                <div>
                                    <input type="email" class="form-control" id="email" placeholder="Your Email"></input>
                                </div>
                                <div className="mt-3">
                                    <input type="password" class="form-control" id="inputPassword2" placeholder="Password"></input>
                                </div>
                            </div>
                            <div className="mt-3">
                                <div className="botoneshomeyconfirmar">
                                    <div className="botonconfirmar">
                                        <h3 ><a href="/" className="diseñobotonhome"><i class="fa-solid fa-house"></i></a></h3>
                                    </div>
                                    <div className="botonhome">
                                        <button type="button" className="btn btn-success">Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
