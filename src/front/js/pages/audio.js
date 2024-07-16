import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/eventostyles.css";
import Fotoiluminacion2 from "../../img/iluminacion2.jpg";
import Fotoiluminacion3 from "../../img/iluminacion3.jpg";
import Audiofoto from "../../img/audio.jpg";

export const Audio = () => {
    return(
        <div>
            <div className="imagenfondoeventos">
                <h1 className="text-center">Audio</h1>
                <h3>El audio, la parte en donde te puedes expresar de manera libre y concreta, siempre con claridad y precisión.</h3>
                <div className="text-center">
                    <img  className="primerafoto"src={Fotoiluminacion2} />
                <img  className="primerafoto"src={Fotoiluminacion3} />
                <img  className="primerafoto"src={Audiofoto} />
                </div>
                

            </div>
        </div>
    );
};