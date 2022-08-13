import React from "react";
import DArrow from "../images/icons/down-arrow.svg";

import HTMLLogo from "../images/icons/html-5-logo.svg";
import JSLogo from "../images/icons/js-logo.svg";
import SassLogoBlack from "../images/icons/sass-logo-black.svg";
import SassLogo from "../images/icons/sass-logo.svg";
import GithubLogo from "../images/icons/github-logo-white.png";
import ReactLogo from "../images/icons/react-logo.svg";
import NodeJsLogo from "../images/icons/nodejs-logo.svg";
import PythonLogo from "../images/icons/python-logo.svg";
import CssLogo from "../images/icons/css-logo.svg";
import GoogleLogo from "../images/icons/google-logo.svg";

export default function AboutMe() {
	return (
		<section id="about-me">
			<div className="aboutme">
				<div className="container">
					<div className="content">
						<h2 className="item1">ABOUT ME</h2>
						<div className="part item2">
							<h3>Myself</h3>
							<p>
								Hi, my name is Cameron, a Web developer, an Arch enjoyer and a
								Gamer
								<br />
								<br />I spend my days troubleshooting games on Arch and as a
								result I have become proficient in using google to search for
								what I want / need
							</p>
						</div>
						<div className="part item3">
							<h3>Exp</h3>
							<p>
								I originally wanted to be a backend developer but since working
								in the web hosting industry, I discovered the enjoyment in
								making websites and automating some random things
								<br />
								<br />
								Now with the skills I learnt in web hosting I have decided to
								move to become a web developer
							</p>
						</div>
						<div className="part item4">
							<h3>Skills</h3>
							<ul className="skillsList">
								<li>
									Javascript
									<img src={JSLogo} />
								</li>
								<li>
									React
									<img src={ReactLogo} />
								</li>
								<li>
									HTML
									<img src={HTMLLogo} />
								</li>
								<li>
									CSS
									<img src={CssLogo} />
								</li>
								<li>
									Sass
									<img src={SassLogo} />
								</li>
								<li>
									Python
									<img src={PythonLogo} />
								</li>
								<li>
									Google
									<img src={GoogleLogo} />
								</li>
								<li>
									github
									<img src={GithubLogo} />
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
