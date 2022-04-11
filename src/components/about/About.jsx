import React from "react";
import "./about.css";
import aboutImg from "../../img/Ely_2.png";
import aboutImg2 from "../../img/digital_icon.png";

const About = () => {
	return (
		<div className="a">
			<div className="a-left">
				<div className="a-card bg"></div>
				<div className="a-card">
					<img src={aboutImg} alt="" className="a-img" />
				</div>
			</div>
			<div className="a-right">
				<a
					href="https://cdn.discordapp.com/attachments/956248903727079504/956252247724015636/image03.png"
					target="_blank"
					rel="noreferrer"
				>
					<h1 className="title">CLICK FOR RATES!</h1>
				</a>
				<h1 className="a-title">PROCESS</h1>
				<p className="a-sub">
					1. The discussion of details will be through DM’s or E-mail. <br /> 2.
					Settling of payments is first due. <br />
					3. The artist will then start and send the client a rough sketch/
					preview of the commission. <br /> 4. The artist will allow for at
					least two (2) revisions. Any changes exceeding that will procure
					additional charges. <br /> 5. The artist will then work on the
					commission for a particular amount of time and will contact you within
					a few days or so with the finished output. <br /> 6. Through E-mail,
					the artist will send the finished output after settling all additional
					charges.
				</p>

				<h1 className="a-title">MODE OF DELIVERY</h1>
				<p className="a-sub">
					1. The artist will send the completed commissions through E-mail.
				</p>
				<div className="a-award">
					<img src={aboutImg2} alt="" className="a-award-img" />
					<div className="a-award-texts">
						<h4 className="a-award-title">PAYMENT</h4>
						<p className="a-award-desc">
							1. Payment will be via PAYPAL and GCASH only. <br /> 2. Payment
							first before starting the artwork. <br /> 3. Prices may vary
							according to the complexity and difficulty of the commission.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
