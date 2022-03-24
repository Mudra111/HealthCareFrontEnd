import React, { useState } from "react";
import Items from "./apiData.json";

export default function ShortData() {
	const [items, setItems] = useState(Items);

	const [city, setCity] = useState();
	const itemList = [];
	console.log(items.data);
	items.data.sort(GetSortOrder("departure"));
	const get = () => {
		items.data.forEach((item) => {
			if (item.departure.airport === city) {
				itemList.push(item);
			}
		});
		console.log(itemList);
	};

	function GetSortOrder(prop) {
		return function (a, b) {
			if (a[prop] < b[prop]) {
				return 1;
			} else if (a[prop] > b[prop]) {
				return -1;
			}
			return 0;
		};
	}

	return (
		<div>
			<p>
				<input
					type={"text"}
					onChange={(e) => {
						setCity(e.target.value);
					}}
				/>

				<button onClick={get}>click here</button>
			</p>
		</div>
	);
}
