import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/24/outline";
import { Header } from "../components";
import Layout from "../components/Layout";

const P3 = () => {
	const [rating, setRating] = useState(-1);
	const [hoverStar, setHoverStar] = useState(-1);

	const stars = [];

	const findColor = (index) => {
		if (hoverStar == -1 && rating == -1) return "transparent";
		if (index <= rating) return "black";
		if (index <= hoverStar) return "#eee";
	};
	for (let index = 0; index < 5; index++) {
		const starElement = (
			<StarIcon
				key={index}
				className="h-16 w-16 text-[black] transition-all cursor-pointer"
				onMouseMove={() => setHoverStar(index)}
				onMouseOut={() => setHoverStar(-1)}
				onMouseUp={() => setRating(index)}
				style={{
					fill: findColor(index),
				}}
			/>
		);
		stars.push(starElement);
	}
	return (
		<Layout>
			<Header projectNo={3} title={"Star Rating"} />
			<div className="flex justify-center items-center gap-2 min-h-40">
				{stars}
			</div>
		</Layout>
	);
};

export default P3;
