import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {ChangeEvent, useEffect, useState} from "react";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {axiosFunction} from "../../utils/axios-function";

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

    useEffect(() => {
        (async () => {
            const {data} = await axiosFunction.get(`/hotels/room/${hotelId}`);
            setData(data);
        })();
    }, []);

    const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
        const selected = e.target.checked;
        const value = e.target.value;
        setSelectedRooms(selected ? [...selectedRooms, value] : selectedRooms.filter(item => item !== value));
    }

    return (
        <div className="reserve">
            <div className="rContainer">
                <FontAwesomeIcon
                    icon={faCircleXmark}
                    className="rClose"
                    onClick={() => setOpen(false)}
                />
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
                                <input type="checkbox" value={roomNumber._id} onChange={handleSelect}/>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};