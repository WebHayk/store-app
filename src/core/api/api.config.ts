import {AxiosError} from "axios";

export class ApiService {
    static onResponseRejected = async (
        error: AxiosError
    ) => {
        return Promise.reject(error);
    }
}
