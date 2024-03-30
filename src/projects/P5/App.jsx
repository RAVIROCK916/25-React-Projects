import React, { useEffect, useState } from "react";
import { Header } from "../components";
import Layout from "../components/Layout";

const P5 = () => {
	const [products, setProducts] = useState([]);
	const [skip, setSkip] = useState(0);

	const pageLimit = 9;

	useEffect(() => {
		fetch(`https://dummyjson.com/products?limit=${pageLimit}&skip=${skip}`)
			.then((res) => res.json())
			.then((fetchedData) => {
				setProducts([...products, ...fetchedData.products]);
			});
	}, [skip]);

	return (
		<Layout>
			<Header projectNo={5} title="Load Data" />
			<div className="flex justify-evenly flex-wrap gap-y-20 mb-10">
				{products.length > 0 &&
					products.map(({ id, brand, description, images }) => (
						<div
							key={id}
							className="text-left max-w-min p-4 border border-black flex flex-col"
						>
							<h1 className="text-2xl font-bold mb-2">{brand}</h1>
							<p className="w-0 text-sm min-w-full line-clamp-2">
								{description}
							</p>
							<div className="w-96 my-6">
								<img
									src={images[0]}
									alt={brand}
									className="w-full h-[200px] object-contain grayscale"
									width="300"
									height="200"
								/>
							</div>
						</div>
					))}
			</div>
			<button
				className="border-2 border-black px-6 py-2 hover:bg-zinc-200 after"
				style={
					skip + pageLimit > 100
						? {
								borderColor: "#ccc",
								color: "#ccc",
								backgroundColor: "transparent",
						  }
						: {}
				}
				onClick={() => {
					if (skip < 100) {
						setSkip(skip + pageLimit);
					}
				}}
			>
				Load More
			</button>
			{skip >= 100 && <p className="my-4">Limit Reached...</p>}
		</Layout>
	);
};

export default P5;
