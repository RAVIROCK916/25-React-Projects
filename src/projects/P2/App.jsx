import React, { useRef, useState } from "react";
import { Header, Button } from "../components";
import Layout from "../components/Layout";

const P2 = () => {
	const [color, setColor] = useState("white");

	const colorRef = useRef();
	const [tooltip, setTooltip] = useState("copy");

	const generateRGBColor = () => {
		resetColorState();

		const rgb = () => {
			return Math.floor(Math.random() * 256)
				.toString()
				.padStart(3, "0");
		};

		let r = rgb();
		let g = rgb();
		let b = rgb();

		setColor(`rgb(${r}, ${g}, ${b})`);
	};

	const generateHexCode = () => {
		resetColorState();

		let hexCode = "";
		for (let i = 0; i < 6; i++) {
			let hexDigit = Math.floor(Math.random() * 16);
			hexDigit = generateAlpha(hexDigit);
			hexCode += hexDigit;
		}

		setColor("#" + hexCode);
	};

	// generate function to convert number to alphabet
	const generateAlpha = (num) => {
		switch (num) {
			case 10:
				return "a";
			case 11:
				return "b";
			case 12:
				return "c";
			case 13:
				return "d";
			case 14:
				return "e";
			case 15:
				return "f";
			default:
				return num;
		}
	};

	const resetColorState = () => {
		colorRef.current.style.color = "white";
		colorRef.current.style.borderWidth = "0px";
		if (tooltip === "copied") {
			setTooltip("copy");
		}
	};

	const copyColor = () => {
		navigator.clipboard.writeText(colorRef.current.innerText);
		colorRef.current.style.border = "2px solid white";
		if (tooltip === "copy") {
			setTooltip("copied");
			setTimeout(() => {
				setTooltip("copy");
				colorRef.current.style.borderWidth = "0px";
			}, 2000);
		}
	};

	return (
		<Layout>
			<Header projectNo={2} title="Color Generator" />
			<div className="flex justify-center gap-8 my-10">
				<Button handleClick={generateHexCode}>HEX Color</Button>
				<Button handleClick={generateRGBColor}>RGB color</Button>
			</div>
			<div
				style={{
					backgroundColor: color,
				}}
				className="min-h-[50vh] flex justify-center items-center"
			>
				<div
					className={`shadow-[0_15px_25px_rgba(0,0,0,0.25)] px-6 py-3 border-2 border-transparent cursor-pointer transition duration-100 active: relative after:content-[attr(data-tool-tip)] after:scale-0 hover:after:scale-100 after:text-sm after:absolute after:bottom-10 hover:after:bottom-14 after:right-[50%] after:translate-x-[50%] after:rounded-md after:bg-gray-700/10 after:px-4 after:py-1 after:border-2 after:border-dashed after:border-gray-700 after:transition-all after:duration-50`}
					ref={colorRef}
					onClick={copyColor}
					data-tool-tip={tooltip}
				>
					{/* sdsadasd */}
					{color}
				</div>
			</div>
		</Layout>
	);
};

export default P2;
