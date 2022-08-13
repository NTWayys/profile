import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contacts() {
	const [emailSent, setEmailSent] = useState(false);
	const [checked, setChecked] = useState(false);

	const [captchaComplete, setCaptchaComplete] = useState(false);
	function verifyCallback() {
		setCaptchaComplete(() => true);
	}
	const checkBoxChange = (checked) => {
		setChecked((checked) => !checked);
	};
	const CAPTCHA_SITE_KEY = "6LdzjnEhAAAAAKTGfqc3_CVtwKUgQP7odezY6iCf";
	let templateId = "template_nszykbv";
	const form = useRef();

	const sendEmail = (e) => {
		if (captchaComplete) {
			e.preventDefault();
			setEmailSent(true);
			if (checked === true) {
				templateId = "template_nszykbv";
			} else {
				templateId = "template_8bijbzc";
			}
			emailjs
				.sendForm(
					"service_d7nsdt8",
					templateId,
					form.current,
					"SttUMqHsn7QG6DbhQ"
				)
				.then(
					(result) => {
						console.log(result.text);
					},
					(error) => {
						console.log(error.text);
					}
				);
		}
	};

	return (
		<section className="contact-me" id="contacts">
			<div className="container">
				<div className="content">
					<h2>CONTACTS</h2>
					<div className="part item2">
						<h3>Online profile</h3>
						<ul>
							<li>Website: asdfghjkl.co.za</li>
							<li>
								Email: <a href="mailto:wayys@wayys.co.za">wayys@wayys.co.za</a>
							</li>

							<li>
								Github:<a href="https://github.com/NTWayys"> NTWayys</a>
							</li>

							<li>
								CssBattle:
								<a href="https://cssbattle.dev/player/wayys"> Wayys</a>
							</li>
							<li>
								FrontendMentor:{" "}
								<a href="https://www.frontendmentor.io/profile/NTWayys">
									NTWayys
								</a>
							</li>
							<li>Discord: Wayys#8866</li>
							<li>
								Steam ID:
								<a href="https://steamcommunity.com/id/wayys"> Wayys</a>
							</li>
						</ul>
					</div>
					{emailSent ? (
						<div className="contactForm">
							<h3>Email has been sent</h3>
							<p>
								Thank you for sending a mail, I will reply as soon as possible.
							</p>
						</div>
					) : (
						<form className="contactForm" ref={form} onSubmit={sendEmail}>
							<label className="contactLabel">
								Name
								<input
									className="input"
									type="text"
									name="from_name"
									required
								/>
							</label>

							<label className="contactLabel">
								Email
								<input
									className="input"
									type="email"
									name="reply_to"
									required
								/>
							</label>

							<label className="contactLabel">
								Message
								<textarea name="message" />
							</label>

							<label className="contactConfirm">
								Receive a email confirming delivery?
								<input
									type="checkbox"
									checked={checked}
									onChange={checkBoxChange}
								/>
							</label>

							<ReCAPTCHA
								className="recaptcha"
								sitekey={CAPTCHA_SITE_KEY}
								onChange={verifyCallback}
							/>
							<input
								disabled={captchaComplete ? false : true}
								className={captchaComplete ? "btn" : "btn disabledbtn"}
								type="submit"
								value="Send"
							/>
						</form>
					)}
				</div>
			</div>
		</section>
	);
}
