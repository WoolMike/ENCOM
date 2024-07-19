import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import Header from "../component/headerdashboard";

export const Cotizaciones = () => {
    const { store, actions } = useContext(Context);
    const [equipos, setEquipo] = useState('');
    const [cantidad, setCantidad] = useState('');

    useEffect(() => {
        actions.getEquipos();
        actions.getTipos();
    }, [])

    const index = 0;
    const updateEquipo = (index, value) => {
        const newEquipo = [...equipos];
        newEquipo[index] = parseInt(value);
        setEquipo(newEquipo);
        console.log(newEquipo)
        console.log(typeof newEquipo[0])
    };

    const updateCantidad = (index, value) => {
        const newCantidad = [...cantidad];
        newCantidad[index] = value;
        setCantidad(newCantidad);
        console.log(newCantidad)
    };

    async function cotizacionhecha(){
        console.log(equipos)
        console.log(cantidad)
        const cotizacionexiste=await actions.getCotizacion(equipos,cantidad)
        console.log(cotizacionexiste)
        if(cotizacionexiste){
            console.log("cotizacion creada")
        }
    }

    return (
        <div>
            <h1 className="text-center">Selecciona los equipos que quieres cotizar</h1>
            <form>
                <select class="form-select form-select-lg mb-3" aria-label="Large select example">
                    <option selected>Tipos</option>
                    {store.tipos && store.tipos.map(tipos => (
                        <option value={tipos.id}>{tipos.name}</option>
                    ))}
                </select>

                <select class="form-select form-select-lg mb-3" aria-label="Large select example" value={equipos} onChange={(e) => updateEquipo(0, e.target.value)}>
                    <option selected>Equipos</option>
                    {store.equipos && store.equipos.map(equipos => (
                        <option value={equipos.id}>{equipos.name}</option>
                    ))}
                </select>
                <select class="form-select form-select-lg mb-3" aria-label="Large select example" value={cantidad} onChange={(e) => updateCantidad(0, e.target.value)}>
                    <option selected>Cantidad</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>

                <button type="button" class="btn btn-success" onClick={cotizacionhecha}>Success</button>
            </form>

        </div>
    )

}