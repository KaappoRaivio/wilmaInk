import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Dashboard from "./Dashboard";

import data from "./data.json";
import Column from "./Column";
import App from "./App";
import { initReactI18next, withTranslation } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources: {
			en: {
				translation: {
					no_homework: "No homework marked",
					no_lesson_diary: "No entries in lesson diary",
					homework: "Homrwork",
					lesson_diary: "Lesson diary",
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
					no_lesson_diary: "Ei merkintöjä tuntipäiväkirjassa",
					homework: "Läksyt",
					lesson_diary: "Tuntipäiväkirja",
					weekday_0: "su",
					weekday_1: "ma",
					weekday_2: "ti",
					weekday_3: "ke",
					weekday_4: "to",
					weekday_5: "pe",
					weekday_6: "la",
				},
			},
		},
		lng: "fi",
		fallbackLng: "en",

		interpolation: {
			escapeValue: false,
		},
	});

ReactDOM.render(
	<React.StrictMode>
		{/*<Dashboard data={data}/>*/}
		<div style={{ width: "100vw", height: "100vh" }}>
			{/*<Column column={data[1].upcoming["2020-10-19"]} />*/}
			{/*{withTranslation("default")(<App />)}*/}
			<App />
			{/*<App />*/}
		</div>
	</React.StrictMode>,
	document.getElementById("root")
);
