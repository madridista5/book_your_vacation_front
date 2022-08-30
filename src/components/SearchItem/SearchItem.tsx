import React from "react";
import {Link} from "react-router-dom";

import './SearchItem.css';

interface Props {
    item: {
        _id: string,
        name: string,
        type: string,
        city: string,
        address: string,
        distance: number,
        photos: string[],
        title: string,
        desc: string,
        rooms: number[],
        cheapestPrice: number,
        featured: false,
        __v: number,
        rating?: number,
    } | string
}

export const SearchItem = (props: Props) => (
    <>{typeof props.item !== 'string' && <div className="searchItem">
        <img src={require('../../assets/room.jpg')} alt="room" className="siImg"/>
        <div className="siDesc">
            <h1 className="siTitle">{props.item.name}</h1>
            <span className="siDistance">{props.item.distance}m do centrum</span>
            <span className="siTaxiOp">Darmowy dojazd taksówką na lotnisko</span>
            <span className="siSubtitle">Pokój klimatyzowany</span>
            <span className="siFeatures">{props.item.desc}</span>
            <span className="siCancelOp">Możliwość anulowania</span>
            <span className="siCancelOpSubtitle">Możesz anulować później, skorzystaj z dzisiejszej promocji</span>
        </div>
        <div className="siDetails">
            {props.item.rating && <div className="siRating">
                <span>Wspaniale</span>
                <button>{props.item.rating}</button>
            </div>}
            <div className="siDetailTexts">
                <span className="siPrice">{props.item.cheapestPrice} zł</span>
                <Link to={`/hotels/${props.item._id}`}>
                    <button className="siCheckButton">Sprawdź dostępność</button>
                </Link>
            </div>
        </div>
    </div>}</>
);