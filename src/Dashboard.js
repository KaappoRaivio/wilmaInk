import React from "react";
import Column from "./Column";

import "./Dashboard.css";
import Event from "./Event";

const Dashboard = ({ data, dayOfWeek, daysForward }) => {
	let events = [...Array(5).fill(0)].map((_, index) => <Event key={index} type={"empty"} />);
	for (const { course, type, room, nth_lesson } of data.upcoming[dayOfWeek].events) {
		const courseDetails = data.courses[course];
		events[nth_lesson] = (
			<Event
				key={course + nth_lesson + room}
				type={type}
				course={course}
				room={room}
				courseDetails={courseDetails}
			/>
		);
	}

	return <div className="dashboard-grid">{<Column>{events}</Column>}</div>;
	// return <Column>{events}</Column>;
};

Dashboard.propTypes = {};

export default Dashboard;
