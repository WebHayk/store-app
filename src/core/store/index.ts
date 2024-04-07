import {combineReducers, configureStore} from "@reduxjs/toolkit";
import MainReducer from "./reducers/MainReducer";
import {persistReducer, persistStore} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ProductsReducer from "./reducers/ProductsReducer";

const persistConfig = {
    key: "root",
    storage: AsyncStorage
};

const rootReducer = combineReducers({
    main: MainReducer,
    products: ProductsReducer
});

const persistedReducer = persistReducer(
    persistConfig,
    rootReducer
);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
});

const persistor = persistStore(store);

export {store, persistor};
