import { useState } from "react";

import "./ToggleSwitch.css";

export default function ToggleSwitch({ choice1, choice2 }) {
	const [value, setValue] = useState(choice2);

	function handleClick() {
		setValue(value => (value === choice1 ? choice2 : choice1));
	}

	function styleToggleSwitch(value) {
		if (value === choice1) {
			return { clipPath: "inset(0 0 0 50%)", backgroundColor: "#f6ae2d" };
		} else {
			return { clipPath: "inset(0 50% 0 0)", backgroundColor: "#1464cf" };
		}
	}

	return (
		<div id="container" onClick={handleClick}>
			<div className="inner-container">
				<div className="toggle">
					<p>{choice1}</p>
				</div>
				<div className="toggle">
					<p>{choice2}</p>
				</div>
			</div>
			<div
				className="inner-container"
				style={
					value === choice1
						? styleToggleSwitch(choice1)
						: styleToggleSwitch(choice2)
				}
			>
				<div className="toggle">
					<p>{choice1}</p>
				</div>
				<div className="toggle">
					<p>{choice2}</p>
				</div>
			</div>
		</div>
	);
}
