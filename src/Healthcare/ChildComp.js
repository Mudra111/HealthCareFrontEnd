import React from "react";

export default function childForProp({ objectForPass }) {
	// console.log(objectForPass);
	return (
		<div>
			<h1>{objectForPass.name}</h1>
		</div>
	);
}
