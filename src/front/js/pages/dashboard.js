import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../component/headerdashboard";
import { Context } from "../store/appContext";

export const Dashboard=()=>{
    const {store,actions}=useContext(Context);
    const navigate=useNavigate()

    useEffect(()=>{
        if(!store.token)navigate("/login")
    },[])

    return(
        <div>
            <Header/>
            <h1>Este el el dashboard, ocupamos un header algo para que veas los pedidos hechos y cotizaciones y una imagen para saber que estamos logeados y el nombre del usuario</h1>
        </div>
    );
};