import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/eventostyles.css";

export const ContactUs = () => {
    return(
        <div>
            <div className="imagenfondoeventos">
                <h1 className="text-center">Contacto</h1>
                <h3>
                    <ul>
                        <li>
                        Numero telefonico <i class="fa-solid fa-phone"></i> : 564613246613
                        </li>
                        <li>
                            Correo electronico <i class="fa-regular fa-envelope"></i> : emcop@gmail.com
                        </li>
                        <li>
                            WhatsApp <i class="fa-brands fa-whatsapp"></i> : 19161316516484
                        </li>
                    </ul>
                </h3>
                
            </div>
        </div>
    );
};