import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./slider2-com";
import "./slider_home.css";
import "./slider2_subslider2.css";
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
					<div className="profile-name-container">
						<img src={sp1Gen} className="dctImagHome" alt="" />
						<a href="#" className="profile-np">
							<p className="profile-name"> Name of profile </p>
						</a>
					</div>
				</Item>
				<Item>
					<div className="profile-name-container">
						<img src={sp2Gen} className="dctImagHome" alt="" />
						<a href="#" className="profile-np">
							<p className="profile-name"> Name of profile </p>
						</a>
					</div>
				</Item>
				<Item>
					<div className="profile-name-container">
						<img src={sp3Gen} className="dctImagHome" alt="" />
						<a href="#" className="profile-np">
							<p className="profile-name"> Name of profile </p>
						</a>
					</div>
				</Item>
				<Item>
					<div className="profile-name-container">
						<img src={sp1Gyn} className="dctImagHome" alt="" />
						<a href="#" className="profile-np">
							<p className="profile-name"> Name of profile </p>
						</a>
					</div>
				</Item>
				<Item>
					<div className="profile-name-container">
						<img src={sp2Gyn} className="dctImagHome" alt="" />
						<a href="#" className="profile-np">
							<p className="profile-name"> Name of profile </p>
						</a>
					</div>
				</Item>
				<Item>
					<div className="profile-name-container">
						<img src={sp3Gyn} className="dctImagHome" alt="" />
						<a href="#" className="profile-np">
							<p className="profile-name"> Name of profile </p>
						</a>
					</div>
				</Item>
				<Item>
					<div className="profile-name-container">
						<img src={SkinSp1} className="dctImagHome" alt="" />
						<a href="#" className="profile-np">
							<p className="profile-name"> Name of profile </p>
						</a>
					</div>
				</Item>
				<Item>
					<div className="profile-name-container">
						<img src={SkinSp2} className="dctImagHome" alt="" />
						<a href="#" className="profile-np">
							<p className="profile-name"> Name of profile </p>
						</a>
					</div>
				</Item>
				<Item>
					<div className="profile-name-container">
						<img src={SkinSp3} className="dctImagHome" alt="" />
						<a href="#" className="profile-np">
							<p className="profile-name"> Name of profile </p>
						</a>
					</div>
				</Item>
			</Carousel>
		</div>
	);
}
