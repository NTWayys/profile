import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function Navbar() {
	const dropItems = document.getElementById("dropItems");

	const isWide = window.innerWidth > 1000;

	return (
		<nav className="navbar">
			<div className="container">
				<div className="logo">
					<a href="https://Wayys.co.za">
						<span className="firstLetter">W</span>ayys
					</a>
				</div>
				<div className={!isWide && "dropDown"}>
					{!isWide && <h4>Menu</h4>}
					<ul
						className={`
            ${!isWide ? "dropItems" : "navItems"} 
          `}
					>
						<li>
							<a href="#about-me">About Me</a>
						</li>
						<li>
							<a href="#">Projects</a>
						</li>
						<li>
							<a href="#">Contacts</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
