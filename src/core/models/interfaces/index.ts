import {ProductModel} from "./response";

export interface VectorIconPropsModel {
    fill?: string
}

export interface CategoryProductsModel {
    category: string,
    products: ProductModel[]
}
