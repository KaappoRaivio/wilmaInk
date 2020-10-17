import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Dashboard from "./Dashboard";

import data from "./data.json";
import translations from "./translations.json";

import Column from "./Column";
import App from "./App";
import { initReactI18next, withTranslation } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources: translations,
		lng: "fi",
		fallbackLng: "en",

		interpolation: {
			escapeValue: false,
		},
	});

const onLanguageChanged = newLanguage => {
	i18n.changeLanguage(newLanguage);
};

ReactDOM.render(
	<React.StrictMode>
		<div style={{ width: "100vw", height: "100vh" }}>
			<App onLanguageChanged={onLanguageChanged} />
		</div>
	</React.StrictMode>,
	document.getElementById("root")
);
