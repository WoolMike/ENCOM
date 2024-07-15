import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/eventostyles.css";
import Fotoevento from "../../img/eventos1.jpg";
import Fotovideo from "../../img/imagen-para-login.jpg";
import Fotovideo2 from "../../img/video2.jpg";

export const Video = () => {
    return(
        <div>
            <div className="imagenfondoeventos">
                <h1 className="text-center">Video</h1>
                <h3>El video es una de las cosas mas importantes a la hora de tener un evento de calidad.</h3>
                <img  className="primerafoto"src={Fotoevento}/>
                <img  className="primerafoto"src={Fotovideo}/>
                <img  className="primerafoto"src={Fotovideo2}/>
            </div>
        </div>
    );
};