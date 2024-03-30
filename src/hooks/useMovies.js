import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { httpClient } from "../services/Http";
import { MOVIES } from "../config/api-endpoints";


export const useMovies = () => {
    const [page, setPage] = useState(6)
    const [pageCount, setPageCount] = useState(25)

    const fetchMovies = async (page) => {
        //const response = await httpClient.get(`${MOVIES}`)
        const response = await httpClient.get(`${MOVIES}?page=${page}&token=.xLU2hPgsarS6&filter=all`)
        //console.log(response)
        setPageCount(response.data.last_page)
        return response.data
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