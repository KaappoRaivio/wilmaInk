import React, { useEffect, useReducer, useState } from "react";
import Row from "./Row";
import styles from "./Event.module.css";
import { useTranslation } from "react-i18next";
import FormattedDate from "./FormattedDate";
import AutoFitText from "./AutoFitText";

const reducer = (state, fontSize) => {
	const array = state.array.concat(fontSize);
	console.log(array, fontSize);
	if (array.length > 1) {
		return { uniformFontSize: Math.min(...array), array };
	} else {
		return { uniformFontSize: null, array };
	}
};

const Event = ({ type, course, room, courseDetails }) => {
	const { t } = useTranslation();

	const [{ uniformFontSize }, onFontSizeFound] = useReducer(reducer, { array: [], uniformFontSize: null });

	return (
		<Row type={type} course={course} room={room} courseDetails={courseDetails}>
			{type === "empty" ? (
				<div className={`${styles.none} ${styles.course}`}>
					a<br />a
				</div>
			) : (
				<div className={`${styles.event} ${styles.course}`}>
					<div className={styles.border}>
						<b>{course}</b>
						<br />
						{room} <i>{courseDetails.teacher}</i>
					</div>
				</div>
			)}
			{type !== "empty" && (
				<AutoFitText
					initialFontSize={18}
					className={styles.homework}
					uniformFontSize={uniformFontSize}
					onFontSizeFound={onFontSizeFound}>
					{courseDetails.homework.length ? (
						<>
							<b>
								<FormattedDate date={new Date(courseDetails.homework[0].given_on)} />
							</b>
							{`: ${courseDetails.homework[0].homework}`}
							Place the meatloaf in a wok, and toss fully with large crême fraîche.The great unknown is
							full of totality.
						</>
					) : (
						t("no_homework")
					)}
				</AutoFitText>
			)}
			{type !== "empty" && (
				<AutoFitText
					initialFontSize={18}
					className={styles.homework}
					uniformFontSize={uniformFontSize}
					onFontSizeFound={onFontSizeFound}>
					{courseDetails.lesson_diary.length ? (
						<>
							<b>
								<FormattedDate date={new Date(courseDetails.lesson_diary[0].date)} />
							</b>
							{`: ${courseDetails.lesson_diary[0].lesson_topic}`}{" "}
						</>
					) : (
						t("no_lesson_diary")
					)}
				</AutoFitText>
			)}
		</Row>
	);
};

Event.propTypes = {};

export default Event;
