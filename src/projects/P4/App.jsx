import { ForwardIcon, BackwardIcon } from "@heroicons/react/20/solid";
import { Header } from "../components";
import { useEffect, useState } from "react";

import "./style.css";
import Layout from "../components/Layout";

const P4 = () => {
	const [currImgId, setCurrImgId] = useState(0);
	const [images, setImages] = useState([]);

	const [isLeftHovered, setIsLeftHovered] = useState(false);
	const [isRightHovered, setIsRightHovered] = useState(false);

	useEffect(() => {
		fetch("https://picsum.photos/v2/list?page=1&limit=5")
			.then((res) => res.json())
			.then((data) => setImages(data));
	}, []);

	console.log(currImgId);

	return (
		<Layout>
			<Header projectNo={4} title="Image Carousel" />
			<div className="w-[50%] m-auto flex justify-center relative">
				<BackwardIcon
					className="slider-control slider-left"
					style={
						isLeftHovered
							? {
									fontSize: "40px",
									opacity: currImgId > 0 ? 1 : 0.5,
							  }
							: {
									opacity: currImgId > 0 ? 1 : 0.5,
							  }
					}
					onClick={() => {
						const newImgId = currImgId > 0 ? currImgId - 1 : 0;
						setCurrImgId(newImgId);
					}}
					onMouseEnter={() => {
						setIsLeftHovered(true);
					}}
					onMouseLeave={() => {
						setIsLeftHovered(false);
					}}
				/>
				{images && images.length > 0 ? (
					images
						.filter((img) => img.id == currImgId)
						.map((image) => {
							return (
								<img
									src={image.download_url}
									alt="image"
									className="brightness-80 grayscale"
									key={image.id}
								/>
							);
						})
				) : (
					<p>Loading...</p>
				)}
				<ForwardIcon
					className="slider-control slider-right"
					style={
						isRightHovered
							? {
									fontSize: "40px",
									opacity:
										currImgId < images.length - 1 ? 1 : 0.5,
							  }
							: {
									opacity:
										currImgId < images.length - 1 ? 1 : 0.5,
							  }
					}
					onClick={() =>
						setCurrImgId(
							currImgId < images.length - 1
								? currImgId + 1
								: currImgId
						)
					}
					onMouseEnter={() => {
						setIsRightHovered(true);
					}}
					onMouseLeave={() => {
						setIsRightHovered(false);
					}}
				/>
				<div className="flex gap-4 absolute bottom-4">
					{images && images.length > 0 ? (
						images.map(({ id }) => {
							return (
								<span
									className="w-4 h-4 bg-zinc-700 rounded-[50%] cursor-pointer hover:bg-slate-300"
									onClick={() => {
										setCurrImgId(id);
									}}
									style={
										currImgId == id
											? {
													backgroundColor: "white",
											  }
											: {}
									}
									key={id}
								></span>
							);
						})
					) : (
						<p>Nothing</p>
					)}
				</div>
			</div>
		</Layout>
	);
};

export default P4;
