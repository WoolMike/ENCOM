import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/eventostyles.css";
import Fotoiluminacion1 from "../../img/iluminacion1.jpg";
import Fotoiluminacion2 from "../../img/iluminacion2.jpg";
import Fotoiluminacion3 from "../../img/iluminacion3.jpg";

export const Iluminacion = () => {
    return(
        <div>
            <div className="imagenfondoeventos">
                <h1 className="text-center">Iluminacion</h1>
                <h3>La iluminacion es una de las partes mas importantes de un evento, es por eso que nosotros nos fijamos en cada detalle por más pequeño que sea.</h3>
                <img  className="primerafoto"src={Fotoiluminacion1} />
                <img  className="primerafoto"src={Fotoiluminacion2} />
                <img  className="primerafoto"src={Fotoiluminacion3} />
            </div>
        </div>
    );
};