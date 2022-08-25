import React from "react";
import {Navbar} from "../../components/Navbar/Navbar";
import {Header} from "../../components/header/Header";

import './Home.css';
import {Featured} from "../../components/Featured/Featured";
import {PropertyList} from "../../components/PropertyList/PropertyList";

export const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header type=""/>
            <div className="homeContainer">
                <Featured/>
                <h1 className="homeTitle">Wyszukaj po rodzaju noclegu</h1>
                <PropertyList/>
            </div>
        </div>
    );
};