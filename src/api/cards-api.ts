import axios from "axios";


const settings = {
    withCredentials: false,

}
export const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
    ...settings
})