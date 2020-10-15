import React, { Component, useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import data from "./data.json";
import FormattedDate from "./FormattedDate";

import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";

import ReactWeather from "react-open-weather";

import styles from "./App.module.css";
import Event from "./Event";
import Row from "./Row";

const getNextWeekDay = () => {
	let currentDate = new Date();
	currentDate.setDate(currentDate.getDate() + 1);
	while (!((currentDate.getDay() + 6) % 7 < 5)) {
		// while date is not weekday
		currentDate.setDate(currentDate.getDate() + 1); // advance by one
	}
	console.log(currentDate);
	return currentDate;
};

const convertSunday = weekday => {
	return (weekday + 6) % 7;
};

const App = props => {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState(null);
	const [currentDate, setCurrentDate] = useState(getNextWeekDay());

	const { t } = useTranslation();

	useEffect(() => {
		fetch("http://raivio.dy.fi:8080")
			.then(res => {
				return res.json();
			})
			.then(data => {
				console.log(data);
				setData(data);
				setLoading(false);
			})
			.catch(console.error);
	});

	if (isLoading) {
		return <>...</>;
	} else {
		return (
			<div className={styles.wrapper}>
				<div className={styles.dateTitle}>
					<Row>
						<FormattedDate date={currentDate} />
						<div>{t("homework")}</div>
						<div>{t("lesson_diary")}</div>
					</Row>
				</div>
				<Dashboard
					className={styles.dashboard}
					data={data}
					dayOfWeek={convertSunday(currentDate.getDay())}
					daysForward={0}
				/>
			</div>
		);
	}
};

App.propTypes = {};

export default App;
