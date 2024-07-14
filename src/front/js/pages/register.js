import React, { useContext,useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/loginstyles.css";

export const Register = () => {
    const { store, actions } = useContext(Context);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [lastname, setLastname] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [name, setName] = useState('');


    const handleInputChange=()=>{
        setErrorMessage('');
    };

    // async function confirmUserRegister(){
    //     const isUserRegister=await 
    // }

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
                                    <input type="text" 
                                    class="form-control" 
                                    id="nombre" 
                                    placeholder="Your Name" 
                                    label="Nombre"
                                    value={name}
                                    onChange={(e)=>{setName(e.target.value)}}
                                    ></input>
                                </div>
                                <div className="mt-3">
                                    <input type="text" 
                                    class="form-control" 
                                    id="email" 
                                    label="LastName"
                                    placeholder="Your Last Name"
                                    value={lastname}
                                    onChange={(e)=>{setLastname(e.target.value)}}
                                    ></input>
                                </div>
                                <div className="mt-3">
                                    <input type="email" 
                                    class="form-control" 
                                    id="email" 
                                    label="Email"
                                    placeholder="Your Email"
                                    value={email}
                                    onChange={(e)=>{setEmail(e.target.value)}}
                                    ></input>
                                </div>
                                <div className="mt-3">
                                    <input type="password" 
                                    class="form-control" 
                                    id="inputPassword" 
                                    label="Password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e)=>{setPassword(e.target.value)}}
                                    ></input>
                                </div>
                                <div className="mt-3">
                                    <input type="password" 
                                    class="form-control" 
                                    id="inputPassword2"
                                    label="Password2"
                                    placeholder=" Confirm Your Password"
                                    value={confirmpassword}
                                    onChange={(e)=>{setConfirmpassword(e.target.value)}}
                                    ></input>
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