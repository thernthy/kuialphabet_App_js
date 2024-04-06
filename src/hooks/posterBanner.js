import { useState } from "react";
import { httpClient } from "../services/Http";

export const getPosterBanner = async (btp, w, h, setBannerData) => {
    try {
        const response = await httpClient.get(`comic/banner?btp=${btp}&w=${w}&h=${h}`, {
            headers: {
                'X-API-Key' : process.env.REACT_APP_API_KEY 
            },
        })
        if(response.data){
            setBannerData(response.data)
        }
        //return response.data;
    } catch (error) {
            // Handle errors here
            console.error('Error:', error);
            throw error;
    }
}