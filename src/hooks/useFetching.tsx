import {useState} from "react";
import axios from "axios";
import * as React from "react";

type UseFetchingReturn = [(...args: any[]) => {}, boolean, string, React.Dispatch<React.SetStateAction<string>>]

export const useFetching = (callback: ((...args: any[]) => Promise<any>)): UseFetchingReturn => {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetching = async (...args: unknown[])=> {
        try {
            setLoading(true);
            await callback(...args);
        } catch (e) {
            if (axios.isAxiosError(e)) {
                if (e.response?.status === 400)
                    setError("Incorrect username or password")
                else
                    setError(e.message);
            }
        } finally {
            setLoading(false);
        }
    }

    return [fetching, isLoading, error, setError];
}
