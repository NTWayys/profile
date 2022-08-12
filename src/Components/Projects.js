import React, { useState } from "react";

import HTMLLogo from "../images/icons/html-5-logo.svg";
import JSLogo from "../images/icons/js-logo.svg";
import SassLogoBlack from "../images/icons/sass-logo-black.svg";
import GithubLogo from "../images/icons/github-logo-white.png";
import ReactLogo from "../images/icons/react-logo.svg";

export default function Projects() {
	return (
		<section className="projects">
			<div className="container">
				<div className="content">
					<h2>Projects preview</h2>
					<div className="projectList">
						<div className="project">
							<div className="projectDesc">
								<h3>Chrome movie Extension</h3>
								<p>
									Custom chrome "New Tab" page that shows me the latest movies
									released using TMDB API as a way to find new releases
								</p>
							</div>
							<div className="LogosContainer">
								<div className="techLogos">
									<img src={HTMLLogo} />
									<img src={JSLogo} />
									<img src={SassLogoBlack} />
								</div>
								<a
									className="githubLogo"
									href="https://github.com/NTWayys/chromExt"
								>
									<img src={GithubLogo} />
								</a>
							</div>
						</div>
						<div className="project">
							<div className="projectDesc">
								<h3>Tribute page</h3>
								<p>
									A tribute page directed at Porter Robinson, a music producer
									who made the song Shelter
								</p>
							</div>
							<div className="LogosContainer">
								<div className="techLogos">
									<img src={ReactLogo} />
									<img src={JSLogo} />
									<img src={SassLogoBlack} />
								</div>
								<a
									className="githubLogo"
									href="https://github.com/NTWayys/porterRobinsonTributePage"
								>
									<img src={GithubLogo} />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
