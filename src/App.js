import React, { Component } from "react";
import Dashboard from "./Dashboard";
import data from "./data.json";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import FormattedDate from "./FormattedDate";

import styles from "./App.module.css";

i18n.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources: {
			en: {
				translation: {
					no_homework: "No homework marked",
					weekday_0: "Sun",
					weekday_1: "Mon",
					weekday_2: "Tue",
					weekday_3: "Wed",
					weekday_4: "Thu",
					weekday_5: "Fri",
					weekday_6: "Sat",
				},
			},
			fi: {
				translation: {
					no_homework: "Ei merkittyjä läksyjä",
					weekday_0: "su ",
					weekday_1: "ma ",
					weekday_2: "ti ",
					weekday_3: "ke ",
					weekday_4: "to ",
					weekday_5: "pe ",
					weekday_6: "la ",
				},
			},
		},
		lng: "fi",
		fallbackLng: "en",

		interpolation: {
			escapeValue: false,
		},
	});

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

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			data: null,
			currentDate: getNextWeekDay(),
		};
	}

	componentDidMount() {
		// fetch("http://192.168.1.100:8080")
		fetch("http://raivio.dy.fi:8080")
			.then(res => {
				// console.log(res.status)
				return res.json();
			})
			.then(data => {
				console.log(data);
				this.setState({ data, loading: false });
			});

		console.log(getNextWeekDay());
	}

	render() {
		if (this.state.loading) {
			return <>...</>;
		} else {
			return (
				<div className={styles.wrapper}>
					<div className={styles.dateTitle}>
						<FormattedDate date={this.state.currentDate} />
					</div>
					<Dashboard
						className={styles.dashboard}
						data={data}
						dayOfWeek={convertSunday(this.state.currentDate.getDay())}
						daysForward={0}
					/>
				</div>
			);
		}
	}
}

App.propTypes = {};

export default App;
