import React, {useContext, useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Navbar} from "../../components/Navbar/Navbar";
import {Header} from "../../components/header/Header";
import {faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {MailList} from "../../components/MailList/MailList";
import {Footer} from "../../components/Footer/Footer";
import {useFetch} from "../../hooks/useFetch";
import {apiUrl} from "../../config/api";
import {useLocation, useNavigate} from "react-router-dom";
import {HotelInfoResponse} from "../../../types/HotelResponse";
import {SearchContext} from "../../context/search.context";
import {dayDifference} from "../../utils/dayDifference";
import {AuthContext} from "../../context/auth.context";
import {Reserve} from "../../components/Reserve/Reserve";

import './Hotel.css';

export const Hotel = () => {
    const location = useLocation();
    const hotelId = location.pathname.split('/')[2];

    const [slideNumber, setSlideNumber] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [hotelInfo, setHotelInfo] = useState<HotelInfoResponse>();

    const {loading} = useFetch(`${apiUrl}/hotels/${hotelId}`);
    const searchContext = useContext(SearchContext);

    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/hotels/${hotelId}`);
            const resHotel = await res.json();
            setHotelInfo(resHotel);
        })();
    }, []);

    const days = dayDifference(searchContext.dates[0].startDate, searchContext.dates[0].endDate);

    const handleOpen = (index: number) => {
        setSlideNumber(index);
        setOpen(true);
    };

    const handleMove = (direction: 'L' | 'R') => {
        if(hotelInfo !== undefined && hotelInfo.photos.length > 0) {
            let newSliderNumber;

            if(direction === 'L') {
                newSliderNumber = slideNumber === 0 ? hotelInfo.photos.length - 1 : slideNumber-1;
            } else {
                newSliderNumber = (slideNumber === hotelInfo.photos.length - 1) ? 0 : slideNumber+1;
            }
            setSlideNumber(newSliderNumber);
        }
    }

    const handleClick = () => {
        if(user._id !== '') {
            setOpenModal(true);
        } else {
            navigate('/login');
        }
    };

    return (
        <div>
            <Navbar/>
            <Header type="list"/>

            {loading
                ? <p>Wczytywanie danych. Proszę czekać.</p>
                : <div className="hotelContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)}/>
                    <FontAwesomeIcon
                        icon={faCircleArrowLeft}
                        className="arrow"
                        onClick={() => handleMove('L')}
                    />
                    <div className="sliderWrapper">
                        {hotelInfo !== undefined && <img
                            src={hotelInfo.photos[slideNumber]} alt="photo"
                            className="sliderImg"/>}
                    </div>
                    <FontAwesomeIcon
                        icon={faCircleArrowRight}
                        className="arrow"
                        onClick={() => handleMove('R')}
                    />
                </div>}
                    {hotelInfo !== undefined && <div className="hotelWrapper">
                        <button className="bookNow">Zarezerwuj teraz</button>
                        <h1 className="hotelTitle">{hotelInfo.name}</h1>
                        <div className="hotelAddress">
                            <FontAwesomeIcon icon={faLocationDot}/>
                            <span>{hotelInfo.address}</span>
                        </div>
                        <span className="hotelDistance">Świetna lokalizacja - {hotelInfo.distance}m do centrum.</span>
                        <span className="hotelPriceHighlight">Rezerwacja od {hotelInfo.cheapestPrice} zł plus darmowa taxi na lotnisko</span>

                        <div className="hotelImages">
                            {hotelInfo.photos.map((photo, index) => (
                                <div className="hotelImgWrapper" key={photo}>
                                    <img
                                        src={photo} alt="photo"
                                        className="hotelImg"
                                        onClick={() => handleOpen(index)}/>
                                </div>
                            ))}
                        </div>

                        <div className="hotelDetails">
                            <div className="hotelDetailsTexts">
                                <h1 className="hotelTitle">{hotelInfo.title}</h1>
                                <p className="hotelDesc">{hotelInfo.desc}</p>
                            </div>
                            <div className="hotelDetailsPrice">
                                <h1>Idealny na twój {days} dniowy urlop</h1>
                                <span>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias, animi atque blanditiis doloremque optio porro possimus provident ut veritatis.
                            </span>
                                <h2><b>{hotelInfo.cheapestPrice * days * searchContext.options.room} zł</b> za {days} dni</h2>
                                <button onClick={handleClick}>Zarezerwuj teraz</button>
                            </div>
                        </div>
                    </div>}
                <MailList/>
                <Footer/>
            </div>}
            {openModal && <Reserve setOpen={setOpenModal} hotelId={hotelInfo?._id}/>}
        </div>
    );
};