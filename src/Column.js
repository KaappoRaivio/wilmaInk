import React from "react";

import styles from "./Column.module.css";

const Column = ({ children }) => <div className={styles.column}>{children.slice(3, 4)}</div>;

Column.propTypes = {};

export default Column;
