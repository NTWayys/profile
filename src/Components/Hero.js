import React from "react";
import DArrow from "../images/icons/down-arrow.svg";

export default function Hero() {
	window.onload = () => {
		var span = document.getElementById("updateText");
		var textArr = [
			"help build a smarter future.",
			"work for you.",
			"bring people together",
			"work for others",
		];
		var maxTextIndex = textArr.length;

		var sPerChar = 0.05;
		var sBetweenWord = 5;
		var textIndex = 0;

		typing(textIndex, textArr[textIndex]);

		function typing(textIndex, text) {
			var charIndex = 0;
			var maxCharIndex = text.length - 1;

			var typeInterval = setInterval(function () {
				span.textContent += text[charIndex];

				if (charIndex === maxCharIndex) {
					clearInterval(typeInterval);
					setTimeout(function () {
						deleting(textIndex, text);
					}, sBetweenWord * 1000);
				} else {
					charIndex += 1;
				}
			}, sPerChar * 1000);
		}

		function deleting(textIndex, text) {
			var minCharIndex = 0;
			var charIndex = text.length - 1;

			var typeInterval = setInterval(function () {
				span.textContent = text.substr(0, charIndex);
				if (charIndex === minCharIndex) {
					clearInterval(typeInterval);
					textIndex + 1 === maxTextIndex ? (textIndex = 0) : (textIndex += 1);
					setTimeout(function () {
						typing(textIndex, textArr[textIndex]);
					}, 500);
				} else {
					charIndex -= 1;
				}
			}, sPerChar * 1000);
		}
	};

	return (
		<section>
			<div className="hero">
				<div className="container">
					<div className="content">
						<div className="logo">
							<h1>
								<span className="firstLetter">W</span>ayys
							</h1>
						</div>
						<p>
							I believe that all Tech should <br />:{" "}
							<span id="updateText"> </span>
						</p>
						<div className="actionButtons">
							<a className="btn" href="#contacts">
								Mail Me
							</a>
							<a
								className="btn"
								href="https://github.com/NTWayys"
								target="_blank"
							>
								Profile
							</a>
						</div>
					</div>
				</div>
				<a className="scroller smallIndicator" href="#about-me">
					Scroll a bit
					<img src={DArrow} />
				</a>
			</div>
		</section>
	);
}
