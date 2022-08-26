import React from "react";

import './SearchItem.css';

export const SearchItem = () => (
    <div className="searchItem">
        <img src={require('../../assets/room.jpg')} alt="room" className="siImg"/>
        <div className="siDesc">
            <h1 className="siTitle">Sunny Beach Apartments</h1>
            <span className="siDistance">500m do centrum</span>
            <span className="siTaxiOp">Darmowy dojazd taksówką na lotnisko</span>
            <span className="siSubtitle">Pokój klimatyzowany</span>
            <span className="siFeatures">1 łazienka | 21m² 1 duże łóżko</span>
            <span className="siCancelOp">Możliwość anulowania</span>
            <span className="siCancelOpSubtitle">Możesz anulować później, skorzystaj z dzisiejszej promocji</span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Wspaniale</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">410 zł</span>
                <button className="siCheckButton">Sprawdź dostępność</button>
            </div>
        </div>
    </div>
);