import React from "react";
import Layout from "../components/Layout";
import { Header } from "../components";
import { useLocalStorage } from "./useLocalStorage";
import "./theme.css";

const P8 = () => {
	const [theme, setTheme] = useLocalStorage("theme", "light");
	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};
	return (
		<Layout>
			<Header projectNo={8} title="Light & Dark Theme" />
			<div className="theme" data-theme={theme}>
				<button onClick={toggleTheme}>Change Theme</button>
				<div>
					<p>This text will change color based on theme</p>
				</div>
			</div>
		</Layout>
	);
};

export default P8;
