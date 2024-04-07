import {ProductModel, ProductsResponseModel, SessionModel} from "../response";
import {CategoryProductsModel} from "../index";

export interface MainReducerStateModel {
    session: SessionModel | null
}

export interface ProductsReducerStateModel {
    filteredProducts: ProductsResponseModel | null,
    productsByCategory: CategoryProductsModel[] | null,
    productsByCategoryDetail: ProductsResponseModel | null,
    categories: string[] | null,
    product: ProductModel | null,
    wishlist: number[] | null,
    filters: {
        query: string | null,
        category: string | null
    }
}
