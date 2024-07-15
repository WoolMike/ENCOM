import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/eventostyles.css";
import Fototraduccin from "../../img/traduccion.jpg";
import Fototraduccin2 from "../../img/traduccion2.jpg";

export const Traduccion = () => {
    return(
        <div>
            <div className="imagenfondoeventos">
                <h1 className="text-center">Traduccion</h1>
                <h3>Al tener eventos de talla mundial no siempre tenemos conocimientos de cada idioma del mundo, por eso la traduccion precisa es tan importante.</h3>
                <img  className="primerafoto"src={Fototraduccin}/>
                <img  className="primerafoto"src={Fototraduccin2}/>
            </div>
        </div>
    );
};