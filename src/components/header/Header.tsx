import {faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useContext, useState} from "react";
import {DateRange, Range} from "react-date-range";
import {format} from "date-fns";
import {useNavigate} from "react-router-dom";

import './Header.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {SearchContext} from "../../context/search.context";

interface Props {
    type: string,
}

export const Header = (props: Props) => {
    const [destination, setDestination] = useState<string>('');
    const [date, setDate] = useState<Range[]>([{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    }]);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const [openDate, setOpenDate] = useState<boolean>(false);
    const [openOptions, setOpenOptions] = useState<boolean>(false);

    const navigate = useNavigate();

    const searchContext = useContext(SearchContext);

    const handleOption = (type: 'adult' | 'children' | 'room', count: number) => {
        setOptions(prev => {
            return {
                ...prev,
                [type]: options[type] + count, // options[type] === options.adult
            }
        })
    };

    const handleSearch = () => {
        searchContext.city = destination;
        if(typeof date[0].startDate !== 'undefined' && typeof date[0].endDate !== 'undefined') {
            searchContext.dates[0].startDate = date[0].startDate;
            searchContext.dates[0].endDate = date[0].endDate;
        }
        searchContext.options = options;

        navigate('/hotels', {
            state: {destination, date, options}
        });
    };

    return (
        <div className="header">
            <div className={props.type === 'list' ? 'headerContainer listMode' : 'headerContainer'}>
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
                {props.type !== 'list' &&
                    <>
                        <h1 className="headerTitle">Rabat !</h1>
                        <p className="headerDesc">10% taniej z darmowym kontem aplikacji Booking Travel.</p>
                        <button className="headerBtn">Logowanie / Rejestracja</button>
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                                <input
                                    type="text"
                                    placeholder="kierunek podróży"
                                    className="headerSearchInput"
                                    onChange={e => setDestination(e.target.value)}
                                />
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                                <span className="headerSearchText" onClick={() => setOpenDate(!openDate)}>
                {(typeof date[0].startDate !== 'undefined' && typeof date[0].endDate !== 'undefined') && `${format(date[0].startDate, 'dd/MM/yyy')} do ${format(date[0].endDate, 'dd/MM/yyy')}`}
                    </span>
                                {openDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    minDate={new Date()}
                                    className="date"
                                />}
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                                <span
                                    className="headerSearchText"
                                    onClick={() => setOpenOptions(!openOptions)}
                                >{`${options.adult} dorosłych | ${options.children} dzieci | ${options.room} pokój`}
                    </span>
                                {openOptions && <div className="options">
                                    <div className="optionItem">
                                        <span className="optionText">Dorosły</span>
                                        <div className="optionCounter">
                                            <button
                                                disabled={options.adult <= 1}
                                                className="optionCounterButton"
                                                onClick={() => handleOption('adult', -1)}
                                            >-
                                            </button>
                                            <span className="optionCounterNumber">{options.adult}</span>
                                            <button className="optionCounterButton"
                                                    onClick={() => handleOption('adult', 1)}>+
                                            </button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Dziecko</span>
                                        <div className="optionCounter">
                                            <button
                                                disabled={options.children <= 0}
                                                className="optionCounterButton"
                                                onClick={() => handleOption('children', -1)}
                                            >-
                                            </button>
                                            <span className="optionCounterNumber">{options.children}</span>
                                            <button className="optionCounterButton"
                                                    onClick={() => handleOption('children', 1)}>+
                                            </button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Pokój</span>
                                        <div className="optionCounter">
                                            <button
                                                disabled={options.room <= 1}
                                                className="optionCounterButton"
                                                onClick={() => handleOption('room', -1)}
                                            >-
                                            </button>
                                            <span className="optionCounterNumber">{options.room}</span>
                                            <button className="optionCounterButton"
                                                    onClick={() => handleOption('room', 1)}>+
                                            </button>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                            <div className="headerSearchItem">
                                <button className="headerBtn" onClick={handleSearch}>szukaj</button>
                            </div>
                        </div>
                    </>}
            </div>
        </div>
    );
};