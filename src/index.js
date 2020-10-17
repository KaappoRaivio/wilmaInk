import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import translations from "./data/translations.json";
import App from "./App";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
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
		<div className="app-root">
			<App onLanguageChanged={onLanguageChanged} />
		</div>
	</React.StrictMode>,
	document.getElementById("root")
);
