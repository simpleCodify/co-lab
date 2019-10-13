import React from "react";

// Importing React-Router-Dom
import { Link } from "react-router-dom";

const ColabButton = props => {
	return (
		<div className="svg-wrapper mx-auto my-5 text-center">
			<svg height="35" width="200">
				<rect className="mx-auto my-auto shape" height="35" width="200" />
			</svg>
			<Link className="text2 rr_link mx-auto my-auto" to={props.linkto}>
				{props.btnname}
			</Link>
		</div>
	);
};

export default ColabButton;
