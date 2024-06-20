import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/loginstyles.css";

export const Register = () => {
    const { store, actions } = useContext(Context);


    return (
        <div className="imagenfondo">
            <div className="box">
                <div className="loginbox">
                    <form>
                        <div>
                            <h1>Register</h1>
                            <h5>Don't have an account? <Link to="/login">Login</Link></h5>
                            <div>
                                <div>
                                    <input type="text" class="form-control" id="nombre" placeholder="Your Name"></input>
                                </div>
                                <div className="mt-3">
                                    <input type="email" class="form-control" id="email" placeholder="Your Last Name"></input>
                                </div>
                                <div className="mt-3">
                                    <input type="email" class="form-control" id="email" placeholder="Your Email"></input>
                                </div>
                                <div className="mt-3">
                                    <input type="password" class="form-control" id="inputPassword2" placeholder="Password"></input>
                                </div>
                                <div className="mt-3">
                                    <input type="password" class="form-control" id="inputPassword2" placeholder=" Confirm Your Password"></input>
                                </div>
                            </div>
                            <div className="mt-3">
                                <div className="botoneshomeyconfirmar">

                                    <div className="botonconfirmar">
                                        <h3 ><a href="/" className="diseñobotonhome"><i class="fa-solid fa-house"></i></a></h3>
                                    </div>
                                    <div className="botonhome">
                                        <button type="button" className="btn btn-success">Sign Up</button>
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