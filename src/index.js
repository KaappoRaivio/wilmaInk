import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from "./Dashboard";

import data from "./data.json"
import Column from "./Column";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
      {/*<Dashboard data={data}/>*/}
      <div style={{width: "100vw", height: "100vh"}}>
        {/*<Column column={data[1].upcoming["2020-10-19"]} />*/}
        <App />
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);