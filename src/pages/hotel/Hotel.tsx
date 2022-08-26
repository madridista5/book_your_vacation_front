import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Navbar} from "../../components/Navbar/Navbar";
import {Header} from "../../components/header/Header";
import {faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {MailList} from "../../components/MailList/MailList";
import {Footer} from "../../components/Footer/Footer";

import './Hotel.css';

export const Hotel = () => {
    const [slideNumber, setSlideNumber] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = (index: number) => {
        setSlideNumber(index);
        setOpen(true);
    };

    const handleMove = (direction: 'L' | 'R') => {
        let newSliderNumber;

        if(direction === 'L') {
            newSliderNumber = slideNumber === 0 ? 5 : slideNumber-1;
        } else {
            newSliderNumber = slideNumber === 5 ? 0 : slideNumber+1;
        }
        setSlideNumber(newSliderNumber);
    }

    const photos = [
        {
            src: 'https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_960_720.jpg',
        },
        {
            src: 'https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_960_720.jpg',
        },
        {
            src: 'https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_960_720.jpg',
        },
        {
            src: 'https://cdn.pixabay.com/photo/2014/08/11/21/40/bedroom-416062_960_720.jpg'
        },
        {
            src: 'https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_960_720.jpg'
        },
        {
            src: 'https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681_960_720.jpg'
        },
    ];

    return (
        <div>
            <Navbar/>
            <Header type="list"/>

            <div className="hotelContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)}/>
                    <FontAwesomeIcon
                        icon={faCircleArrowLeft}
                        className="arrow"
                        onClick={() => handleMove('L')}
                    />
                    <div className="sliderWrapper">
                        <img
                            src={photos[slideNumber].src} alt="photo"
                            className="sliderImg"/>
                    </div>
                    <FontAwesomeIcon
                        icon={faCircleArrowRight}
                        className="arrow"
                        onClick={() => handleMove('R')}
                    />
                </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Zarezerwuj teraz</button>
                    <h1 className="hotelTitle">Hotel Kraków</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>ul. Grunwaldzka 48, 57-900 Kraków</span>
                    </div>
                    <span className="hotelDistance">Świetna lokalizacja - 500m do centrum.</span>
                    <span className="hotelPriceHighlight">Rezerwacja od 350 zł plus darmowa taxi na lotnisko</span>

                    <div className="hotelImages">
                        {photos.map((photo, index) => (
                            <div className="hotelImgWrapper" key={photo.src}>
                                <img
                                    src={photo.src} alt="photo"
                                    className="hotelImg"
                                    onClick={() => handleOpen(index)}/>
                            </div>
                        ))}
                    </div>

                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">Zamieszkaj w centrum Krakowa</h1>
                            <p className="hotelDesc">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci earum, error facere facilis fugiat itaque nam saepe. Ab, ad at consectetur, consequuntur ducimus eaque earum eius enim est ex illo impedit iusto magni minima, neque sint totam? Aperiam, dignissimos, voluptatem.
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Idealny na 9 dniowy urlop</h1>
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias, animi atque blanditiis doloremque optio porro possimus provident ut veritatis.
                            </span>
                            <h2><b>3600 zł</b> za 9 dni</h2>
                            <button>Zarezerwuj teraz</button>
                        </div>
                    </div>
                </div>
                <MailList/>
                <Footer/>
            </div>
        </div>
    );
};