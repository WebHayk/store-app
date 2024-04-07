import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import {AppDispatchType, RootStateType} from "../models/types";

export const useAppDispatch: () => AppDispatchType = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
