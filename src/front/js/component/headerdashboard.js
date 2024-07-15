import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import { Link, useNavigate } from "react-router-dom";

export function Header() {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()

    const handleHome = () => {

        navigate("/")
    }
    return (
        <div>
            <div>
                <nav class="navbar bg-body-tertiary">
                    <div class="container-fluid">
                        <span class="navbar-brand mb-0 h1"><h3>Bienvenido {store.profile && store.profile.name}</h3></span>
                        <Link to="/">
                            <button type="button" class="btn btn-danger" onClick={actions.logoutUser}>LogOut</button>
                        </Link>

                    </div>
                </nav>





            </div>
        </div>
    )
}

export default Header