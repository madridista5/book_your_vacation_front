import {useEffect, useState} from "react";
import axios from "axios";

export const useFetch = (apiUrl: string) => {
    const [data, setData] = useState<string[]>(['']);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean | Error>(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await axios.get(apiUrl);
                setData(res.data);
            } catch (err: Error | any) {
                setError(err);
            }
            setLoading(false);
        }

        (async () => {
            await fetchData();
        })();

    }, [apiUrl]);

    const reFetch = async () => {
        setLoading(true);
        try {
            const res = await axios.get(apiUrl);
            setData(res.data);
        } catch (err: Error | any) {
            setError(err);
        }
        setLoading(false);
    }

    return {data, loading, error, reFetch};
};