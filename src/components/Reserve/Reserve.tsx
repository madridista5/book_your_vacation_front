import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {ChangeEvent, useContext, useEffect, useState} from "react";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {axiosFunction} from "../../utils/axios-function";
import {SearchContext} from "../../context/search.context";
import {RoomNumber} from "../../../types/RoomNumber";

import './Reserve.css';

interface Props {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    hotelId: string | undefined,
}

export const Reserve = ({setOpen, hotelId}: Props) => {
    const [data, setData] = useState([{
        title: '',
        desc: '',
        maxPeople: 0,
        price: 0,
        roomNumbers: [
            {
                number: 0,
                unavailableDates: [],
                _id: '',
            },
        ],
    }]);
    const [selectedRooms, setSelectedRooms] = useState<string[]>([]);
    const [isReserved, setIsReserved] = useState<boolean>(false);
    const {dates} = useContext(SearchContext);

    useEffect(() => {
        (async () => {
            const {data} = await axiosFunction.get(`/hotels/room/${hotelId}`);
            setData(data);
        })();
    }, []);

    const getDatesInRange = (startDate: Date, endDate: Date): number[] => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const date = new Date(start.getTime());

        let list: number[] = [];

        while (date <= end) {
            list.push(new Date(date).getTime());
            date.setDate(date.getDate() + 1);
        }
        return list;
    };
    const allDates: number[] = getDatesInRange(dates[0].startDate, dates[0].endDate);

    const isAvailable = (roomNumber: RoomNumber): boolean => {
        const isFound = roomNumber.unavailableDates.some(date => allDates.includes(new Date(date).getTime()));
        return !isFound;
    }

    const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
        const selected = e.target.checked;
        const value = e.target.value;
        setSelectedRooms(selected ? [...selectedRooms, value] : selectedRooms.filter(item => item !== value));
    };

    const handleClick = async () => {
        try {
            setIsReserved(true);
            await Promise.all(selectedRooms.map(roomId => {
                axiosFunction.put(`/rooms/availability/${roomId}`, {
                    dates: allDates,
                });
            }));
        } catch (err) {

        }
    };

    return (
        <div className="reserve">
            <div className="rContainer">
                <FontAwesomeIcon
                    icon={faCircleXmark}
                    className="rClose"
                    onClick={() => setOpen(false)}
                />
                {isReserved
                    ? <div className="rItem">Dziękujemy za złożenie rezerwacji.</div>
                    : <>
                    <span>Wybierz pokój / pokoje:</span>
                    {data.map((item, index) => (
                        <div className="rItem" key={index}>
                            <div className="rItemInfo">
                                <div className="rTitle">{item.title}</div>
                                <div className="rDesc">{item.desc}</div>
                                <div className="rMax">Maksymalnie osób: <b>{item.maxPeople}</b></div>
                                <div className="rPrice">Cena: {item.price} zł</div>
                            </div>

                            {item.roomNumbers.length > 0 && item.roomNumbers.map((roomNumber, index) => (
                                <div className="room" key={index}>
                                    <label>{roomNumber.number}</label>
                                    <input
                                        type="checkbox"
                                        value={roomNumber._id}
                                        onChange={handleSelect}
                                        disabled={!isAvailable(roomNumber)}
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                    <button className="rButton" onClick={handleClick}>Zarezerwuj teraz</button>
                </>}
            </div>
        </div>
    );
};