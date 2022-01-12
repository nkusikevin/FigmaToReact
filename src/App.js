import React from "react";
import NavBar from "./components/Navbar/NavBar";
import Hero from "./components/HeroSection/Hero";
import About from "./components/About/About";
import Latest from "./components/Latest";
import Contact from "./components/Contact";
import Footer  from "./components/Footer"
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
function App() {
	return (
		<div className='app'>
			<Router>
				<NavBar />
				<Hero />
				<About />
				<Latest/>
				<Contact />
				<Footer />
			</Router>
		</div>
	);
}

export default App;
