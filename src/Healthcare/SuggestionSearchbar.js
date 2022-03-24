import React, { useRef, useState } from "react";
import "./SuggestionSearchbar.css";
import FlightData from "./apiData.json";

export default function SuggestionSearchbar() {
	const [dataDep, setDataDep] = useState(FlightData.data);
	const [filteredDepData, setFilteredDepData] = useState([]);
	const [depAirport, setDepAirport] = useState();
	const [disDepData, setDisDepData] = useState(true);

	const handleFilterDep = (event) => {
		setDisDepData(true);
		setDepAirport(event.target.value);
		const searchWordDep = event.target.value;
		const newFilterDep = dataDep.filter((value) => {
			return value.departure.airport
				.toLowerCase()
				.includes(searchWordDep.toLowerCase());
		});
		setFilteredDepData(newFilterDep);
	};

	return (
		<div className="search">
			<div>
				<div className="searchInputs">
					<input
						type={"text"}
						placeholder="Enter The Name of Dep.."
						onChange={handleFilterDep}
						value={depAirport}
					/>
				</div>
				{filteredDepData.length != 0 && (
					<div
						className={`dataResultdep ${
							disDepData ? "" : "dataResultNotShowdep"
						}`}
					>
						{filteredDepData.map((Data, key) => {
							return (
								<div className="dataItem">
									<div
										onClick={() => {
											setDepAirport(Data.departure.airport);
											setDisDepData(!disDepData);
										}}
									>
										{Data.departure.airport}
									</div>
								</div>
							);
						})}
					</div>
				)}
			</div>
			<br />
			<br />
		</div>
	);
}
