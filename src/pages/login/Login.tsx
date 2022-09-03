import React, {SyntheticEvent, useContext, useState} from "react";
import {AuthContext} from "../../context/auth.context";
import {axiosFunction} from "../../utils/axios-function";
import {useNavigate} from "react-router-dom";

import './Login.css';

export const Login = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });
    const {user} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleClick = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            const {data} = await axiosFunction.post(`/auth/login`, credentials);
            if(data) {
                user._id = data._id;
                user.username = data.username;
                user.email = data.email;
                localStorage.setItem('user', JSON.stringify(data));
                navigate('/');
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="login">
            <div className="lContainer">
                <input
                    type="text"
                    className="lInput"
                    placeholder="username"
                    id="username"
                    onChange={(e) => setCredentials(prev => ({
                        ...prev,
                        username: e.target.value,
                    }))}
                />
                <input
                    type="password"
                    className="lInput"
                    placeholder="password"
                    id="password"
                    onChange={(e) => setCredentials(prev => ({
                        ...prev,
                        password: e.target.value,
                    }))}
                />
                <button className="lBtn" onClick={handleClick}>Zaloguj</button>
            </div>
        </div>
    );
};