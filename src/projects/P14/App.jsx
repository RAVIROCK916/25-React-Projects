import React from "react";
import Layout from "../components/Layout";
import { Header } from "../components";
import Cell from "./components/Cell";

const P14 = () => {
	const rows = 10,
		lines = [];
	const [board, setBoard] = React.useState(Array(rows * rows).fill(null));
	const [xIsNext, setXIsNext] = React.useState(true);

	generateLines();

	const handleClick = (i) => {
		const boardCopy = [...board];
		if (winner || boardCopy[i]) return;
		boardCopy[i] = xIsNext ? "X" : "O";
		setBoard(boardCopy);
		setXIsNext(!xIsNext);
	};

	function generateLines() {
		// Generate winning lines
		for (let r = 0; r < rows; r++) {
			// adding rows
			let winningRow = [];
			for (let i = r * rows; i < (r + 1) * rows; i++) {
				winningRow.push(i);
			}
			lines.push(winningRow);

			// adding columns
			let winningColumn = [];
			for (let i = r; i < r + rows * rows; i = i + rows) {
				winningColumn.push(i);
			}
			lines.push(winningColumn);

			// adding diagonals
		}
		let winningDiagonal1 = [];
		let winningDiagonal2 = [];
		for (let i = 0; i < rows * rows; i = i + rows + 1) {
			winningDiagonal1.push(i);
		}
		for (let i = rows - 1; i < rows * rows - 1; i = i + rows - 1) {
			winningDiagonal2.push(i);
		}
		lines.push(winningDiagonal1);
		lines.push(winningDiagonal2);
		console.log(lines);
	}

	const findWinner = (board, rows) => {
		for (let line of lines) {
			const firstCellValue = board[line[0]];

			if (
				firstCellValue &&
				line.every((index) => board[index] === firstCellValue)
			) {
				return firstCellValue;
			}
		}

		return null;
	};

	// const winner = calculateWinner(board);
	const winner = findWinner(board, rows);

	return (
		<Layout>
			<Header projectNo={14} title="Tic Tac Toe" />
			<div
				className="grid w-max mx-auto my-10"
				style={{
					gridTemplateColumns: `repeat(${rows}, 1fr)`,
				}}
			>
				{board.map((value, index) => (
					<Cell
						value={value}
						onClick={() => handleClick(index)}
						key={index}
					/>
				))}
			</div>
			{winner ? <p>{winner} won!</p> : <p>It's a draw!</p>}
		</Layout>
	);
};

export default P14;
