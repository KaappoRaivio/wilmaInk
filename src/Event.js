import React from 'react';

import "./Event.css"

const Event = ({ type, course, room, courseDetails }) => {
    console.log(courseDetails, type, course, room, courseDetails);
    return <div style={{display: "flex"}}>
        {
            type !== "empty"
                ? <div className={`event-wrapper ${type === "lesson" ? "event-event" : "event-other"}`} style={{flex: "0 0 20%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div style={{alignSelf: "flex-center"}}>
                        <b>{course}</b>
                        <br/>
                        {room}
                    </div>
                </div>
                : <div className={`event-wrapper event-none`} style={{width: "20%"}}>
                    aasd
                    <br/>
                    aasd
                </div>
        }
        {
            type !== "empty" && <div style={{flex: "1 1 80%", display: "flex", justifyContent: "left", alignItems: "left", paddingLeft: "2%", paddingTop: "1%", fontSize: "80%"}}>
                <div style={{alignSelf: "flex-center"}}>
                    {courseDetails.homework.length ? courseDetails.homework[0].homework : "No homework"}
                </div>
            </div>
        }
    </div>
};

Event.propTypes = {};

export default Event;