import axios from "axios"

export const httpClient = axios.create({
  baseURL: `https://www.kotv-001.com`,
})
//this is defualt url  baseURL: `https://moviesapi.ir`,
