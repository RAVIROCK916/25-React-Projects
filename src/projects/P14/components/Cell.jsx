import React from "react";

const Cell = ({ value, onClick }) => {
	return (
		<div
			className="w-10 h-10 border grid place-items-center"
			onClick={onClick}
		>
			{value}
		</div>
	);
};

export default Cell;
