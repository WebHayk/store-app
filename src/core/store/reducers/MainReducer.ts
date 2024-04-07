import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {MainReducerStateModel} from "../../models/interfaces/reducers";
import {SessionModel} from "../../models/interfaces/response";

const initialState: MainReducerStateModel = {
    session: null
};

const MainReducer = createSlice({
    name: "main-reducer",
    initialState,
    reducers: {
        setSession(state, action: PayloadAction<SessionModel | null>) {
            let {payload} = action;
            state.session = payload;
        }
    }
});

export const {
    setSession
} = MainReducer.actions;

export default MainReducer.reducer;
