import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/home/Home";
import {List} from "./pages/list/List";
import {Hotel} from "./pages/hotel/Hotel";
import {Login} from "./pages/login/Login";
import {AuthContext} from "./context/auth.context";

import './App.css';


export const App = () => {
    const [userData, setUserData] = useState({
        _id: '',
        username: '',
        email: '',
    });

    useEffect(() => {
        const data = localStorage.getItem('user');
        if(data !== null) {
            const userDataFromLS = JSON.parse(data);
            setUserData({
                _id: userDataFromLS._id,
                username: userDataFromLS.username,
                email: userDataFromLS.email,
            });
        }
    }, []);

    return (
        <AuthContext.Provider value={{
            user: {
                _id: userData._id,
                username: userData.username,
                email: userData.email,
            },
            loading: false,
            error: null,
        }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/hotels" element={<List/>}/>
                    <Route path="/hotels/:id" element={<Hotel/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}
