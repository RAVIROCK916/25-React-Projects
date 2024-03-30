import React, { useState } from "react";
import Accordion from "./components/Accordion";
import data from "./data";
import { Header, Button } from "../components";
import Layout from "../components/Layout";

const buttonEnabledState = {
	text: "Disable Multi Selection",
	style: {
		color: "white",
		backgroundColor: "black",
	},
	active: true,
};
const buttonDisabledState = {
	text: "Enable Multi Selection",
	style: null,
	active: false,
};

const P1 = () => {
	const [selected, setSelected] = useState([]);
	const [buttonState, setButtonState] = useState(buttonDisabledState);

	const handleButtonClick = () => {
		setButtonState((b) =>
			b.style ? buttonDisabledState : buttonEnabledState
		);
		setSelected([]);
	};

	return (
		<Layout>
			<Header projectNo={1} title="Accordion" />
			<div>
				<Button
					handleClick={handleButtonClick}
					buttonStyle={buttonState.style}
				>
					{buttonState.text}
				</Button>
				{data.map((accordion) => (
					<Accordion
						key={accordion.id}
						id={accordion.id}
						title={accordion.title}
						description={accordion.description}
						selected={selected}
						setSelected={setSelected}
						buttonState={buttonState}
					/>
				))}
			</div>
		</Layout>
	);
};

export default P1;
