import React from "react";
import { useTranslation } from "react-i18next";

const weekdays = ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"];
//
const formatDate = date => {
	// const split = date.split("-");

	return `${date.getDate() < 10 ? "0" : ""}${date.getDate()}.${date.getMonth() + 1}`;
	// return `${weekdays[new Date(date).getDay()]} ${split[2]}.${split[1]}`
};

const FormattedDate = ({ date }) => {
	const { t } = useTranslation();

	return <>{`${t("weekday_" + date.getDay())} ${formatDate(date)}`}</>;
};

FormattedDate.propTypes = {};

export default FormattedDate;
