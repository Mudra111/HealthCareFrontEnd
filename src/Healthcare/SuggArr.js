import React, { useState } from "react";
import "./SuggArr.css";
import FlightData from "./apiData.json";

export default function SuggArr() {
	// const [data, setData] = useState(FlightData.data);
	const [filteredData, setFilteredData] = useState([]);
	const [Airport, setAirport] = useState();
	const [disData, setDisData] = useState(true);

	const handleFilter = (event) => {
		setDisData(true);
		setAirport(event.target.value);
		const searchWord = event.target.value;
		const newFilterData = FlightData.data.filter((value) => {
			return value.arrival.airport
				.toLowerCase()
				.includes(searchWord.toLowerCase());
		});

		console.log(newFilterData);
		setFilteredData(newFilterData);
	};

	return (
		<div className="search">
			<div>
				<div className="searchInputs">
					<input
						type={"text"}
						placeholder="Enter The Name of Dep.."
						onChange={handleFilter}
						value={Airport}
					/>
				</div>
				{filteredData.length != 0 && (
					<div
						className={`dataResultdep ${disData ? "" : "dataResultNotShowdep"}`}
					>
						{filteredData.map((Data, key) => {
							return (
								<div className="dataItem">
									<div
										onClick={() => {
											setAirport(Data.arrival.airport);
											setDisData(!disData);
										}}
									>
										{Data.arrival.airport}
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
