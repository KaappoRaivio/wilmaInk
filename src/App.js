import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import FormattedDate from "./FormattedDate";
import { useTranslation } from "react-i18next";

import styles from "./css/App.module.css";
import Row from "./Row";

const getNextWeekDay = skipDays => {
	let currentDate = new Date();
	currentDate.setDate(currentDate.getDate() + 1 + skipDays);
	while (!((currentDate.getDay() + 6) % 7 < 5)) {
		// while date is not weekday
		currentDate.setDate(currentDate.getDate() + 1); // advance by one
	}
	return currentDate;
};

const convertSunday = weekday => {
	return (weekday + 6) % 7;
};

const getUrlParams = () => {
	let params = new URL(window.location.href).searchParams;
	console.log(params, {
		language: params.get("lang") || "fi",
		skipDays: params.get("skipDays") || 0,
	});
	return {
		language: params.get("lang") || "fi",
		skipDays: parseInt(params.get("skipDays"), 10) || 0,
	};
};

const App = ({ onLanguageChanged }) => {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState(null);
	const [currentDate] = useState(getNextWeekDay(getUrlParams().skipDays));

	const { t } = useTranslation();

	useEffect(() => {
		fetch("http://raivio.dy.fi:8080")
			.then(res => {
				return res.json();
			})
			.then(data => {
				setData(data);
				setLoading(false);
			})
			.catch(console.error);
		onLanguageChanged(getUrlParams().language);
	}, []);

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
				<div className={styles.dashboard}>
					<Dashboard data={data} dayOfWeek={convertSunday(currentDate.getDay())} daysForward={0} />
				</div>
			</div>
		);
	}
};

App.propTypes = {};

export default App;
