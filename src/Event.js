import React, { useEffect, useState } from "react";
import Row from "./Row";
import styles from "./Event.module.css";
import { useTranslation } from "react-i18next";
import FormattedDate from "./FormattedDate";
import AutoFitText from "./AutoFitText";

const Event = ({ type, course, room, courseDetails }) => {
	const { t } = useTranslation();

	const [fontSizes, setFontSizes] = useState([]);
	const [uniformFontSize, setUniformFontSize] = useState(null);

	useEffect(() => {
		if (fontSizes.length > 1) {
			setUniformFontSize(Math.min(...fontSizes));
		}
	}, [fontSizes]);

	const onFontSizeFound = fontSize => {
		setFontSizes(prevState => prevState.concat(fontSize));
	};

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
