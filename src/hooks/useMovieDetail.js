import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { httpClient } from "../services/Http";
import { MOVIES } from "../config/api-endpoints";

export const useMovieDetail = () => {
    const { id } = useParams()
    const { title } = useParams()
    const { ep } = useParams()

    const fetchMovieDetail = async (id, title, ep) => {
        const response = await httpClient.get(`${MOVIES}/detail?t=${title}&id=${id}&ep=${ep}`, {
            headers: {
                'X-API-Key' : process.env.REACT_APP_API_KEY
            },
        })
        return response.data
    }

    const { data, isLoading, error, refetch } = useQuery(
        {
            queryKey: ["movie-detail", id],
            queryFn: () => fetchMovieDetail(id, title, ep),
            staleTime: 1000,
        }
    )

    return { data, isLoading, error, refetch }
}