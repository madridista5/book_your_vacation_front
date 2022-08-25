import React from "react";
import {Navbar} from "../../components/Navbar/Navbar";
import {Header} from "../../components/header/Header";

import './Home.css';
import {Featured} from "../../components/Featured/Featured";

export const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header type=""/>
            <div className="homeContainer">
                <Featured/>
            </div>
        </div>
    );
};