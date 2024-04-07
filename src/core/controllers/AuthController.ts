import {AppDispatchType} from "../models/types";
import {AuthService} from "../services/AuthService";
import {LoginRequestDTOModel} from "../models/interfaces/dto";
import {setSession} from "../store/reducers/MainReducer";
import {SessionModel} from "../models/interfaces/response";
import {setWishList} from "../store/reducers/ProductsReducer";

export class AuthController {
    private dispatch: AppDispatchType;

    constructor(dispatch: AppDispatchType) {
        this.dispatch = dispatch;
    }

    onLogin = async (
        body: LoginRequestDTOModel
    ) => {
        let {dispatch} = this;
        let response = await AuthService.login(body);
        if (!response) return;
        dispatch(setWishList(null));
        dispatch(setSession(response));
        return true;
    }
}
