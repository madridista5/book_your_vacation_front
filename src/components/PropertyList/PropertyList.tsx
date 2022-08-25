import React from "react";

import './PropertyList.css';

export const PropertyList = () => (
    <div className="pList">

        <div className="pListItem">
            <img src={require('../../assets/hotel.jpg')} alt="hotel" className="pListImg"/>
            <div className="pListTitles">
                <h1>Hotele</h1>
                <h2>254 hoteli</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src={require('../../assets/apartament.jpg')} alt="apartment" className="pListImg"/>
            <div className="pListTitles">
                <h1>Apartamenty</h1>
                <h2>2351 apartamentów</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src={require('../../assets/resort.jpg')} alt="resort" className="pListImg"/>
            <div className="pListTitles">
                <h1>Resorty</h1>
                <h2>154 resorty</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src={require('../../assets/villa.jpg')} alt="villa" className="pListImg"/>
            <div className="pListTitles">
                <h1>Rezydencje</h1>
                <h2>120 rezydencji</h2>
            </div>
        </div>

    </div>
);