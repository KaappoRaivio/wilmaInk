import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dashboard from "./Dashboard";
import data from "./data.json";
import Column from "./Column";
import Event from "./Event";

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            en: {
                translation: {
                    "no_homework": "No homework marked"
                }
            },
            fi: {
                translation: {
                    "no_homework": "Ei merkittyjä läksyjä"
                }
            }
        },
        lng: "fi",
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        }
    });

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            data: null,
            dayOfWeek: (new Date().getDay() - 1 + 1) % 5
        }
    }


    componentDidMount() {
        // fetch("http://192.168.1.100:8080")
        fetch("http://raivio.dy.fi:8080")
            .then(res => {
                console.log(res.status)
                return res.json();
            })
            .then(data => {
                console.log(data)
                this.setState({data, loading: false});
            })
    }

    render() {
        if (this.state.loading) {
            return <>...</>
        } else {
            return <span style={{display: "flex", height: "100%"}}>
                <Dashboard data={data} dayOfWeek={this.state.dayOfWeek} daysForward={0} style={{flex: "1 0 100%"}}/>
            </span>
        }
    }
}

App.propTypes = {};

export default App;