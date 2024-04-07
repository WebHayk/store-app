import axios from "axios";
import {API_BASE_URL} from "../common/variables";
import {ApiService} from "./api.config";

const $api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

$api.interceptors.response.use((config) => {
    return config;
}, (error) => ApiService.onResponseRejected(error));

export default $api;
