import React,{useContext} from 'react'
import { Context } from '../store/appContext'
import { Link, useNavigate } from "react-router-dom";

export function Header(){
    const {store,actions}=useContext(Context);
    const navigate=useNavigate()

    const handleHome=()=>{

        navigate("/")
    }
    return(
        <div>
            <div>

                <h6>{store.profile && store.profile.name}</h6>
                
                    <Link to="/">
                    <button type="button" class="btn btn-danger" onClick={actions.logoutUser}>LogOut</button>
                    </Link>
                
                
                
            </div>
        </div>
    )
}

export default Header