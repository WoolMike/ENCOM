import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/eventostyles.css";
import Fotoiluminacion2 from "../../img/iluminacion2.jpg";
import Fotoiluminacion3 from "../../img/iluminacion3.jpg";
import Audiofoto from "../../img/audio.jpg";

export const Audio = () => {
    return(
        <div className="imagenfondoeventos">
            <div className="pt-4">
                <div className="ps-4 pe-4">
                    <h1 className="text-center"><strong>Audio</strong></h1>
                    <h3 className="text-center">La claridad jamas habia tenido tanto peso en un evento como ahora</h3>
                    <div className="text-center">
                        <img className="primerafoto" src={Audiofoto} />
                    </div>
                </div>

                <div className="mt-3">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-4">
                                <img className="primerafoto" src={Audiofoto} />
                            </div>
                            <div className="col-4">
                                <img className="primerafoto" src={Audiofoto} />
                            </div>
                            <div className="col-4">
                                <img className="primerafoto" src={Audiofoto} />
                            </div>
                        </div>

                    </div>

                </div>
                <div className="text-center pt-3 pb-3">
                    <h3>
                        EMCOP tiene uno de los mejores sistemas de iluminacion del mercado, siempre logrando las espectativas del cliente y mas. De todas las formas y colores te voltearan a ver
                    </h3>
                </div>
                <div className="container text-center">
                    <div className="row">
                        <div className="col-4">
                            <div class="card ancho ms-5">
                                <img src={Fotoiluminacion3} class="card-img-top primerafoto"/>
                                <div class="card-body">
                                    <h5 class="card-title">Bocina Bose</h5>
                                    <p class="card-text">Ideal para eventos que requieren una fidelidad alta y claridad al momento de reproducir audio </p>
                                    <a href="/login" class="btn boton-hero">Cotizar</a>
                                </div>

                            </div>
                        </div>
                        <div className="col-4">
                            <div class="card ancho ms-5">
                                <img src={Fotoiluminacion3} class="card-img-top primerafoto" />
                                <div class="card-body">
                                    <h5 class="card-title">Bocina JBL</h5>
                                    <p class="card-text">Una de las bocinas para eventos mas confiables y de fidelidad media, ideal para exposiciones y ponencias</p>
                                    <a href="/login" class="btn boton-hero">Cotizar</a>
                                </div>

                            </div>
                        </div>
                        <div className="col-4">
                            <div class="card ancho ms-5">
                                <img src={Fotoiluminacion3} class="card-img-top primerafoto"/>
                                <div class="card-body">
                                    <h5 class="card-title">Bocina hola</h5>
                                    <p class="card-text">Bocina enfocada para eventos que no requieren de fidelidad, uncamente para temas de ambientacion y discursos medios</p>
                                    <a href="/login" class="btn boton-hero">Cotizar</a>
                                </div>

                            </div>
                        </div>

                    </div>


                </div>
            </div>

        </div>
    );
};