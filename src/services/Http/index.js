import axios from "axios"

export const httpClient = axios.create({
  baseURL: `http://localhost:8000`,
})
//this is defualt url  baseURL: `https://moviesapi.ir`,
