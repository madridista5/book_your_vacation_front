import {createContext} from "react";

export const AuthContext = createContext({
    user: {
        _id: '',
        username: '',
        email: '',
    },
    loading: false,
    error: null,
});