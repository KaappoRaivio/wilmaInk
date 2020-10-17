import React from "react";

import styles from "./row.module.css";

const Row = props => {
	return (
		<div className={styles.wrapper}>
			<div className={`${styles.composition1}`}>{props.children[0]}</div>
			<div className={`${styles.composition2}`}>{props.children[1]}</div>
			<div className={`${styles.composition2}`}>{props.children[2]}</div>
		</div>
	);
};

Row.propTypes = {};

export default Row;
