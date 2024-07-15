import React, { useContext,useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/loginstyles.css";
import { useNavigate } from "react-router-dom";

export const Register = () => {
    const { store, actions } = useContext(Context);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [lastname, setLastname] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [name, setName] = useState('');
    const navigate=useNavigate();

    const handleInputChange=()=>{
        setErrorMessage('');
    };

     const handleRegister=async()=>{
        if (email==="" || password===""|| name===""|| lastname===""|| confirmpassword===""){
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
        }else if(password!==confirmpassword){
            console.log("Las constraseñas no coinciden")
            setConfirmpassword("")
            setPassword("")

        }else{
            console.log(email)
            console.log(password)
            const isRegistered=await actions.registerUser(name,lastname,email,password)
            console.log(isRegistered)
            if(isRegistered)
            {
                console.log("Usuario registrado")
                navigate("/dashboard")
                
            }else{
                console.log("usuario no registrado")
            }
        }
     }

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
                                        <button type="button" className="btn btn-success" onClick={handleRegister}>Sign Up</button>
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