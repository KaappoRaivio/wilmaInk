import React from "react";
import Event from "./Event";
import Column from "./Column";

import "./Dashboard.css";

// const weekdays = [
//     "Su",
//     "Ma",
//     "Ti",
//     "Ke",
//     "To",
//     "Pe",
//     "La"
// ]
// //
// const formatDate = date => {
//     const split = date.split("-");
//
//     return `${weekdays[new Date(date).getDay()]} ${split[2]}.${split[1]}`
// }

// const advanceOne = date => {
//     let temp = new Date(date);
//     temp.setDate(temp.getDate() + 1);
//     return `${temp.getFullYear()}-${temp.getMonth() + 1 /*Javascript on retardi*/}-${temp.getDate()}`
// }

// const getFullWeek = weekdays => {
//     const friday = weekdays[4].date;
//     const saturday = advanceOne(friday);
//     const sunday = advanceOne(saturday);
//     return [...weekdays, {date: saturday, events: []}, {date: sunday, events: []}]
// }

// Array.prototype.rotate = function(n) {
//     return this.slice(n, this.length).concat(this.slice(0, n));
// }

const Dashboard = ({ data, dayOfWeek, daysForward }) => {
	let events = [...Array(5).fill(0)].map(_ => <Event type={"empty"} />);
	for (const { course, type, room, nth_lesson } of data.upcoming[dayOfWeek].events) {
		const courseDetails = data.courses[course];
		console.log(courseDetails, course);
		events[nth_lesson] = <Event type={type} course={course} room={room} courseDetails={courseDetails} />;
	}

	return (
		<div className={"dashboard-grid"} style={{ gridTemplateColumns: `repeat(${daysForward + 1}, 1fr)`, width: "100%" }}>
			{<Column>{events}</Column>}
		</div>
	);
};

Dashboard.propTypes = {};

export default Dashboard;
