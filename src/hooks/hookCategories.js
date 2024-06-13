import { useQuery } from "@tanstack/react-query";
import HttpClient from "../services/Http";

export const useCategory = () => {
    // Ensure setPageCount is defined or imported
    const setPageCount = (pageCount) => {
        console.log(`Total pages: ${pageCount}`);
    };

    const fetchGenres = async () => {
        const response = await HttpClient.post(`categorieslist?page=1`);
        //console.log(response.data.data)
        return response.data.data;
    };

    const onSuccess = (data) => {
        console.log("fetch succeeded!", data);
    };

    const onError = (error) => {
        console.log("fetch failed!", error);
    };

    const { data, isLoading, error, isError, refetch } = useQuery({
        queryKey: ["category_id"],
        queryFn: fetchGenres,
        staleTime: 1000,
        onSuccess: onSuccess,
        onError: onError,
    });

    return { data, isLoading, error, refetch };
};
