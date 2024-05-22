import axios from "axios";
// Не видит абсолютный импорт, временное решение
// import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { USER_LOCALSTORAGE_KEY } from "../const/localStorage";

export const api = axios.create({
    baseURL: __API__,
});

api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization =
            localStorage.getItem(USER_LOCALSTORAGE_KEY) || "";
    }
    return config;
});
