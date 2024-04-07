import {useAppSelector} from "../../hooks/ReduxToolkit";

export const useMainSelector = () => useAppSelector(state => state.main);
export const useProductsSelector = () => useAppSelector(state => state.products);
