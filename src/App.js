import React, { useEffect, useMemo, useState } from "react";
import Dashboard from "./Dashboard";
import FormattedDate from "./FormattedDate";
import { useTranslation } from "react-i18next";

import styles from "./css/App.module.css";
import Row from "./Row";
import LifeCounter from "./LifeCounter";

const getNextWeekDay = skipDays => {
	let currentDate = new Date();
	currentDate.setDate(currentDate.getDate() + 1 + skipDays);
	while (!(currentDate.getDay_correct() < 5)) {
		currentDate.setDate(currentDate.getDate() + 1);
	}
	return currentDate;
};

const convertSunday = weekday => {
	return (weekday + 6) % 7;
};

// eslint-disable-next-line no-extend-native
Date.prototype.getDay_correct = function () {
	return convertSunday(this.getDay());
};

const useUrlParams = () => {
	return useMemo(() => {
		const params = new URL(window.location.href).searchParams;
		return {
			language: params.get("lang") || "fi",
			date: getNextWeekDay(parseInt(params.get("skipDays"), 10) || 0),
			dataUrl: params.get("url") || "http://localhost:8080/",
			dimensions: { width: params.get("renderWidth") || 400, height: params.get("renderHeight") || 300 },
		};
	}, []);
};

const useRequest = url => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(url)
			.then(res => {
				return res.json();
			})
			.then(data => {
				setData(data);
				setLoading(false);
			})
			.catch(setError);
	}, [url]);

	return { data, loading, error };
};

const App = ({ onLanguageChanged }) => {
	const { date, language, dataUrl, dimensions } = useUrlParams();
	const { data, loading, error } = useRequest(dataUrl);
	const { t } = useTranslation();

	useEffect(() => onLanguageChanged(language), [language, onLanguageChanged]);

	if (error) {
		return <>{error.status}</>;
	} else if (loading) {
		return <>...</>;
	} else {
		return (
			<>
				<div className={styles.wrapper} style={{ width: dimensions.width, height: dimensions.height }}>
					<div className={styles.dateTitle}>
						<Row>
							<FormattedDate date={date} />
							<div>{t("homework")}</div>
							<div>{t("lesson_diary")}</div>
						</Row>
					</div>
					<div className={styles.dashboard}>
						<Dashboard data={data} dayOfWeek={date.getDay_correct()} daysForward={0} />
					</div>
					<LifeCounter width={dimensions.width} height={dimensions.height} date={new Date(2020, 7, 13)} />
				</div>
			</>
		);
	}
};

App.propTypes = {};

export default App;
