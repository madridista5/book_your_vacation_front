import React, {useState} from "react";
import {Navbar} from "../../components/Navbar/Navbar";
import {Header} from "../../components/header/Header";
import {useLocation} from "react-router-dom";
import {DateRange, Range} from "react-date-range";
import {format} from "date-fns";

import './List.css';

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

    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">Szukaj</h1>

                        <div className="lsItem">
                            <label>Cel podróży</label>
                            <input type="text" placeholder={destination}/>
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
                                    <span className="lsOptionText">Cena minimalna <small>za dobę</small></span>
                                    <input type="number" className="lsOptionInput"/>
                                </div>

                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Cena maksymalna <small>za dobę</small></span>
                                    <input type="number" className="lsOptionInput"/>
                                </div>

                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Dorosłych</span>
                                    <input type="number" className="lsOptionInput" placeholder={String(options.adult)}
                                           min={1}/>
                                </div>

                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Dzieci</span>
                                    <input type="number" className="lsOptionInput"
                                           placeholder={String(options.children)} min={0}/>
                                </div>

                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Pokój</span>
                                    <input type="number" className="lsOptionInput" placeholder={String(options.room)}
                                           min={1}/>
                                </div>
                            </div>

                        </div>
                        <button>Search</button>
                    </div>
                    <div className="listResult"></div>
                </div>
            </div>
        </div>
    );
};