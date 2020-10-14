import React from 'react';

// import "./Event.css"
import styles from "./event.module.css"
import {useTranslation} from "react-i18next";

const Event = ({ type, course, room, courseDetails }) => {
    // console.log(courseDetails, type, course, room, courseDetails);
    const { t } = useTranslation();

    return <div style={{display: "flex"}}>
        {
            type !== "empty" ?
                <div className={`${styles.wrapper} ${styles.event} ${styles.course}`} >
                    <div >
                        <b>{course}</b>
                        <br/>
                        {room}
                    </div>
                </div> :
                <div className={`${styles.wrapper} ${styles.none} ${styles.course}`}>
                    aasd
                    <br/>
                    aasd
                </div>
        }
        {
            type !== "empty" &&
            <div className={styles.homework}>
                <div>
                    {courseDetails.homework.length ? courseDetails.homework[0].homework : t("no_homework")}
                </div>
            </div>
        }
    </div>
};

Event.propTypes = {};

export default Event;