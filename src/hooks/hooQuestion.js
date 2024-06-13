import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import HttpClient from "../services/Http";

export const HookQuestion = () => {
    const [search, setSearch] = useState(null)
    const fetchFaqs = async (search) => {
            const response = await HttpClient.get(`faqs/get${search? `?${search}`:""}`, {
        })
        //console.log(response.data.questions)
        return response.data.questions
    }

    const onSuccess = (data) => {
        //console.log("fetch succeeded!", data)
    }

    const onError = (error) => {
        console.log("fetch failed!", error)
    }


    const { data, isLoading, error, isError, refetch } = useQuery(
        {
            queryKey: ["faqs"],
            queryFn: () => fetchFaqs(search),
            staleTime: 1000,
            onSuccess: onSuccess,
            onError: onError,
        }
    )
    return {data, isLoading, error, search, setSearch, refetch}
}