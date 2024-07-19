import React from "react";
import { Link } from "react-router-dom";
import emcop from "../../img/emcop2.jpg";
import "../../styles/navbarstyles.css";

export const Navbar = () => {
	const excludePaths = ["/login", "/register","/dashboard","/perfil"]; //insert in this array other paths where navbar is not wanted.
	const shouldExcludeNavbar = excludePaths.includes(location.pathname);
	const isSinglePage  = location.pathname.startsWith("/single/");
	
    if (shouldExcludeNavbar || isSinglePage) {
        return null; // Don't render anything if the current path is included in excludePaths
    }
	return (
		<div className="coloresnav">
			<nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
				<div className="container-fluid">
					<a className="navbar-brand" href="/"><img src={emcop} className="logodeco" /></a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse " id="navbarNavDropdown">
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li class="nav-item ">
								<a class="nav-link active" aria-current="page" href="/eventos">Eventos</a>
							</li>
							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle vistas" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Equipo
								</a>
								<ul class="dropdown-menu">
									<li><a class="dropdown-item vistas" href="/video"><i class="fa-solid fa-video"></i> Video </a></li>
									<li><a class="dropdown-item vistas" href="/iluminacion"><i class="fa-solid fa-lightbulb"></i> Iluminacion</a></li>
									<li><a class="dropdown-item vistas" href="/audio"> <i class="fa-solid fa-volume-high"></i> Audio</a></li>
								</ul>
							</li>
							<li className="nav-item">
								<a className="nav-link vistas" href="/login">Login <i class="fa-solid fa-right-to-bracket"></i></a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};
