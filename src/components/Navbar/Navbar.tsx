import React from "react";
import {Link} from "react-router-dom";

import './Navbar.css';

export const Navbar = () => (
    <div className="navbar">
        <div className="navContainer">
            <Link to="/" style={{color: 'inherit', textDecoration: 'none'}}>
                <span className="logo">Booking Travel</span>
            </Link>
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>
    </div>
);