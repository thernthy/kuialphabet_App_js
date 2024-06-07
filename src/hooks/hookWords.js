import { useQuery } from "@tanstack/react-query";
import HttpClient from "../services/Http";
import { useState } from "react";

export const useHookWord = () => {
    const [filterByCategory, setFilterByCategory] = useState(null);
    const [filterAlphabetEn, setFilterAlphabetEn] = useState(null);
    const [filterAlphabetKh, setFilterAlphabetKh] = useState(null);

    // Ensure setPageCount is defined or imported
    const setPageCount = (pageCount) => {
        console.log(`Total pages: ${pageCount}`);
    };

    const fetchWord = async ({ filterByCategory, filterAlphabetEn, filterAlphabetKh }) => {
        const payload = { page: 1 };
    
        // Add filters to the payload if they are provided
        if (filterByCategory) {
            payload.filterByCategory = filterByCategory;
        }
        if (filterAlphabetEn) {
            payload.filterAlphabetEn = filterAlphabetEn;
        }
        if (filterAlphabetKh) {
            payload.filterAlphabetKh = filterAlphabetKh;
        }
    
        // Make the HTTP POST request with the payload
        const response = await HttpClient.post('word/get', payload);
        return response.data.data;
    };

    const onSuccess = (data) => {
        console.log("fetch succeeded!", data);
    };

    const onError = (error) => {
        console.log("fetch failed!", error);
    };

    const { data, isLoading, error, isError, refetch } = useQuery({
        queryKey: ["words", filterByCategory, filterAlphabetEn, filterAlphabetKh],
        queryFn: () => fetchWord({ filterByCategory, filterAlphabetEn, filterAlphabetKh }),
        staleTime: 1000,
        onSuccess: onSuccess,
        onError: onError,
    });

    return { 
        data, 
        isLoading, 
        error, 
        refetch, 
        filterByCategory, 
        setFilterByCategory,
        filterAlphabetEn, 
        setFilterAlphabetEn,
        filterAlphabetKh, 
        setFilterAlphabetKh 
    };
};
