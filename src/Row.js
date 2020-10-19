import React from "react";

import styles from "./css/Row.module.css";

const Row = props => {
	return (
		<div className={styles.row}>
			<div className={`${styles.column1}`}>{props.children[0]}</div>
			<div className={`${styles.column2}`}>{props.children[1]}</div>
			<div className={`${styles.column3}`}>{/*props.children[2]*/}</div>
		</div>
	);
};

Row.propTypes = {};

export default Row;
