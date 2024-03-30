import React from "react";
import data from "./data";
import Branch from "./Branch";
import Layout from "../components/Layout";

const P6 = () => {
	console.log(data);
	return (
		<Layout>
			<Branch data={data} />
		</Layout>
	);
};

export default P6;
