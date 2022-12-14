import React, {useContext, useState} from "react";
import {Navbar} from "../../components/Navbar/Navbar";
import {Header} from "../../components/header/Header";
import {useLocation} from "react-router-dom";
import {DateRange, Range} from "react-date-range";
import {format} from "date-fns";
import {SearchItem} from "../../components/SearchItem/SearchItem";
import {useFetch} from "../../hooks/useFetch";
import {apiUrl} from "../../config/api";

import './List.css';
import {SearchContext} from "../../context/search.context";

interface StateLocation {
    destination: string,
    date: Range[],
    options: {
        adult: number,
        children: number,
        room: number,
    },
}

export const List = () => {
    const location = useLocation();
    const myState = location.state as StateLocation;

    const [destination, setDestination] = useState<string>(myState.destination);
    const [date, setDate] = useState<Range[]>(myState.date);
    const [options, setOptions] = useState(myState.options);
    const [openDate, setOpenDate] = useState<boolean>(false);
    const [min, setMin] = useState<number | undefined>(undefined);
    const [max, setMax] = useState<number | undefined>(undefined);

    const searchContext = useContext(SearchContext);

    const {
        data,
        loading,
        error,
        reFetch
    } = useFetch(`${apiUrl}/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`);

    const handleClick = async () => {
        searchContext.city = destination;
        if(typeof date[0].startDate !== 'undefined' && typeof date[0].endDate !== 'undefined') {
            searchContext.dates[0].startDate = date[0].startDate;
            searchContext.dates[0].endDate = date[0].endDate;
        }
        searchContext.options = options;
        await reFetch();
    };

    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">Szukaj</h1>

                        <div className="lsItem">
                            <label>Cel podr????y</label>
                            <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)}/>
                        </div>

                        <div className="lsItem">
                            <label>Termin pobytu</label>
                            <span onClick={() => setOpenDate(!openDate)}>
                                {(typeof date[0].startDate !== 'undefined' && typeof date[0].endDate !== 'undefined') && `${format(date[0].startDate, 'dd/MM/yyy')} do ${format(date[0].endDate, 'dd/MM/yyy')}`}
                            </span>
                            {openDate && <DateRange
                                onChange={item => setDate([item.selection])}
                                minDate={new Date()}
                                ranges={date}
                            />}
                        </div>
                        <div className="lsItem">
                            <label>Options</label>

                            <div className="lsOptions">
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Cena minimalna <small>za dob??</small></span>
                                    <input type="number" onChange={(e) => setMin(Number(e.target.value))}
                                           className="lsOptionInput"/>
                                </div>

                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Cena maksymalna <small>za dob??</small></span>
                                    <input type="number" onChange={(e) => setMax(Number(e.target.value))}
                                           className="lsOptionInput"/>
                                </div>

                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Doros??ych</span>
                                    <input type="number" className="lsOptionInput" placeholder={String(options.adult)}
                                           min={1}/>
                                </div>

                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Dzieci</span>
                                    <input type="number" className="lsOptionInput"
                                           placeholder={String(options.children)} min={0}/>
                                </div>

                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Pok??j</span>
                                    <input type="number" className="lsOptionInput" placeholder={String(options.room)}
                                           min={1}/>
                                </div>
                            </div>

                        </div>
                        <button onClick={handleClick}>Search</button>
                    </div>
                    <div className="listResult">
                        {loading
                            ? <p>Wczytywanie danych. Prosz?? czeka??.</p>
                            : <>{data.map((item, index) => (<SearchItem item={item} key={index}/>))}
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};