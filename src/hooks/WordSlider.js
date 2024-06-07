import { useQuery } from "@tanstack/react-query";
import HttpClient from "../services/Http";
import { useState } from "react";

export const useHookWordSlider = () => {
    const[limit, setLimit] = useState(8);
    const fetchWord = async ({ limit }) => {
        
        const payload = {};
        // Add filters to the payload if they are provided
        if (limit) {
            payload.limit = limit;
        }
        // Make the HTTP POST request with the payload
        const response = await HttpClient.post('word/poster', payload);
        return response.data;
    };

    const onSuccess = (data) => {
        console.log("fetch succeeded!", data);
    };

    const onError = (error) => {
        console.log("fetch failed!", error);
    };

    const { data, isLoading, error, isError, refetch } = useQuery({
        queryKey: ["wordsSlider", limit],
        queryFn: () => fetchWord({ limit }),
        staleTime: 1000,
        onSuccess: onSuccess,
        onError: onError,
    });

    return { 
        data, 
        isLoading, 
        error, 
        refetch, 
        limit,
        setLimit
    };
};
