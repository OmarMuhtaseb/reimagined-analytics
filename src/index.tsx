import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Analytics} from "./analytics";

Analytics.bootstrap();

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
