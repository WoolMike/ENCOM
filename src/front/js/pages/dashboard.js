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

            <h1>Cotizaciones</h1>

            <div>
            <button type="button" class="btn btn-primary">Crear cotizacion</button>
            </div>
        </div>
    );
};