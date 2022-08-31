import {createContext} from "react";

export const SearchContext = createContext({
    city: '',
    dates: [{
        startDate: new Date(),
        endDate: new Date(),
        key: '',
    }],
    options: {
        adult: 0,
        children: 0,
        room: 0,
    },
});