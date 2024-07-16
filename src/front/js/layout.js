import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Eventos } from "./pages/eventos";
import {Video} from "./pages/video";
import { Iluminacion } from "./pages/iluminaion";
import { Traduccion } from "./pages/traduccion";
import { ContactUs } from "./pages/contactus";
import { AboutUs } from "./pages/aboutus";
import { Audio } from "./pages/audio";
import injectContext from "./store/appContext";
import { Dashboard } from "./pages/dashboard";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Login/>} path="/login"/>
                        <Route element={<Register/>} path="/register"/>
                        <Route element={<Eventos/>} path="/eventos"/>
                        <Route element={<Video/>} path="/video"/>
                        <Route element={<Iluminacion/>} path="/iluminacion"/>
                        <Route element={<Audio/>} path="/audio"/>
                        <Route element={<Traduccion/>} path="/traduccion"/>
                        <Route element={<ContactUs/>} path="/contactus"/>
                        <Route element={<AboutUs/>} path="/aboutus"/>
                        <Route element={<Dashboard/>} path="/dashboard"/>
                        <Route element={<Single />}  path="/single/:theid" />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
