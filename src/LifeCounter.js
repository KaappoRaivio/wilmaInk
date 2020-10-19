import React, { useMemo } from "react";

import styles from "./css/LifeCounter.module.css";
import holidays from "./data/holidays.json";

const daysBetween = (d1, d2) => Math.round((d1 - d2) / (24 * 60 * 60 * 1000));

const LifeCounter = ({ date }) => {
	const days = useMemo(() => daysBetween(new Date(), date), [date]);

	const holidayRanges = holidays.map(item => {
		const start = daysBetween(new Date(item.start), date);
		const length = daysBetween(new Date(item.end), date) - start;
		return { start, length };
	});

	return (
		<div className={styles.parent}>
			<div className={styles.wrapper}>
				<div className={styles.bar} style={{ height: `${((days - 1) / 365) * 100}%` }} />
				{holidayRanges.map(item => (
					<div
						style={{
							left: 0,
							width: "100%",
							top: `${(item.start / 365) * 100}%`,
							height: `${(item.length / 365) * 100}%`,
							background: "red",
							position: "absolute",
						}}
					/>
				))}
			</div>
		</div>
	);
};

LifeCounter.propTypes = {};

export default LifeCounter;
