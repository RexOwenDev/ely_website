import React from "react";
import "./terms.css";
import aboutImg from "../../img/Ely_5.png";

const Terms = () => {
	return (
		<div className="a">
			<div className="a-left">
				<div className="a-card bg"></div>
				<div className="a-card">
					<img src={aboutImg} alt="" className="a-img" />
				</div>
			</div>
			<div className="a-right">
				<h1 className="a-title">COPYRIGHT</h1>
				<p className="a-sub">
					I. The artist has the right to: <br /> 1. All preliminary sketches and
					produced drawings. <br />
					2. Use the commissioned work for promotion purposes. <br /> II. If the
					client wishes to post the commissioned artwork, he/she should credit
					the artist accordingly. <br /> II. Watermarks shall not be removed by
					the client when reposting the artwork.
				</p>
				<d className="hidden">
					<h1 className="a-title">
						TERMS OF SERVICE <br />
					</h1>
					<p className="a-desc">
						The artist: <br /> 1. Has the right to decline a commission without
						further specification. <br />
						2. Will not give any of the raw materials used in the creation of
						the artwork. <br />
						3. Will receive personal, non-commercial, and commercial works.{" "}
						<br />
					</p>
				</d>
			</div>
		</div>
	);
};

export default Terms;
