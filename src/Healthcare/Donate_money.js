import React from "react";
import "./Donate_money.css";
import Money from "./images/MoneyD.jpg";

export default function donate_money() {
	return (
		<div className="money">
			<div className="subM">
				<h1 className="apptitle">Application of Your Donation</h1>
				<p className="appcontent">
					The Emergency Fund has been set up to help patients get treatment as
					quickly as possible. It was created for our marginalised patients.
					Many travel great distances for their loved one to get better. They
					spend all of their life savings, and more, on travel and accommodation
					leaving little for their treatment.
					<br className="BrForMoney" />
					<br />
					<div className="MoneyConPart2">
						Others come to CMC and are not expecting a major illness to be
						diagnosed. But when they are told about the diagnosis and the
						treatment needed, they know they cannot afford it. And some have an
						accident that needs immediate treatment to save their lives.
					</div>
					<br className="BrForMoney" />
					<br />
					<span className="contspan1">
						But we never want to turn a patient away!
					</span>
					<br className="BrForMoney" />
					<br />
					<hr />
					<br />
					<span className="contspan2">
						Please join us and help others facing desperate times, through a
						donation to the Emergency Fund.
					</span>
				</p>
				<button className="donatebutn">Donate</button>
				<img src={Money} className="MoneyImg" alt="" />
			</div>
		</div>
	);
}
