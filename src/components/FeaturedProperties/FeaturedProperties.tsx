import React from "react";
import {useFetch} from "../../hooks/useFetch";
import {apiUrl} from "../../config/api";

import './FeaturedProperties.css';

export const FeaturedProperties = () => {
    const {data, loading} = useFetch(`${apiUrl}/hotels/countByType`);

    return (
        <div className="fp">
            <div className="fpItem">
                <img src={require('../../assets/bedroom.jpg')} alt="bedroow" className="fpImg"/>
                <span className="fpName">Aparthotel Stare Miasto</span>
                <span className="fpCity">Madryt</span>
                <span className="fpPrice">Od 420 zł</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Wspaniały</span>
                </div>
            </div>

            <div className="fpItem">
                <img src={require('../../assets/bedroom.jpg')} alt="bedroow" className="fpImg"/>
                <span className="fpName">Aparthotel Stare Miasto</span>
                <span className="fpCity">Madryt</span>
                <span className="fpPrice">Od 420 zł</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Wspaniały</span>
                </div>
            </div>

            <div className="fpItem">
                <img src={require('../../assets/bedroom.jpg')} alt="bedroow" className="fpImg"/>
                <span className="fpName">Aparthotel Stare Miasto</span>
                <span className="fpCity">Madryt</span>
                <span className="fpPrice">Od 420 zł</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Wspaniały</span>
                </div>
            </div>

            <div className="fpItem">
                <img src={require('../../assets/bedroom.jpg')} alt="bedroow" className="fpImg"/>
                <span className="fpName">Aparthotel Stare Miasto</span>
                <span className="fpCity">Madryt</span>
                <span className="fpPrice">Od 420 zł</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Wspaniały</span>
                </div>
            </div>
        </div>
    );

};