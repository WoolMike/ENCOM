import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/eventostyles.css";
import Fotoiluminacion1 from "../../img/iluminacion1.jpg";
import Fotoiluminacion2 from "../../img/iluminacion2.jpg";
import Fotoiluminacion3 from "../../img/iluminacion3.jpg";

export const Iluminacion = () => {
    return(
        <div className="imagenfondoeventos">
            <div className="pt-4">
                <div className="ps-4 pe-4">
                    <h1 className="text-center"><strong>Iluminacion</strong></h1>
                    <h3 className="text-center">La claridad jamas habia tenido tanto peso en un evento como ahora</h3>
                    <div className="text-center">
                        <img className="primerafoto" src={Fotoiluminacion3} />
                    </div>
                </div>

                <div className="mt-3">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-4">
                                <img className="primerafoto" src={Fotoiluminacion3} />
                            </div>
                            <div className="col-4">
                                <img className="primerafoto" src={Fotoiluminacion3} />
                            </div>
                            <div className="col-4">
                                <img className="primerafoto" src={Fotoiluminacion3} />
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
                                    <h5 class="card-title">Luces manuales</h5>
                                    <p class="card-text">Las luces clasicas sin que pierdan potencia ni definicion en ningun momento</p>
                                    <a href="/login" class="btn boton-hero">Cotizar</a>
                                </div>

                            </div>
                        </div>
                        <div className="col-4">
                            <div class="card ancho ms-5">
                                <img src={Fotoiluminacion3} class="card-img-top primerafoto" />
                                <div class="card-body">
                                    <h5 class="card-title">Luces roboticas</h5>
                                    <p class="card-text">Luces programables que te permiten un si fin de posibilidades sin latencia ni errores</p>
                                    <a href="/login" class="btn boton-hero">Cotizar</a>
                                </div>

                            </div>
                        </div>
                        <div className="col-4">
                            <div class="card ancho ms-5">
                                <img src={Fotoiluminacion3} class="card-img-top primerafoto"/>
                                <div class="card-body">
                                    <h5 class="card-title">Luces locas</h5>
                                    <p class="card-text">Lo que tengas en la mente esta luces lo pueden lograr por mas bizarra sea tu idea</p>
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