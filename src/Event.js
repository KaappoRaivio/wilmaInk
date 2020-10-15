import React from "react";
import Row from "./Row";
import styles from "./event.module.css";
import { useTranslation } from "react-i18next";
import FormattedDate from "./FormattedDate";

const Event = ({ type, course, room, courseDetails }) => {
	const { t } = useTranslation();

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
				<div className={styles.homework}>
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
				</div>
			)}
			{type !== "empty" && (
				<div className={styles.homework}>
					{courseDetails.lesson_diary.length ? (
						<>
							<b>
								<FormattedDate date={new Date(courseDetails.lesson_diary[0].date)} />
							</b>
							{`: ${courseDetails.lesson_diary[0].lesson_topic}`}
						</>
					) : (
						t("no_lesson_diary")
					)}
				</div>
			)}
		</Row>
	);
};

Event.propTypes = {};

export default Event;
