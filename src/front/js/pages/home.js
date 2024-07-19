import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import imagenprueba from "../../img/imagen-para-login.jpg";
import logoemcop from "../../img/emcop2.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="fondogeneral">
			<div className="fondolanding">
				<div className="titulolanding">
					<h1 className="letrahero"><strong>Sonido de calidad pasion eterna</strong></h1>
					<h3 className="mt-3">Buscamos brindar servicio profesional de renta de equipo audiovisual para toda clase de eventos, desde eventos chicos hasta masivos, sin olvidarnos de  proporcionar atención y tranquilidad al cliente</h3>
					<div className="text-end me-5">
						<img src={logoemcop}></img>
					</div>
				</div>
			</div>
			<div className="mt-5">
				<div className="container azulclaro">
					<div className="row">
						<div className="col-6">
							<div className="diplay-flex">
								<h3 className="textocentrado">¿Quienes somos?</h3>
							</div>
						</div>
						<div className="col-6">
							<h2 className="textojustificado">Somos líderes en soluciones audiovisuales integrales, dedicados a transformar tus ideas en experiencias visuales y sonoras incomparables. Con más de una década de experiencia en la industria, ofrecemos servicios personalizados que abarcan desde la planificación y diseño hasta la instalación y mantenimiento de sistemas audiovisuales de última generación.</h2>
						</div>
					</div>
				</div>
				<div className="mt-5">
					<div className="container azul2">
						<div className="row">
							<div className="col-6">
								<h3 className="textojustificado">
									<ul>
										<li>Experiencia y Profesionalismo: Nuestro equipo está compuesto por expertos altamente capacitados y con una vasta experiencia en el campo audiovisual.</li>
										<li>Tecnología de Vanguardia: Utilizamos las últimas tecnologías y equipos de las marcas más reconocidas en la industria.</li>
										<li>Atención Personalizada: Ofrecemos soluciones a medida y un servicio al cliente excepcional, adaptándonos a las necesidades específicas de cada proyecto.</li>
										<li>Resultados Garantizados: Comprometidos con la excelencia, garantizamos resultados que superan las expectativas y crean un impacto duradero.</li>
									</ul>
								</h3>
							</div>
							<div className="col-6">
								<div className="display-flex">
									<h3 className="textoporque">¿Porque elegirnos?</h3>
								</div>
								
							</div>
						</div>
					</div>
				</div>
				<div className="mt-5">
					<div className="container azul3">
						<div className="row">
							<div className="display-flex">
								<h2 className="nuestramision">Nuestra mision</h2>
							</div>
							
							<h3 className="textojustificado ">Proporcionar soluciones audiovisuales innovadoras que mejoren la comunicación, faciliten el aprendizaje y enriquezcan el entretenimiento. Nos esforzamos por superar las expectativas de nuestros clientes mediante un enfoque centrado en la calidad, la eficiencia y la satisfacción del cliente.</h3>
						</div>

					</div>
				
				</div>
			</div>
		</div>


	);
};
