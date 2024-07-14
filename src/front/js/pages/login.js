import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/loginstyles.css";
import Swal from 'sweetalert2'

export const Login = () => {
    const {store,actions}=useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    console.log("este es el token", store.token);
    const handleClick = async()=> {
        if (email==="" || password===""){
            Swal.fire({
                position: "center",
                icon: "error",
                title: 'All fields are required',
                background: "#263043",
                color: "#FFFFFF",
                showConfirmButton: false,
                timer: 1500
              });
            return        
        }
        else{
            console.log(email)
            console.log(password)
            const isLoged=await actions.loginUser(email,password)
            console.log(isLoged)
            if(isLoged)
            {
                console.log("Usuario logeado")
            }else{
                console.log("usuario no logeado")
            }
        }
    }

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
                                    <input type="email" class="form-control" id="email" placeholder="Your Email"
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    ></input>
                                </div>
                                <div className="mt-3">
                                    <input type="password" class="form-control" id="inputPassword2" placeholder="Password"
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    ></input>
                                </div>
                            </div>
                            <div className="mt-3">
                                <div className="botoneshomeyconfirmar">
                                    <div className="botonconfirmar">
                                        <h3 ><a href="/" className="diseñobotonhome"><i class="fa-solid fa-house"></i></a></h3>
                                    </div>
                                    <div className="botonhome">
                                        <button type="button" className="btn btn-success" onClick={handleClick}>Login</button>
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
