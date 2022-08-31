import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';

import reportWebVitals from './reportWebVitals';

import './index.css';
import {SearchContext} from "./context/search.context";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    // <React.StrictMode>
    <SearchContext.Provider value={{
        city: '',
        dates: [{
            startDate: new Date(),
            endDate: new Date(),
            key: '',
        }],
        options: {
            adult: 0,
            children: 0,
            room: 0,
        },
    }}>
        <App/>
    </SearchContext.Provider>
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
