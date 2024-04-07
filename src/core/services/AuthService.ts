import {API_BASE_URL} from "../common/variables";
import {LoginRequestDTOModel} from "../models/interfaces/dto";
import axios from "axios";
import {SessionModel} from "../models/interfaces/response";

export class AuthService {
    static login = async (body: LoginRequestDTOModel): Promise<SessionModel | null> => {
        try {
            let response = await axios.post<SessionModel>(`${API_BASE_URL}/auth/login`, body);
            return response.data;
        } catch (error) {
            alert("Error from the server. Try again.");
            return null;
        }
    }
}
