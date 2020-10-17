import React from "react";

import styles from "./css/Column.module.css";

const Column = ({ children }) => <div className={styles.column}>{children}</div>;

Column.propTypes = {};

export default Column;
