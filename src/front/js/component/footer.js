import React, { Component } from "react";
import "../../styles/footerstyles.css";

export const Footer = () => (
	<footer className="footer mt-auto py-3">
		<div className="row">
			<div className="col-6">
				<ul>
					<li className="list-group-item"><a href="/">Home</a></li>
					<li className="list-group-item"><a href="/aboutus">About Us</a></li>
					<li className="list-group-item"><a href="/contactus">Contact Us</a></li>
				</ul>
			</div>
			<div className="col-6">
				<ul className="socialmediabox">
					<li className="list-group-item text-end"><i class="fa-brands fa-facebook"></i><a href="#" target="_blank"> EMCOP</a></li>
					<li className="list-group-item text-end"><i class="fa-brands fa-tiktok"></i> <a href="https://www.tiktok.com/@emcop_?_t=8mXnWbzBteX&_r=1" target="_blank">EMCOP</a></li>
					<li className="list-group-item text-end"><i class="fa-brands fa-instagram"></i> <a href="#" target="_blank">EMCOP</a></li>
				</ul>
			</div>
		</div>
	</footer>
);
