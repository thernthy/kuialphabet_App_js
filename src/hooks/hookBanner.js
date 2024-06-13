
import { useQuery } from "@tanstack/react-query";
import HttpClient from "../services/Http";

export const HookBannerListing = () => {
    const fetchBanner = async () => {
            const response = await HttpClient.get(`/banners/list?limit=3`, {
        })
        //console.log(response)
        return response.data
    }

    const onSuccess = (data) => {
        //console.log("fetch succeeded!", data)
    }

    const onError = (error) => {
        console.log("fetch failed!", error)
    }


    const { data, isLoading, error, isError, refetch } = useQuery(
        {
            queryKey: ["banner"],
            queryFn: () => fetchBanner(),
            staleTime: 1000,
            onSuccess: onSuccess,
            onError: onError,
        }
    )
    return {data, isLoading, error, refetch}
}