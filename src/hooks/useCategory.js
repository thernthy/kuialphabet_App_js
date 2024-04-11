import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { httpClient } from "../services/Http";
import { GENRES } from "../config/api-endpoints";


export const useCategory = () => {
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState()
    const { id } = useParams()

    const fetchGenres = async (id, page) => {
        //const response = await httpClient.get(`${GENRES}/${id}/movies?page=${page}`)
        const response = await httpClient.get(`${GENRES}/get?requestCategory=${id}&page=${page}`, {
                headers: {
                    'X-API-Key' : process.env.REACT_APP_API_KEY
                },
        })
        setPageCount(response.data.data.last_page)
        return response.data.data
    }

    const onSuccess = (data) => {
        console.log("fetch succeeded!", data)
    }

    const onError = (error) => {
        console.log("fetch failed!", error)
    }


    const { data, isLoading, error, isError, refetch } = useQuery(
        {
            queryKey: ["category_id", id, page],
            queryFn: () => fetchGenres(id, page),
            staleTime: 1000,
            onSuccess: onSuccess,
            onError: onError,
        }
    )
    return {data, isLoading, error, setPage, pageCount, refetch}
}