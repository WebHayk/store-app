import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {ProductsReducerStateModel} from "../../models/interfaces/reducers";
import {ProductModel, ProductsResponseModel} from "../../models/interfaces/response";
import {CategoryProductsModel} from "../../models/interfaces";

const initialState: ProductsReducerStateModel = {
    filteredProducts: null,
    productsByCategory: null,
    productsByCategoryDetail: null,
    categories: null,
    product: null,
    wishlist: [],
    filters: {
        query: null,
        category: null
    }
};

const ProductsReducer = createSlice({
    name: "products-reducer",
    initialState,
    reducers: {
        setFilteredProducts(state, action: PayloadAction<ProductsResponseModel | null>) {
            let {payload} = action;
            state.filteredProducts = payload;
        },
        setProductsByCategory(state, action: PayloadAction<CategoryProductsModel[] | null>) {
            let {payload} = action;
            state.productsByCategory = payload;
        },
        setProductsByCategoryDetail(state, action: PayloadAction<ProductsResponseModel | null>) {
            let {payload} = action;
            state.productsByCategoryDetail = payload;
        },
        setProduct(state, action: PayloadAction<ProductModel | null>) {
            let {payload} = action;
            state.product = payload;
        },
        setCategories(state, action: PayloadAction<string[] | null>) {
            let {payload} = action;
            state.categories = payload;
        },
        setWishList(state, action: PayloadAction<number[] | null>) {
            let {payload} = action;
            state.wishlist = payload;
        },
        setFiltersQuery(state, action: PayloadAction<string | null>) {
            let {payload} = action;
            state.filters.query = payload;
        },
        setFiltersCategory(state, action: PayloadAction<string | null>) {
            let {payload} = action;
            state.filters.category = payload;
        }
    }
});

export const {
    setFilteredProducts,
    setProductsByCategory,
    setProduct,
    setCategories,
    setWishList,
    setFiltersQuery,
    setFiltersCategory,
    setProductsByCategoryDetail
} = ProductsReducer.actions;

export default ProductsReducer.reducer;
