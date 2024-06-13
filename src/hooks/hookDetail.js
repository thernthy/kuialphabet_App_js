import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import HttpClient from "../services/Http";

export const useWordDetail = () => {
    const { id } = useParams()
    const { en_word } = useParams()
    const { kh_word } = useParams()
    const fetchingDeltailWord = async (id, kh_word, en_word) => {
        const response = await HttpClient.get(`word/wordDetail?kh=${kh_word}&id=${id}&en=${en_word}`)
        return response.data
    }

    const { data, isLoading, error, refetch } = useQuery(
        {
            queryKey: ["word-detail",id, kh_word, en_word],
            queryFn: () => fetchingDeltailWord(id, kh_word, en_word),
            staleTime: 1000,
        }
    )

    return { data, isLoading, error, refetch }
}