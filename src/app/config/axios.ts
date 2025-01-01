import axios from "axios";

export const callAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
