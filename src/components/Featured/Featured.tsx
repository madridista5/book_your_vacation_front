import React from "react";
import {useFetch} from "../../hooks/useFetch";
import {apiUrl} from "../../config/api";

import './Featured.css';

export const Featured = () => {
    const {data, loading, error} = useFetch(`${apiUrl}/hotels/countByCity?cities=Paryz,Sevilla,Pisa`);

    return (
        <div className="featured">
            {loading
                ? <p>'Ładowanie danych. Proszę czekać'</p>
                : <>
                <div className="featuredItem">
                <img src={require('../../assets/paris.jpg')} alt="paris" className="featuredImg"/>
                <div className="featuredTitles">
                    <h1>Paryż</h1>
                    <h2>{String(data[0])} nieruchomości</h2>
                </div>
            </div>

                <div className="featuredItem">
                <img src={require('../../assets/sevilla.jpg')} alt="sevilla" className="featuredImg"/>
                <div className="featuredTitles">
                <h1>Sevilla</h1>
                <h2>{String(data[1])} nieruchomości</h2>
                </div>
                </div>

                <div className="featuredItem">
                <img src={require('../../assets/pisa.jpg')} alt="pisa" className="featuredImg"/>
                <div className="featuredTitles">
                <h1>Pisa</h1>
                <h2>{String(data[2])} nieruchomości</h2>
                </div>
                </div>
            </>}
        </div>
    );
};