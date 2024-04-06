import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { httpClient } from "../services/Http";
import { MOVIES } from "../config/api-endpoints";

export const useViewComic = () => {
    const { id } = useParams()
    const { title } = useParams()
    const { ep } = useParams()
    const { totalPart } = useParams()
    const fetchMovieDetail = async (id, title, ep) => {
        
        const response = await httpClient.get(`${MOVIES}/view?t=${title}&id=${id}&ep=${ep}&mp=${totalPart}`, {
            headers: {
                'X-API-Key' : process.env.REACT_APP_API_KEY
            },
        })
        return response.data
    }


    const { data, isLoading, error, refetch} = useQuery(
        {
            queryKey: ["view-comic", id],
            queryFn: () => fetchMovieDetail(id, title, ep),
            staleTime: 1000,
        }
    )

    return { data, isLoading, error, refetch}
}