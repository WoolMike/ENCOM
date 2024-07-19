import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/eventostyles.css";
import Fotoevento from "../../img/eventos1.jpg";
import Fotovideo from "../../img/imagen-para-login.jpg";
import Fotovideo2 from "../../img/video2.jpg";

export const Video = () => {
    return (

        <div className="imagenfondoeventos">
            <div className="pt-4">
                <div className="ps-4 pe-4">
                    <h1 className="text-center"><strong>Video</strong></h1>
                    <h3 className="text-center">Nuestos eventos se basan en las necesidades de nuestros clientes a si como en las cosas y sugerencias que los clientes comentan</h3>
                    <div className="text-center">
                        <img className="primerafoto" src={Fotovideo} />
                    </div>
                </div>

                <div className="mt-3">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-4">
                                <img className="primerafoto" src={Fotoevento} />
                            </div>
                            <div className="col-4">
                                <img className="primerafoto" src={Fotovideo2} />
                            </div>
                            <div className="col-4">
                                <img className="primerafoto" src={Fotoevento} />
                            </div>
                        </div>

                    </div>

                </div>
                <div className="text-center pt-3 pb-3">
                    <h3>
                        EMCOP se caracteriza en tener las mejores pantallas del mercado para que todos vean lo espectacular del evento y no se pierdan de ningun detalle y asi puedas trasmitir con imagenes emociones
                    </h3>
                </div>
                <div className="container text-center">
                    <div className="row">
                        <div className="col-4">
                            <div class="card ancho ms-4">
                                <img src={Fotovideo2} class="card-img-top primerafoto"/>
                                <div class="card-body">
                                    <h5 class="card-title">Proyectores</h5>
                                    <p class="card-text">Una de las opciones mas conocidas en los eventos que nunca desepciona</p>
                                    <a href="/login" class="btn boton-hero">Cotizar</a>
                                </div>

                            </div>
                        </div>
                        <div className="col-4">
                            <div class="card ancho ms-4">
                                <img src={Fotovideo2} class="card-img-top primerafoto" />
                                <div class="card-body">
                                    <h5 class="card-title">Proyectores Laser</h5>
                                    <p class="card-text">La opcion mas conocida mejorada con colores y contrastes nunca antes visto</p>
                                    <a href="/login" class="btn boton-hero">Cotizar</a>
                                </div>

                            </div>
                        </div>
                        <div className="col-4">
                            <div class="card ancho ms-4">
                                <img src={Fotovideo2} class="card-img-top primerafoto"/>
                                <div class="card-body">
                                    <h5 class="card-title">Pantallas a medida</h5>
                                    <p class="card-text">Pantalla que se adapata a cualquier lugar y distancia que te puedes imaginar</p>
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