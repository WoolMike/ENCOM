import React, { useContext,useEffect } from 'react'
import { Context } from '../store/appContext'
import { Link, useNavigate } from "react-router-dom";
import "../../styles/dashboard.css";

export function Header() {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()

    useEffect(() => {
        actions.getprofile()
    }, [])
  
    return (
        <div>
            <div>
                <nav class="navbar bg-body-tertiary">
                    <div class="container-fluid">
                        <span class="navbar-brand mb-0 h1"><h3><a href="/dashboard" className="negro"><i class="fa-solid fa-user"></i></a> Bienvenido {store.profile && store.profile.name}</h3> </span>
                        <div class="btn-group dropstart">
                            <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Perfil
                            </button>
                            <ul class="dropdown-menu text-center">
                                <li><Link to="/perfil">
                                    <button type="button" class="btn btn-info">Editar Perfil</button>
                                </Link>
                                </li>
                                <li><Link to="/">
                                    <button type="button" class="btn btn-danger" onClick={actions.logoutUser}>LogOut <i class="fa-solid fa-right-from-bracket"></i></button>
                                </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>





            </div>
        </div>
    )
}

export default Header