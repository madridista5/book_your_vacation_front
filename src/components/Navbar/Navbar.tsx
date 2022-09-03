import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/auth.context";

import './Navbar.css';
import {useFetch} from "../../hooks/useFetch";

export const Navbar = () => {
    const {user} = useContext(AuthContext);
    const {reFetch} = useFetch('/');

    const handleLogout = async () => {
        user._id = '';
        user.username = '';
        user.email = '';
        localStorage.clear();
        await reFetch();
    }

    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" style={{color: 'inherit', textDecoration: 'none'}}>
                    <span className="logo">Booking Travel</span>
                </Link>
                {user._id
                    ? <button className="navButton" onClick={handleLogout}>Wyloguj</button>
                    : <div className="navItems">
                        <Link to="/register">
                            <button className="navButton">Register</button>
                        </Link>
                        <Link to="/login">
                            <button className="navButton">Login</button>
                        </Link>
                    </div>}
            </div>
        </div>
    );
};