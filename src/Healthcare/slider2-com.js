import styled from "styled-components";

export default styled.div`
	margin: 20px;
	height: 420px;
	width: 224px;
	background-color: white;
	border-radius: 10px;
	cursor: pointer;

	@media only screen and (min-device-width: 550px) and (max-device-width: 750px) {
		margin: 10x;
		height: 320px;
		width: 190px;
		background-color: white;
		border-radius: 10px;
		cursor: pointer;
	}

	@media only screen and (min-device-width: 350px) and (max-device-width: 550px) {
		margin: 10x;
		height: 320px;
		width: 190px;
		background-color: white;
		border-radius: 10px;
		cursor: pointer;
	}
`;
