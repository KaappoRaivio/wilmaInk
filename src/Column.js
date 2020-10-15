import React from "react";
import Row from "./Row";

const Column = ({ children }) => {
	// let events = [...Array(5).fill(0)].map(_ => <Event type={"empty"} />)
	//
	// console.log(column.events)
	//
	// for (const { course, type, room, nth_lesson } of column.events) {
	//     events[nth_lesson] = <Event type={type} course={course} room={room}/>
	// }

	return (
		// <div style={{height: "100%"}}>
		<div
			style={{
				height: "100%",
				display: "grid",
				gridAutoFlow: "row",
				gridTemplateRows: "repeat(5, 1fr)",
				gridRowGap: "10px",
				position: "relative",
			}}>
			{children}
		</div>
		// </div>
	);
};

Column.propTypes = {};

export default Column;
