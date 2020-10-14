import React from "react";

// import "./Event.css"
import styles from "./event.module.css";
import { useTranslation } from "react-i18next";

const Event = ({ type, course, room, courseDetails }) => {
	const { t } = useTranslation();

	return (
		<div className={styles.wrapper}>
			{type === "empty" ? (
				<div className={`${styles.none} ${styles.course}`}>
					a
					<br />a
				</div>
			) : (
				<div className={`${styles.event} ${styles.course}`}>
					<div>
						<b>{course}</b>
						<br />
						{room}
					</div>
				</div>
			)}
			{type !== "empty" && (
				<div className={styles.homework}>
					<div>{courseDetails.homework.length ? courseDetails.homework[0].homework : t("no_homework")}</div>
				</div>
			)}
		</div>
	);
};

Event.propTypes = {};

export default Event;
