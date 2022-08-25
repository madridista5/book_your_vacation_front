import React from "react";

import './MailList.css';

export const MailList = () => (
    <div className="mail">
        <h1 className="mailTitle">Oszczędź czas i pieniądze !</h1>
        <span className="mailDesc">Zapisz się, a wyślemy ofertę przygotowaną specjalnie dla Ciebie</span>
        <div className="mailInputContainer">
            <input type="text" placeholder="Twój email"/>
            <button>Subskrybuj</button>
        </div>
    </div>
);