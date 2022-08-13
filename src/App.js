import React from "react";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import AboutMe from "./Components/AboutMe";
import Footer from "./Components/Footer";
import Contacts from "./Components/Contacts";
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Navbar />
			</header>
			<main>
				<Hero />
				<AboutMe />
				<Projects />
				<Contacts />
			</main>
			<Footer />
		</div>
	);
}

export default App;
