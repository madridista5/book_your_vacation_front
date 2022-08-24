import {faBed, faCar, faPlane, faTaxi} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

import './Header.css';

export const Header = () => {
    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed}/>
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane}/>
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar}/>
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed}/>
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi}/>
                        <span>Airport taxis</span>
                    </div>
                </div>
                <h1 className="headerTitle">Rabat !</h1>
                <p className="headerDesc">10% taniej z darmowym kontem aplikacji Booking Travel.</p>
                <button className="headerBtn">Logowanie / Rejestracja</button>
            </div>
        </div>
    );
};