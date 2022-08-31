import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import {SearchContext} from "./context/search.context";
import { AuthContext } from './context/auth.context';
import reportWebVitals from './reportWebVitals';

import './index.css';

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
        <AuthContext.Provider value={{
            user: {
                _id: '',
                username: '',
                email: '',
            },
            loading: false,
            error: null,
        }}>
        <App/>
        </AuthContext.Provider>
    </SearchContext.Provider>
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
