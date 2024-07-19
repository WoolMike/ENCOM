import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/eventostyles.css";
import Fotoevento from "../../img/eventos1.jpg";
import Fotoevento2 from "../../img/iluminacion1.jpg"

export const Eventos = () => {
    return (
        <div className="imagenfondoeventos">
            <div className="pt-4">
                <div className="ps-4 pe-4">
                    <h1 className="text-center"><strong>Eventos</strong></h1>
                    <h3 className="text-center">Nuestos eventos se basan en las necesidades de nuestros clientes a si como en las cosas y sugerencias que los clientes comentan</h3>
                    <div className="text-center">
                        <img className="primerafoto" src={Fotoevento2}/>
                    </div>
                </div>

                <div className="mt-3">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-4">
                                <img className="primerafoto" src={Fotoevento}/>
                            </div>
                            <div className="col-4">
                                <img className="primerafoto" src={Fotoevento}/>
                            </div>
                            <div className="col-4">
                                <img className="primerafoto" src={Fotoevento}/>
                            </div>
                        </div>
                        
                    </div>

                </div>
                 <div className="text-center pt-3 pb-3">
                    <h3>
                        Esto es solo una de las cosas que es pueden crear en EMCOP
                    </h3>
                    <p>Buscamos siempre la perfeccion en cada uno de los evetnos que producimos, asi como siempre tener los mas altos estandares de calidad de toda la industria.</p>
                    <p>Es por eso que en EMCOP tienes la seguridad de la produccion de eventos de talla mundial siempre pensando en ti como la parte mas importante del evento</p>
                </div>
            </div>

        </div>
    );
};