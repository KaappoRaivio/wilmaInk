import React from "react";
import { useTranslation } from "react-i18next";

const formatDate = date => {
	return `${date.getDate() < 10 ? "0" : ""}${date.getDate()}.${date.getMonth() + 1}`;
};

const FormattedDate = ({ date }) => {
	const { t } = useTranslation();

	return <>{`${t("weekday_" + date.getDay_correct())} ${formatDate(date)}`}</>;
};

FormattedDate.propTypes = {};

export default FormattedDate;
