import axios from "axios";

export const post= (route,body) => {
        return axios.post(`${import.meta.env.VITE_REACT_APP_AUTH_URL}${route}`,body, { headers: { "Content-Type": "application/json" } })
} 