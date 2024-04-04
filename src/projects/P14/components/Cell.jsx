import React from "react";

const Cell = ({ value, onClick }) => {
	return (
		<div
			className="w-12 h-12 border grid place-items-center hover:bg-zinc-50 transition-colors hover:animate-pulse cursor-pointer"
			onClick={onClick}
		>
			{value}
		</div>
	);
};

export default Cell;
