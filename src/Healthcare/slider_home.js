import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./slider2-com";
import "./slider_home.css";
// import "./slider2_subslider2.css";
import sp1Gen from "./images/general-sp1.png";
import sp2Gen from "./images/general-sp2.png";
import sp3Gen from "./images/general-sp3.png";
import sp1Gyn from "./images/sp1Gyn.jpg";
import sp2Gyn from "./images/sp2Gyn.jpg";
import sp3Gyn from "./images/sp3Gyn.jpg";
import SkinSp1 from "./images/SkinSp1.jpg";
import SkinSp2 from "./images/SkinSp2.jpg";
import SkinSp3 from "./images/SkinSp3.png";

const breakpoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2 },
	{ width: 768, itemsToShow: 3 },
	{ width: 1200, itemsToShow: 5 },
];

export default function slider2() {
	return (
		<div className="DctSlider">
			<Carousel breakPoints={breakpoints}>
				<Item>
					<div className="dct-name-container">
						<img src={sp1Gen} className="dctImagHome" alt="" />
						<div className="dct-detail">
							<p className="dct-name">
								<b>Dr. Aman Kumar</b>
								<br /> (GENERAL PHYSICIAN) <br />
								<br />
								<b>Qualification :</b> MBBS, MD
								<br />
								<b> Experience :</b> 29 years +
							</p>
						</div>
					</div>
				</Item>
				<Item>
					<div className="dct-name-container">
						<img src={sp2Gen} className="dctImagHome" alt="" />
						<div className="dct-detail">
							<p className="dct-name">
								<b>Dr. Chandrasekar Chandilya</b>
								<br /> (GENERAL PHYSICIAN) <br />
								<br />
								<b>Qualification :</b> MD (Internal Medicine); FRCP
								<br />
								<b> Experience :</b> 29 years +
							</p>
						</div>
					</div>
				</Item>
				<Item>
					<div className="dct-name-container">
						<img src={sp3Gen} className="dctImagHome" alt="" />
						<div className="dct-detail">
							<p className="dct-name">
								<b>Dr. Arup Sahu</b>
								<br /> (GENERAL PHYSICIAN) <br />
								<br />
								<b>Qualification :</b> MD (Med)
								<br />
								<b> Experience :</b> 19 years +
							</p>
						</div>
					</div>
				</Item>
				<Item>
					<div className="dct-name-container">
						<img src={sp1Gyn} className="dctImagHome" alt="" />
						<div className="dct-detail">
							<p className="dct-name">
								<b>Dr. Divyesh Shukla</b>
								<br /> (Consultant Gynaecological endoscopic surgeon) <br />
								<br />
								<b>Qualification :</b> MBBS. MD
								<br />
								<b> Experience :</b> 16 years +
							</p>
						</div>
					</div>
				</Item>
				<Item>
					<div className="dct-name-container">
						<img src={sp2Gyn} className="dctImagHome" alt="" />
						<div className="dct-detail">
							<p className="dct-name">
								<b>Dr. Shilpi Shukla</b>
								<br /> (Consultant Obstetrician & Gynaecologist & Infertility
								specialist)
								<br />
								<br />
								<b>Qualification :</b> MBBS. MD
								<br />
								<b> Experience :</b> 10 years +
							</p>
						</div>
					</div>
				</Item>
				<Item>
					<div className="dct-name-container">
						<img src={sp3Gyn} className="dctImagHome" alt="" />
						<div className="dct-detail">
							<p className="dct-name">
								<b>Dr. Parul Valia</b>
								<br /> (D.ch, M.D.) <br />
								<br />
								<b>Qualification :</b> M.D; D.Ch; PGD- DN
								<br />
								<b> Experience :</b> 27 years +
							</p>
						</div>
					</div>
				</Item>
				<Item>
					<div className="dct-name-container">
						<img src={SkinSp1} className="dctImagHome" alt="" />
						<div className="dct-detail">
							<p className="dct-name">
								<b>Dr.Sheetal Srinivas</b>
								<br /> (Dermatologist) <br />
								<br />
								<b>Qualification :</b> MBBS, MD (DVL)
								<br />
								<b> Experience :</b> 7 year
							</p>
						</div>
					</div>
				</Item>
				<Item>
					<div className="dct-name-container">
						<img src={SkinSp2} className="dctImagHome" alt="" />
						<div className="dct-detail">
							<p className="dct-name">
								<b>Dr.Debasmita</b>
								<br /> (Dermatologist, Cosmetologist) <br />
								<br />
								<b>Qualification :</b> MBBS, DDVL
								<br />
								<b> Experience :</b> 10 year
							</p>
						</div>
					</div>
				</Item>
				<Item>
					<div className="dct-name-container">
						<img src={SkinSp3} className="dctImagHome" alt="" />
						<div className="dct-detail">
							<p className="dct-name">
								<b>Dr.Ashwini Tatawati</b>
								<br /> (Dermatologist) <br />
								<br />
								<b>Qualification :</b> MBBS, MD (DVL)
								<br />
								<b> Experience :</b> 9 year
							</p>
						</div>
					</div>
				</Item>
			</Carousel>
		</div>
	);
}
