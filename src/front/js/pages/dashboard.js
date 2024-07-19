import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../component/headerdashboard";
import { Context } from "../store/appContext";
import { CardCotizacion } from "../component/cardCotizacon";

export const Dashboard = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()

    useEffect(() => {
        if (!store.token) navigate("/login")
    }, [])

    return (
        <div>
            <Header />
            <div>
                <h1>Cotizaciones</h1>
            <CardCotizacion/>
            </div>
            <div className="ms-5 mt-5 mb-5">
                <Link to="/cotizaciones">
                    <button type="button" class="btn btn-primary">Crear cotizacion</button>
                </Link>

            </div>
        </div>
    );
};