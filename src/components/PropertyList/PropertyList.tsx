import React from "react";
import {useFetch} from "../../hooks/useFetch";
import {apiUrl} from "../../config/api";

import './PropertyList.css';

export const PropertyList = () => {
    const {data, loading} = useFetch(`${apiUrl}/hotels/countByType`);

    return (
        <div className="pList">

            {loading
                ? <p>'Ładowanie danych. Proszę czekać'</p>
                : <>
                    <div className="pListItem">
                        <img src={require('../../assets/hotel.jpg')} alt="hotel" className="pListImg"/>
                        <div className="pListTitles">
                            <h1>Hotele</h1>
                            <h2>{String(data[0])} hoteli</h2>
                        </div>
                    </div>

                    <div className="pListItem">
                        <img src={require('../../assets/apartament.jpg')} alt="apartment" className="pListImg"/>
                        <div className="pListTitles">
                            <h1>Apartamenty</h1>
                            <h2>{String(data[1])} apartamentów</h2>
                        </div>
                    </div>

                    <div className="pListItem">
                        <img src={require('../../assets/resort.jpg')} alt="resort" className="pListImg"/>
                        <div className="pListTitles">
                            <h1>Resorty</h1>
                            <h2>{String(data[2])} resortów</h2>
                        </div>
                    </div>

                    <div className="pListItem">
                        <img src={require('../../assets/villa.jpg')} alt="villa" className="pListImg"/>
                        <div className="pListTitles">
                            <h1>Rezydencje</h1>
                            <h2>{String(data[3])} rezydencji</h2>
                        </div>
                    </div>
                </>}

        </div>
    )
};