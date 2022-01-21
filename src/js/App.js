import { Button } from "bootstrap";
import React, { useState } from "react";
import reactDom from "react-dom";

export function App() {
	const [myTask, setMyTask] = useState([]);
	const [inputValue, setInputValue] = useState("");
	const handleKeyPress = (e) => {
		if (e.key === "Enter" && inputValue !== "") {
			setMyTask(
				myTask.concat({
					label: inputValue,
					done: false,
				})
			);
			setInputValue("");
		}
	};

	const removeTodo = (index) => {
		setMyTask(myTask.filter((item, i) => index != i));
	};

	return (
		<div className="container">
			<h1>Todo List</h1>
			<h2>What needs to be done</h2>
			<ul className="todo-wrap list-unstyled">
				<li>
					<input
						style={{
							width: "30rem",
							height: "2rem",
						}}
						type="text"
						placeholder="Insert a new task"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyPress={(e) => handleKeyPress(e)}
					/>
				</li>

				{myTask.map((item, index) => (
					<li key={index} className="assignment">
						{item.label}{" "}
						<span onClick={() => removeTodo(index)}>
							<button id="button">x</button>
						</span>
					</li>
				))}
				<li className="assignment">
					{myTask.length > 1
						? `${myTask.length} Items `
						: myTask.length > 0
						? `${myTask.length} Item `
						: "No task - Add a task "}

					<span
						role="span"
						tabIndex="0"
						onClick={() => setMyTask([])}>
						<button
							className="button2"
							style={{
								width: "8rem",
								height: "2rem",
								margin: "25px",
								padding: "4px",
							}}>
							Delete All Task!
						</button>
					</span>
				</li>
			</ul>
		</div>
	);
}
export default App;
