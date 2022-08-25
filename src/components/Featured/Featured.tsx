import React from "react";

import './Featured.css';

export const Featured = () => (
    <div className="featured">
        <div className="featuredItem">
            <img src={require('../../assets/paris.jpg')} alt="paris" className="featuredImg"/>
            <div className="featuredTitles">
                <h1>Paryż</h1>
                <h2>Wieża Eiffel</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img src={require('../../assets/sevilla.jpg')} alt="sevilla" className="featuredImg"/>
            <div className="featuredTitles">
                <h1>Sevilla</h1>
                <h2>Panorama miasta</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img src={require('../../assets/pisa.jpg')} alt="pisa" className="featuredImg"/>
            <div className="featuredTitles">
                <h1>Pisa</h1>
                <h2>Krzywa wieża</h2>
            </div>
        </div>
    </div>
);