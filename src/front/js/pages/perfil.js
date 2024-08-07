import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import Header from "../component/headerdashboard";


export const Profile = () => {
    const { store, actions } = useContext(Context);

    const [newUser, setNewUser] = useState("")

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const updatePerfil = async () => {
        actions.editProfile(newUser);
        actions.getprofile();
        handleClose()
    }

    useEffect(() => {
        setNewUser({
            "name": store.profile.name,
            "lastname": store.profile.lastname,
            "email": store.profile.email,
            "pais": store.profile.pais
        })
    }, [store.profile])

    useEffect(() => {
        actions.getprofile()
        actions.getPaises()
    }, [])

    return (
        <div>
            <Header />
            <h1>Edita tu perfil</h1>
            
            <form>
                <input type="email"
                    class="form-control"
                    id="email"
                    label="Email"
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}>
                </input>
                <input type="text"
                    class="form-control"
                    id="name"
                    label="Nombre"
                    value={newUser.name}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}>
                </input>
                <input type="text"
                    class="form-control"
                    id="lastname"
                    label="Apellido"
                    value={newUser.lastname}
                    onChange={(e) => setNewUser({ ...newUser, lastname: e.target.value })}>
                </input>
                <select class="form-select form-select-lg mb-3" aria-label="Large select example" value={newUser.pais} onChange={(e) => { setNewUser({...newUser,pais:e.target.value}) }}>
                    <option selected>Pais</option>
                    {store.paises && store.paises.map(paises => (
                        <option value={paises.name.common}>{paises.name.common}</option>
                    ))}
                </select>
            </form>
            <div>
                <button type="button" class="btn btn-success" onClick={() => updatePerfil()} >Guardar Cambios</button>
                <button type="button" class="btn btn-danger" onClick={handleClose} >Cancelar Cambios</button>
            </div>
            <div>

            </div>





        </div>
    );

};


