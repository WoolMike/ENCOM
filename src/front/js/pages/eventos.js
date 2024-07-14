import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/eventostyles.css";
import Fotoevento from "../../img/eventos1.jpg";

export const Eventos = () => {
    return(
        <div>
            <div className="imagenfondoeventos">
                <h1 className="text-center">Eventos</h1>
                <h3>Nuestos eventos se basan en las necesidades de nuestros clientes a si como en las cosas y sugerencias que los clientes comentan.</h3>
                <img  className="primerafoto"src={Fotoevento} />
            </div>
        </div>
    );
};