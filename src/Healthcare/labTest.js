import React, { useState } from "react";
import "./labtest.css";
import Scans from "./images/scans-xray.png";

export default function LabTest() {
	const [labMain1, setLabMain1] = useState(true);
	const [labMain2, setLabMain2] = useState(false);

	const lab1 = () => {
		setLabMain1(true);
		setLabMain2(false);
	};

	const lab2 = () => {
		setLabMain1(false);
		setLabMain2(true);
	};
	return (
		<div className="gridCon">
			<div className="navForLab">
				<ul className="typesOfLab">
					<li className="labType">
						<a onClick={lab1}>Blood Tests</a>
					</li>
					<li className="labType">
						<a onClick={lab2}>Scans & X-Rays</a>
					</li>
				</ul>
			</div>
			<div className={`${labMain1 ? "" : "labMain1"}`}>
				<div className="infoLabDiv">
					<p className="parForInfoLab">
						<p className="innerPar">
							Regular blood testing is one of the most important ways to keep
							track of your overall physical well-being,therefor our laboratory
							is helping you to check your overall physical health by providing
							qualitative blood testing in cheap price.
						</p>
					</p>
				</div>
				<h3 className="howQ">How it works?</h3>
				<div className="circleCon">
					<div className="line1"></div>
					<div className="line2"></div>
					<div className="num1">1</div>
					<div className="num2">2</div>
					<div className="num3">3</div>
					<div className="circle1"></div>
					<div className="circle2"></div>
					<div className="circle3"></div>
				</div>
				<div className="circleStatements">
					<div className="statement1">
						We will reach out on your phone <br />
						number to understand your requirements.
					</div>
					<div className="statement2">
						Lab details & price will be shared <br /> with you over the call.
					</div>
					<div className="statement3">
						Your report analysis will be done by <br />
						an expert doctor for free on MFine app.
					</div>
				</div>
				<div className="labBloodbtndiv">
					<button className="labBloodButn">Book for Blood test</button>
				</div>
			</div>

			<div className={`${labMain2 ? "" : "labMain2"}`}>
				<div className="ScanConPic">
					<img src={Scans} className="Scanspic" />
					<p className="Scanscon">
						Our Radiology Department contains variety of tools and techniques
						for detection, analyzing, and curing your diseases. <br />
						<br />
						We are helping you in projecting and picturing various parts of the
						body in cheap price.
					</p>
				</div>
				<div className="availScanM">
					<h2 className="availHead">Available Tests</h2>
					<div className="TestNam">
						<div className="TestN1">
							<span>
								<svg className="SvgScan1">
									<g transform="translate(-504.542 -371.372)">
										<path
											class="a"
											d="M539.7,377.392a20.629,20.629,0,0,0-26.241-2.4.6.6,0,1,0,.684.989,19.4,19.4,0,0,1,30.385,15.941l-.035,17.554a1.808,1.808,0,0,1-1.807,1.8H528.748v-3.2a16.587,16.587,0,0,0,7.268-3.675.6.6,0,1,0-.792-.906,15.382,15.382,0,0,1-6.476,3.346v-5.774a4.635,4.635,0,0,0,2.8-2.356,9.342,9.342,0,1,0-15.771-6.785,9.243,9.243,0,0,0,2.787,6.641,4.633,4.633,0,0,0,3.034,2.545v1.671a.6.6,0,0,0,1.2,0v-1.522h4.737v10.017h-4.737v-5.689a.6.6,0,0,0-1.2,0v1.274a15.339,15.339,0,0,1-1.887-29.3v2.422a1.405,1.405,0,0,0,1.4,1.4h4.336a.6.6,0,1,0,0-1.2h-4.336a.2.2,0,0,1-.2-.2v-3.205a.2.2,0,0,1,.2-.2h8.029a.2.2,0,0,1,.2.2v3.205a.2.2,0,0,1-.2.2h-.883a.6.6,0,1,0,0,1.2h.883a1.405,1.405,0,0,0,1.405-1.4v-2.422a15.321,15.321,0,0,1,6.519,24.02.6.6,0,0,0,.935.758,16.551,16.551,0,0,0,3.706-10.417,16.374,16.374,0,0,0-3.27-9.857,16.766,16.766,0,0,0-8-5.818,1.407,1.407,0,0,0-1.3-.872h-8.029a1.407,1.407,0,0,0-1.3.872,16.769,16.769,0,0,0-8,5.818,16.378,16.378,0,0,0-3.27,9.857A16.556,16.556,0,0,0,521.6,408.094v3.184H507.6a1.813,1.813,0,0,1-1.806-1.807l-.044-17.623a19.4,19.4,0,0,1,6.264-14.167.6.6,0,1,0-.815-.885,20.484,20.484,0,0,0-6.653,15.047l.044,17.624a3.022,3.022,0,0,0,3.011,3.011h35.086a3.012,3.012,0,0,0,3.011-3l.035-17.555a20.4,20.4,0,0,0-6.032-14.534Zm-8.862,16.1H519.354v-.6a1,1,0,0,1,1-1h9.474a1,1,0,0,1,1,1Zm-5.7-9.7a8.122,8.122,0,0,1,6.905,12.443v-3.348a2.208,2.208,0,0,0-2.208-2.2h-9.474a2.208,2.208,0,0,0-2.208,2.2v3.229a8.044,8.044,0,0,1-1.164-4.191A8.151,8.151,0,0,1,525.135,383.792Zm-2.368,16.267a3.413,3.413,0,0,1-3.412-3.406V394.69h11.482v1.963a3.413,3.413,0,0,1-3.413,3.406Z"
											transform="translate(0)"
										></path>
										<path
											class="a"
											d="M516.846,489.18a3.014,3.014,0,1,0-3.02-3.014A3.02,3.02,0,0,0,516.846,489.18Zm0-4.822a1.808,1.808,0,1,1-1.812,1.809A1.812,1.812,0,0,1,516.846,484.358Z"
											transform="translate(-6.587 -79.433)"
										></path>
										<path
											class="a"
											d="M616.954,486.166a3.02,3.02,0,1,0,3.02-3.014A3.02,3.02,0,0,0,616.954,486.166Zm3.02-1.809a1.808,1.808,0,1,1-1.812,1.809A1.812,1.812,0,0,1,619.974,484.358Z"
											transform="translate(-79.882 -79.433)"
										></path>
									</g>
								</svg>
							</span>
							<div className="DivP1">
								<p>MRI Scan </p>
							</div>
						</div>
						<div className="TestN2">
							<span>
								<svg className="SvgScan1">
									<path
										class="a"
										d="M129.976,61.561a20.122,20.122,0,0,0-10.269-6.871v-.9a1.636,1.636,0,0,0-1.634-1.634H110.46a1.636,1.636,0,0,0-1.635,1.634v.9a20.121,20.121,0,0,0-10.269,6.871,19.793,19.793,0,0,0-4.291,12.378,19.98,19.98,0,0,0,9.349,16.925l-2.306,6.784a1.151,1.151,0,0,0,1.09,1.521h18.866a.691.691,0,0,0,0-1.381H119.4V93.272a19.872,19.872,0,0,0,4.3-1.7l2.113,6.216H124.4a.691.691,0,1,0,0,1.381h1.737a1.151,1.151,0,0,0,1.09-1.521l-2.306-6.784a19.98,19.98,0,0,0,9.349-16.925,19.794,19.794,0,0,0-4.29-12.378ZM121.69,80.876h-9.819a.691.691,0,1,0,0,1.381h9.68v4.111H106.98V82.257h1.761a.691.691,0,0,0,0-1.381h-1.9a1.244,1.244,0,0,0-1.243,1.243v2.193A13.521,13.521,0,0,1,109.62,61.24,1.166,1.166,0,0,0,110,61.3h8.534a1.166,1.166,0,0,0,.379-.064,13.521,13.521,0,0,1,4.021,23.073V82.119a1.245,1.245,0,0,0-1.243-1.243ZM110.207,53.792a.253.253,0,0,1,.253-.253h7.613a.253.253,0,0,1,.253.253v6.131h-8.119ZM95.648,73.939a18.593,18.593,0,0,1,13.177-17.81v3.935A14.9,14.9,0,0,0,105.6,86.059v.448a1.245,1.245,0,0,0,1.243,1.243h2.288v4.09a18.648,18.648,0,0,1-4.222-1.785.687.687,0,0,0-.236-.139,18.544,18.544,0,0,1-9.024-15.976Zm9.186,17.634a19.876,19.876,0,0,0,4.3,1.7v4.517h-6.408Zm5.677,6.216V87.75h7.511V97.788Zm13.35-7.873a.688.688,0,0,0-.237.139A18.64,18.64,0,0,1,119.4,91.84V87.75h2.287a1.245,1.245,0,0,0,1.243-1.243v-.448a14.9,14.9,0,0,0-3.226-25.994V56.129a18.637,18.637,0,0,1,4.154,33.786Z"
										transform="translate(-94.266 -52.158)"
									></path>
								</svg>
							</span>
							<div className="DivP1">
								<p>CT Scan </p>
							</div>
						</div>
						<div className="TestN3">
							<span>
								<svg className="SvgScan1">
									<g transform="translate(0)">
										<g transform="translate(23.829 0)">
											<path
												class="a"
												d="M473.292,212.139a7.9,7.9,0,0,1,0,11.167l1.117,1.117a9.475,9.475,0,0,0-13.4-13.4l1.117,1.117A7.9,7.9,0,0,1,473.292,212.139Z"
												transform="translate(-461.008 -208.251)"
											></path>
										</g>
										<g transform="translate(26.062 3.157)">
											<path
												class="a"
												d="M476.053,228.133l1.117,1.117a6.317,6.317,0,1,0-8.933-8.933l1.117,1.117a4.738,4.738,0,0,1,6.7,6.7Z"
												transform="translate(-468.236 -218.469)"
											></path>
										</g>
										<g transform="translate(28.489 6.433)">
											<path
												class="a"
												d="M476.09,229.994l1.117,1.117a1.579,1.579,0,0,1,2.233,2.233l1.116,1.117a3.158,3.158,0,0,0-4.467-4.467Z"
												transform="translate(-476.09 -229.07)"
											></path>
										</g>
										<g transform="translate(0.831 4.682)">
											<path
												class="a"
												d="M386.11,257.632a6.391,6.391,0,0,1-4.73-10.706l7.6-8.27a7.2,7.2,0,0,0,1.907-5.062l-.07-3.04,6.434-6.31a2.942,2.942,0,0,1,3.737-.314h0c2.833,1.973,9.785,7.168,13.145,12.783a2.916,2.916,0,0,1-.46,3.6l-6.684,6.527H402.13a6.619,6.619,0,0,0-4.711,1.983l-6.708,6.874a6.381,6.381,0,0,1-4.554,1.936Zm6.177-26.484.056,2.412a8.638,8.638,0,0,1-2.289,6.075l-7.6,8.27a4.917,4.917,0,0,0,.151,6.829,4.972,4.972,0,0,0,7.063-.05l6.708-6.874a8.086,8.086,0,0,1,5.756-2.423h4.264l6.259-6.112a1.473,1.473,0,0,0,.228-1.818c-3.215-5.374-9.973-10.418-12.729-12.337h0a1.48,1.48,0,0,0-1.881.159Z"
												transform="translate(-379.691 -223.405)"
											></path>
										</g>
										<g transform="translate(16.462 6.44)">
											<path
												class="a"
												d="M451.589,248.252c-4.986-9.2-16.136-15.877-16.248-15.943l.787-1.33c.472.28,11.632,6.96,16.819,16.538Z"
												transform="translate(-435.341 -230.979)"
											></path>
										</g>
										<g transform="translate(0 35.597)">
											<path
												class="a"
												d="M408.589,337.016H379.137a2.13,2.13,0,0,1-1.592-3.545l2.256-2.537a.772.772,0,1,1,1.154,1.026L378.7,334.5a.585.585,0,0,0,.437.974h29.452a.772.772,0,1,1,0,1.545Z"
												transform="translate(-377.003 -330.675)"
											></path>
										</g>
										<g transform="translate(11.123 22.534)">
											<rect
												class="a"
												width="7.459"
												height="1.545"
												transform="translate(0 5.538) rotate(-47.937)"
											></rect>
										</g>
									</g>
								</svg>
							</span>
							<div className="DivP1">
								<p>Ultrasound</p>
							</div>
						</div>
						<div className="TestN4">
							<span>
								<svg className="SvgScan1">
									<g transform="translate(-25.585 -738.693)">
										<g transform="translate(25.585 738.693)">
											<g transform="translate(5.926 11.364)">
												<g transform="translate(0 0)">
													<path
														class="a"
														d="M584.744,266.349H580.26l-3.072-2.838a.9.9,0,0,0-1.506.659v4.748l-2.309-2.309a.891.891,0,0,0-.634-.263h-2.894l-2.806-2.781a.9.9,0,0,0-1.528.637v4.708l-2.379-2.379a.891.891,0,0,0-.634-.263h-4.67a.616.616,0,0,0,0,1.231h4.532l2.851,2.851a.9.9,0,0,0,1.532-.634V265l2.334,2.314a.892.892,0,0,0,.632.26H572.6l2.782,2.781a.9.9,0,0,0,1.531-.634v-4.791l2.608,2.409a.9.9,0,0,0,.609.238h4.614a.615.615,0,1,0,0-1.231Z"
														transform="translate(-557.211 -263.272)"
													></path>
												</g>
											</g>
											<g transform="translate(17.587 28.174)">
												<g transform="translate(0 0)">
													<path
														class="a"
														d="M590.056,327.194h-8.769a.495.495,0,0,0,0,.99h8.769a.495.495,0,1,0,0-.99Z"
														transform="translate(-580.792 -327.194)"
													></path>
												</g>
											</g>
											<g transform="translate(28.264 28.174)">
												<g transform="translate(0 0)">
													<path
														class="a"
														d="M635.364,327.194h-1.281a.495.495,0,1,0,0,.99h1.281a.495.495,0,0,0,0-.99Z"
														transform="translate(-633.588 -327.194)"
													></path>
												</g>
											</g>
											<g transform="translate(0 0)">
												<path
													class="a"
													d="M568.937,216.935H532.349a1.708,1.708,0,0,0-1.706,1.706v28.164a1.708,1.708,0,0,0,1.706,1.706h1.839v1.428a1.21,1.21,0,0,0,1.208,1.208h2.141a1.21,1.21,0,0,0,1.208-1.208v-1.428H562.54v1.428a1.21,1.21,0,0,0,1.208,1.208h2.141a1.21,1.21,0,0,0,1.208-1.208v-1.428h1.839a1.708,1.708,0,0,0,1.706-1.706V218.641A1.708,1.708,0,0,0,568.937,216.935Zm-31.363,33a.036.036,0,0,1-.036.036H535.4a.036.036,0,0,1-.036-.036v-1.428h2.213Zm28.351,0a.036.036,0,0,1-.036.036h-2.141a.036.036,0,0,1-.037-.036v-1.428h2.214Zm3.546-3.134h0a.535.535,0,0,1-.534.534H532.349a.535.535,0,0,1-.534-.534V218.641a.535.535,0,0,1,.534-.534h36.587a.535.535,0,0,1,.534.534v28.164Z"
													transform="translate(-530.643 -216.935)"
												></path>
											</g>
											<g transform="translate(2.753 2.753)">
												<g transform="translate(0)">
													<path
														class="a"
														d="M574.786,227.481h-27.6a.617.617,0,0,0,0,1.231h27.339v21.576H542.353V228.712h2.116a.617.617,0,0,0,0-1.231h-2.38a.927.927,0,0,0-.9.951v22.136a.927.927,0,0,0,.9.951h32.7a.927.927,0,0,0,.9-.951V228.432A.927.927,0,0,0,574.786,227.481Z"
														transform="translate(-541.19 -227.481)"
													></path>
												</g>
											</g>
											<g transform="translate(27.059 5.108)">
												<g transform="translate(0 0)">
													<path
														class="a"
														d="M649.08,239.46a1.967,1.967,0,0,0-1.4-1.647,5.421,5.421,0,0,1-4.209,0,1.968,1.968,0,0,0-1.4,1.647c-.146,1.016.368,2.539,2.248,3.765.282.184.707.428.888.532l.039.022a.615.615,0,0,0,.307.082h.048a.614.614,0,0,0,.307-.082l.039-.022c.181-.1.606-.348.888-.532C648.712,242,649.226,240.476,649.08,239.46Zm-2.921,2.734c-.166.109-.4.246-.586.355-.188-.109-.42-.247-.586-.355-1.4-.911-1.79-1.948-1.7-2.559a.74.74,0,0,1,.539-.643,1.122,1.122,0,0,1,.324-.051,1.36,1.36,0,0,1,.975.565.615.615,0,0,0,.9,0,1.19,1.19,0,0,1,1.3-.514.74.74,0,0,1,.539.644C647.949,240.246,647.556,241.283,646.159,242.194Z"
														transform="translate(-642.043 -237.708)"
													></path>
												</g>
											</g>
											<g transform="translate(34.131 27.174)">
												<g transform="translate(0 0)">
													<path
														class="a"
														d="M665.471,322.431a1.494,1.494,0,1,0,1.494,1.494A1.5,1.5,0,0,0,665.471,322.431Zm0,2a.5.5,0,1,1,.5-.5A.505.505,0,0,1,665.471,324.43Z"
														transform="translate(-663.977 -322.431)"
													></path>
												</g>
											</g>
										</g>
									</g>
								</svg>
							</span>
							<div className="DivP1">
								<p>ECG Scan</p>
							</div>
						</div>
						<div className="TestN5">
							<span>
								<svg className="SvgScan1">
									<path
										class="a"
										d="M698.382,399.62v-4.2a.736.736,0,0,0-1.472,0v4.2a.736.736,0,0,0,1.472,0Zm4.928.906v-4.2a.736.736,0,0,0-1.472,0v4.2a.736.736,0,1,0,1.472,0Zm4.927,3.339v-4.2a.736.736,0,1,0-1.471,0v4.2a.736.736,0,0,0,1.471,0Zm-14.782-3.339v-4.2a.736.736,0,0,0-1.472,0v4.2a.736.736,0,1,0,1.472,0Zm-4.928,3.339v-4.2a.736.736,0,1,0-1.472,0v4.2a.736.736,0,0,0,1.472,0Zm8.962-19.2A21.754,21.754,0,0,0,682,391.078a3.052,3.052,0,1,0,4.315,4.318,15.793,15.793,0,0,1,26.962,11.166.736.736,0,0,0,1.471,0,17.265,17.265,0,0,0-29.474-12.207,1.618,1.618,0,0,1-2.235,0,1.58,1.58,0,0,1,0-2.236,20.424,20.424,0,0,1,32.517,23.955,3.053,3.053,0,0,0-2.707-1.648h-3.2a2.555,2.555,0,0,0,.119-.235,2.981,2.981,0,0,0-.685-3.248c-1.213-1.212-3.862-2.255-6.575-2.881a4.947,4.947,0,0,0-9.728,0c-2.712.627-5.361,1.669-6.574,2.882a2.981,2.981,0,0,0-.685,3.248,2.539,2.539,0,0,0,.119.235h-3.2a3.052,3.052,0,1,0,0,6.1h1.2l3.473,4.241v4.45a.736.736,0,0,0,.735.736H707.45a.736.736,0,0,0,.736-.736v-4.45l3.473-4.241h1.195a3.046,3.046,0,0,0,2.488-1.282,21.9,21.9,0,0,0-17.853-34.584Zm.158,20.825a3.479,3.479,0,1,1-3.48,3.479A3.483,3.483,0,0,1,697.646,405.489Zm-10.4,6.493c.9-.9,3.1-1.806,5.488-2.4a4.947,4.947,0,0,0,9.818,0c2.394.595,4.59,1.5,5.489,2.4a1.514,1.514,0,0,1,.366,1.645,1.3,1.3,0,0,1-1.277.8H688.159a1.3,1.3,0,0,1-1.276-.8A1.514,1.514,0,0,1,687.249,411.982Zm19.632,12.059a.739.739,0,0,0-.167.466v3.977H688.579v-3.976a.73.73,0,0,0-.167-.466l-2.876-3.512h24.221Zm5.973-4.983H682.438a1.581,1.581,0,1,1,0-3.161h30.416a1.581,1.581,0,1,1,0,3.161Z"
										transform="translate(-679.386 -384.664)"
									></path>
								</svg>
							</span>
							<div className="DivP1">
								<p>PET Scan </p>
							</div>
						</div>
						<div className="TestN6">
							<span>
								<svg className="SvgScan6">
									<g transform="translate(-180.3 -372.052)">
										<g transform="translate(180.3 372.052)">
											<path
												class="a"
												d="M215.447,372.052h-32.7A2.455,2.455,0,0,0,180.3,374.5V411.45a2.455,2.455,0,0,0,2.452,2.452h32.7a2.455,2.455,0,0,0,2.452-2.452V374.5A2.455,2.455,0,0,0,215.447,372.052Zm-12.988,11.4a3.586,3.586,0,0,1-.718,7.1,3.553,3.553,0,0,1-2.148-.715l0,0a3.6,3.6,0,0,1-1.434-2.868.818.818,0,1,0-1.635,0,5.247,5.247,0,0,0,1.219,3.349,3.586,3.586,0,1,1-2-6.863.818.818,0,0,0,.655-.8v-8.967H201.8v8.967a.817.817,0,0,0,.655.8Zm13.806,27.994a.818.818,0,0,1-.817.818H203.439v-8.345a5.22,5.22,0,0,0-1.7-10.157,5.174,5.174,0,0,0-2.642.716,5.2,5.2,0,0,0-2.241-.7.817.817,0,1,0-.124,1.63,3.565,3.565,0,0,1,1.873.705h0a3.6,3.6,0,0,1,1.434,2.868.818.818,0,0,0,1.635,0,5.247,5.247,0,0,0-1.219-3.349,3.586,3.586,0,1,1,2,6.863.818.818,0,0,0-.655.8v8.967H196.4V403.3a.818.818,0,0,0-.655-.8,3.592,3.592,0,0,1-2.857-3.238.817.817,0,0,0-1.63.124,5.238,5.238,0,0,0,3.506,4.538v8.345H182.752a.818.818,0,0,1-.817-.818V374.5a.818.818,0,0,1,.817-.817H194.76v8.345a5.22,5.22,0,0,0,1.7,10.157,5.174,5.174,0,0,0,2.641-.716,5.174,5.174,0,0,0,2.641.716,5.22,5.22,0,0,0,1.7-10.157v-8.345h12.008a.818.818,0,0,1,.817.817Z"
												transform="translate(-180.3 -372.052)"
											></path>
											<path
												class="a"
												d="M251.395,459.569h-5.239a.817.817,0,1,0,0,1.635h5.239a.817.817,0,0,0,0-1.635Z"
												transform="translate(-217.882 -422.623)"
											></path>
											<path
												class="a"
												d="M251.395,451.823h-5.239a.818.818,0,0,0,0,1.635h5.239a.818.818,0,0,0,0-1.635Z"
												transform="translate(-217.882 -418.147)"
											></path>
											<path
												class="a"
												d="M194.1,387.542h-5.239a.818.818,0,0,0,0,1.635H194.1a.818.818,0,1,0,0-1.635Z"
												transform="translate(-184.775 -381.003)"
											></path>
											<path
												class="a"
												d="M194.1,379.8h-5.239a.818.818,0,0,0,0,1.635H194.1a.818.818,0,1,0,0-1.635Z"
												transform="translate(-184.775 -376.527)"
											></path>
											<path
												class="a"
												d="M210.084,426.542h0a.817.817,0,1,0,.818.817A.817.817,0,0,0,210.084,426.542Z"
												transform="translate(-197.038 -403.539)"
											></path>
										</g>
									</g>
								</svg>
							</span>
							<div className="DivP1">
								<p>X-Ray</p>
							</div>
						</div>
						<div className="TestN7">
							<span>
								<svg className="SvgScan1">
									<g transform="translate(-63.638 -369.179)">
										<g transform="translate(63.638 369.179)">
											<g transform="translate(0)">
												<path
													class="a"
													d="M103.862,405.68l-1.378-.919V390.467a2.328,2.328,0,0,0-1.038-1.939l-5.177-3.449v-1.915a2.334,2.334,0,0,0,2.331-2.331V371.51a2.334,2.334,0,0,0-2.331-2.331H72.961a2.333,2.333,0,0,0-2.331,2.331v9.323a2.333,2.333,0,0,0,2.331,2.331v1.915l-5.177,3.449a2.327,2.327,0,0,0-1.038,1.939v14.293l-1.378.919a3.876,3.876,0,0,0-1.73,3.232v2.221a1.555,1.555,0,0,0,1.554,1.554v1.554a1.555,1.555,0,0,0,1.554,1.554h3.107a1.555,1.555,0,0,0,1.554-1.554v-1.554H97.823v1.554a1.555,1.555,0,0,0,1.554,1.554h3.108a1.555,1.555,0,0,0,1.554-1.554v-1.554a1.555,1.555,0,0,0,1.553-1.554v-2.221A3.875,3.875,0,0,0,103.862,405.68Zm-3.278-15.859a.777.777,0,0,1,.347.647v13.258l-4.662-3.108V386.946Zm-28.4-8.988V371.51a.778.778,0,0,1,.777-.777H96.269a.778.778,0,0,1,.777.777v9.323a.778.778,0,0,1-.777.777H72.961A.778.778,0,0,1,72.184,380.833Zm22.531,2.331v17.092H93.161V383.164Zm-3.107,0v17.092H77.623V383.164Zm-15.538,0v17.092H74.515V383.164Zm-2.1,18.646H95.257l2.331,1.554H71.642ZM68.3,390.467a.776.776,0,0,1,.346-.647l4.315-2.875v13.671L68.3,403.725Zm1.012,14.45H99.919l2.331,1.554H66.981Zm-2.566,9.323v-1.554h3.108v1.554Zm32.631,0v-1.554h3.108v1.554Zm4.661-3.107H65.192v-2.221a2.321,2.321,0,0,1,.192-.886h38.461a2.313,2.313,0,0,1,.193.886v2.221Z"
													transform="translate(-63.638 -369.179)"
												></path>
												<path
													class="a"
													d="M88.506,384.122h6.216a1.555,1.555,0,0,0,1.553-1.554v-4.661a1.555,1.555,0,0,0-1.553-1.554H88.506a1.556,1.556,0,0,0-1.554,1.554v4.661A1.556,1.556,0,0,0,88.506,384.122Zm0-6.215h6.216v4.661H88.506Z"
													transform="translate(-76.852 -373.245)"
												></path>
												<path
													class="a"
													d="M113.614,381.014h1.554a1.555,1.555,0,0,0,1.554-1.554v-1.554a1.556,1.556,0,0,0-1.554-1.554h-1.554a1.556,1.556,0,0,0-1.554,1.554v1.554A1.555,1.555,0,0,0,113.614,381.014Zm0-3.107h1.554v1.554h-1.555v-1.554Z"
													transform="translate(-91.083 -373.245)"
												></path>
												<path
													class="a"
													d="M127.961,381.014h1.554a1.555,1.555,0,0,0,1.554-1.554v-1.554a1.556,1.556,0,0,0-1.554-1.554h-1.554a1.556,1.556,0,0,0-1.554,1.554v1.554A1.555,1.555,0,0,0,127.961,381.014Zm0-3.107h1.554v1.554h-1.555v-1.554Z"
													transform="translate(-99.215 -373.245)"
												></path>
												<path
													class="a"
													d="M112.837,392.254h3.107a.777.777,0,0,0,0-1.554h-3.107a.777.777,0,1,0,0,1.554Z"
													transform="translate(-91.083 -381.377)"
												></path>
												<path
													class="a"
													d="M126.632,392.03a.788.788,0,0,0,1.1,0,.916.916,0,0,0,.163-.256.778.778,0,0,0,.062-.3.817.817,0,0,0-.225-.552.8.8,0,0,0-.256-.163.777.777,0,0,0-.847.163.8.8,0,0,0-.163.256.734.734,0,0,0,0,.591A.9.9,0,0,0,126.632,392.03Z"
													transform="translate(-99.215 -381.378)"
												></path>
												<path
													class="a"
													d="M134.062,390.767a.728.728,0,0,0-.256.163.9.9,0,0,0-.163.256.775.775,0,1,0,1.267-.256A.793.793,0,0,0,134.062,390.767Z"
													transform="translate(-103.281 -381.382)"
												></path>
											</g>
										</g>
									</g>
								</svg>
							</span>
							<div className="DivP1">
								<p>TMT Scan</p>
							</div>
						</div>
						<div className="TestN8">
							<span>
								<svg className="SvgScan1">
									<g transform="translate(-279.445 -375.057)">
										<g transform="translate(279.445 375.057)">
											<path
												class="a"
												d="M324.094,375.057H281.8a2.428,2.428,0,0,0-2.35,2.492V411.73a2.428,2.428,0,0,0,2.35,2.492h13.615l-1.566,3.133H291.2a2.35,2.35,0,0,0,0,4.7h23.5a2.35,2.35,0,0,0,0-4.7h-2.649l-1.566-3.133h13.615a2.428,2.428,0,0,0,2.35-2.492V377.549A2.428,2.428,0,0,0,324.094,375.057Zm-8.617,44.648a.783.783,0,0,1-.783.783H291.2a.783.783,0,1,1,0-1.566h23.5A.783.783,0,0,1,315.478,419.705Zm-5.184-2.35H295.6l1.567-3.133h11.565Zm13.8-4.7H281.8a.874.874,0,0,1-.783-.926v-2.207h3.133a.783.783,0,0,0,0-1.567h-3.133V377.549a.874.874,0,0,1,.783-.925h42.3a.875.875,0,0,1,.783.925v30.406h-37.6a.783.783,0,1,0,0,1.567h37.6v2.207A.875.875,0,0,1,324.094,412.656Z"
												transform="translate(-279.445 -375.057)"
											></path>
											<path
												class="a"
												d="M286.6,386.132a.783.783,0,0,0,.783-.783V383h2.35a.783.783,0,1,0,0-1.566H286.6a.783.783,0,0,0-.783.783v3.133A.783.783,0,0,0,286.6,386.132Z"
												transform="translate(-282.688 -378.299)"
											></path>
											<path
												class="a"
												d="M290.522,433.159a.784.784,0,0,0-.783-.783h-2.35v-2.35a.783.783,0,0,0-1.566,0v3.133a.783.783,0,0,0,.783.783h3.133A.784.784,0,0,0,290.522,433.159Z"
												transform="translate(-282.688 -402.61)"
											></path>
											<path
												class="a"
												d="M363.048,429.243a.783.783,0,0,0-.783.783v2.35h-2.35a.783.783,0,0,0,0,1.567h3.133a.783.783,0,0,0,.783-.783v-3.133A.783.783,0,0,0,363.048,429.243Z"
												transform="translate(-319.965 -402.61)"
											></path>
											<path
												class="a"
												d="M359.914,383h2.35v2.35a.783.783,0,1,0,1.566,0v-3.133a.783.783,0,0,0-.783-.783h-3.133a.783.783,0,1,0,0,1.566Z"
												transform="translate(-319.965 -378.299)"
											></path>
											<path
												class="a"
												d="M292.2,403.563a1.555,1.555,0,0,0,.568,1.082,26.359,26.359,0,0,0,33.319,0,1.553,1.553,0,0,0,.568-1.082,1.6,1.6,0,0,0-.386-1.18l-9.453-10.84a1.574,1.574,0,0,0-2.122-.235,7.82,7.82,0,0,1-10.533-.006,1.573,1.573,0,0,0-2.121.235l-9.453,10.847a1.6,1.6,0,0,0-.386,1.18Zm11.021-11.008c4.167,3.127,8.246,3.111,12.414.015l9.453,10.843.008.019a24.747,24.747,0,0,1-31.327-.019Z"
												transform="translate(-285.929 -383.161)"
											></path>
										</g>
									</g>
								</svg>
							</span>
							<div className="DivP1">
								<p>ECHO Scan </p>
							</div>
						</div>
					</div>
				</div>
				<div className="labBloodbtndiv">
					<button className="labBloodButn">Book for test</button>
				</div>
			</div>
		</div>
	);
}
