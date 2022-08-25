import React from "react";
import {Navbar} from "../../components/Navbar/Navbar";
import {Header} from "../../components/header/Header";
import {Featured} from "../../components/Featured/Featured";
import {PropertyList} from "../../components/PropertyList/PropertyList";
import {FeaturedProperties} from "../../components/FeaturedProperties/FeaturedProperties";
import {MailList} from "../../components/MailList/MailList";
import {Footer} from "../../components/Footer/Footer";

import './Home.css';

export const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header type=""/>
            <div className="homeContainer">
                <Featured/>
                <h1 className="homeTitle">Wyszukaj po rodzaju noclegu</h1>
                <PropertyList/>
                <h1 className="homeTitle">Goście uwielbiają</h1>
                <FeaturedProperties/>
                <MailList/>
                <Footer/>
            </div>
        </div>
    );
};