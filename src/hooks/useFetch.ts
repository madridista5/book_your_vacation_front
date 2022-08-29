import {useEffect, useState} from "react";
import axios from "axios";
import {HotelInfoResponse} from "../../types/HotelResponse";

export const useFetch = (url: string) => {
    const [data, setData] = useState<(string | HotelInfoResponse)[]>(['']);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean | Error>(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await axios.get(url);
                setData(res.data);
            } catch (err: Error | any) {
                setError(err);
            }
            setLoading(false);
        }

        (async () => {
            await fetchData();
        })();

    }, [url]);

    const reFetch = async () => {
        setLoading(true);
        try {
            const res = await axios.get(url);
            setData(res.data);
        } catch (err: Error | any) {
            setError(err);
        }
        setLoading(false);
    }

    return {data, loading, error, reFetch};
};