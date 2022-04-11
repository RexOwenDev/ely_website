import React from "react";
import "./contact.css";

import Email from "../../img/email.png";

import Twitter from "../../img/twitter.png";
import Instagram from "../../img/instagram.png";
import Paypal from "../../img/paypal.png";
import Browser from "../../img/browser.png";

import { useRef, useContext, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
	const formRef = useRef();
	const [done, setDone] = useState(false);
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_xyzd0go",
				"template_h125169",
				formRef.current,
				"yQ5_TuOqXC0d9A2-L"
			)
			.then(
				(result) => {
					console.log(result.text);
					setDone(true);
					setName("");
					setEmail("");
					setSubject("");
					setMessage("");
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<div className="c">
			<div className="c-bg"></div>
			<div className="c-wrapper">
				<div className="c-left">
					<h1 className="c-title">COMISSION FORM </h1>
					<div className="c-info">
						<div className="c-info-item">
							<img src={Email} alt="" className="c-icon" /> caelysx@gmail.com
						</div>
						<div className="c-info-item">
							<img src={Twitter} alt="" className="c-icon" /> caelysx
						</div>
						<div className="c-info-item">
							<img src={Instagram} alt="" className="c-icon" /> caelysx
						</div>
						<div className="c-info-item">
							<img src={Paypal} alt="" className="c-icon" /> caelysx@gmail.com
						</div>
						<div className="c-info-item">
							<img src={Browser} alt="" className="c-icon" />
							https://ko-fi.com/caelysx
						</div>
					</div>
				</div>
				<div className="c-right">
					<p className="c-desc">
						Commission style (illustration/emote) : <br /> Commission type
						(icon, full body, album art etc.) : <br />
						preferred background style: <br /> Allow social media posting?
						(yes/no) : <br /> Deadline: <br />
						Commission details and references (descriptions, pose preference,
						etc.) : <br /> Mode of payment (paypal/gcash/bank transfer):
					</p>

					<form ref={formRef} onSubmit={handleSubmit}>
						<input
							style={{ backgroundColor: darkMode && "#333" }}
							type="text"
							placeholder="Name"
							name="user_name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
						<input
							style={{ backgroundColor: darkMode && "#333" }}
							type="text"
							placeholder="Email"
							name="user_email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>

						<input
							style={{ backgroundColor: darkMode && "#333" }}
							type="text"
							placeholder="Subject"
							name="user_subject"
							value={subject}
							onChange={(e) => setSubject(e.target.value)}
							required
						/>

						<textarea
							style={{ backgroundColor: darkMode && "#333" }}
							name="message"
							rows="5"
							placeholder="Message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							required
						/>
						<button>Submit</button>
						{done && "Thank You for Sending a Message!"}
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
