import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { httpClient } from "../services/Http";
import { MOVIES } from "../config/api-endpoints";

console.log(process.env.REACT_APP_API_KEY);

export const useMovies = () => {
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(25)
    const fetchMovies = async (page) => {
        try {
            const response = await httpClient.get(`${MOVIES}?page=${page}&token=.thenthy&filter=all`, {
                headers: {
                    'X-API-Key' : process.env.REACT_APP_API_KEY 
                },
            })

            setPageCount(response.data.last_page)
            return response.data;
          } catch (error) {
            // Handle errors here
            console.error('Error:', error);
            throw error;
          }
    }

    const onSuccess = (data) => {
        console.log("fetch succeeded!", data.data)
    }

    const onError = (error) => {
        console.log("fetch failed!", error)
    }

    const { data, isLoading, error, isError, refetch } = useQuery(
        {
            queryKey: ["movies", page],
            queryFn: () => fetchMovies(page),
            staleTime: 1000,
            onSuccess: onSuccess,
            onError: onError,
        }
    )

    return {data, isLoading, error, setPage, pageCount, refetch}
}