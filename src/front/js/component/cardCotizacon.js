import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Fotoiluminacion3 from "../../img/iluminacion3.jpg";
import "../../styles/eventostyles.css";


export function CardCotizacion() {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getprofile()
        actions.buscarCotizacion()
    }, [])

    return (
        <div>
            <div>
                <div class="card ancho ms-5">
                    <img src={Fotoiluminacion3} class="card-img-top primerafoto" />
                    <div class="card-body">
                        <h5 class="card-title">{store.cotizaciones && store.cotizaciones.equipo}</h5>
                        <p class="card-text">{store.cotizaciones && store.cotizaciones.cantidad}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}